import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import theme from "@app/styles/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomAlert from "@shared/ui/CustomAlert";
import { serverInstance } from "@shared/apiInstance";
import { useNavigate } from "react-router-dom";

const groupRejoinSchema = z.object({
    groupName: z.string().min(1, "그룹 이름을 입력해주세요."),
    nickname: z.string().min(1, "닉네임을 입력해주세요."),
});

interface FormData {
    groupName: string;
    nickname: string;
}

interface GroupRejoinFormProps {
    onSubmit: (data: FormData) => void;
    onClose: () => void;
}

const GroupRejoinForm = ({ onSubmit }: GroupRejoinFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(groupRejoinSchema),
        mode: "onChange"
    });

    const navigate = useNavigate();
    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const handleFormSubmit = async (data: FormData) => {
        const { groupName, nickname } = data;
        try {
            const response = await serverInstance.get(
                `/api/v1/parties/${groupName}/users/${nickname}`
            );
            
            console.log("Response:", response.data);
            onSubmit(data); // 부모 컴포넌트에 데이터 전달
            navigate("/groupHome");
        } catch (error: any) {
            const errorMessage = error.response?.data?.error?.reason || "그룹 다시 입장 중 오류가 발생했습니다.";
            console.error("Error:", errorMessage);
            setAlertMessage(errorMessage);
        }
    };

    return (
        <>
            {alertMessage && (
                <CustomAlertWrapper>
                    <CustomAlert
                        message={alertMessage}
                        duration={3000}
                        onClose={() => setAlertMessage(null)}
                    />
                </CustomAlertWrapper>
            )}
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <CustomInput>
                    <SpanLabel>그룹 이름</SpanLabel>
                    <Input
                        {...register("groupName")}
                        width={cvw(690)}
                        height={cvh(55)}
                    />
                </CustomInput>
                {errors.groupName && <ErrorMessage>{errors.groupName.message}</ErrorMessage>}

                <CustomInput>
                    <SpanLabel>닉네임</SpanLabel>
                    <Input
                        {...register("nickname")}
                        width={cvw(690)}
                        height={cvh(55)}
                    />
                </CustomInput>
                {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}

                <ButtonContainer>
                    <Button
                        bgColor={theme.blue.b500}
                        fontSize={theme.headingFontSize.h2}
                        width={cvw(180)}
                        height={cvh(90)}
                        type="submit"
                    >
                        들어가기
                    </Button>
                </ButtonContainer>
            </form>
        </>
    );
};

export default GroupRejoinForm;


const CustomInput = styled.div`
    display: flex;
    align-items: center;
    margin: ${cvw(50)} 0;
    margin-bottom: ${cvh(11)};
`;

const SpanLabel = styled.span`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 150px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${cvw(23)};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: ${cvh(60)};
`;

const ErrorMessage = styled.span`
    color: red;
    margin-left: ${cvw(140)};
`;

const CustomAlertWrapper = styled.div`
    position: fixed;
    margin-left: 21%;
    bottom: ${cvh(160)};  // 화면 상단에 배치 (하단은 bottom: 20px로 변경 가능)
    z-index: 1000;
    justify-content: center;
    text-align: center;
`;
