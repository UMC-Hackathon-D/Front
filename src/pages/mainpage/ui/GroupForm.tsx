import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import theme from "@app/styles/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { groupFormSchema } from "@shared/schemas/GroupSchema";
import { serverInstance } from "@shared/apiInstance/index";
import CustomAlert from "@shared/ui/CustomAlert";
import { z } from "zod";

type FormData = z.infer<typeof groupFormSchema>;
interface GroupFormProps {
    onSubmit: (data: FormData) => void;
    onClose: () => void;
}

const GroupForm = ({ onSubmit, onClose }: GroupFormProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(groupFormSchema),
        mode: "onChange",
    });

    const [alertMessage, setAlertMessage] = useState<string | null>(null);

    const handleFormSubmit = async (data: FormData) => {
        try {
            const response = await serverInstance.post(
                "/api/v1/parties/create",
                data
            );
            console.log("API Response:", response.data);
            onSubmit(data); // 부모 컴포넌트로 전달
            setAlertMessage("그룹 입장하기를 통해 들어가주세요.");
            reset();
        } catch (error: any) {
            const errorMessage =
                error.response?.data?.error?.reason ||
                "그룹 생성 중 오류가 발생했습니다.";
            console.log("API Error:", error.response?.data || error.reason);
            setAlertMessage(errorMessage);
        }
    };

    const handleClose = () => {
        reset();
        onClose();
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
                        {...register("partyName")}
                        width={cvw(690)}
                        height={cvh(55)}
                    />
                </CustomInput>
                {errors.partyName && (
                    <ErrorMessage>{errors.partyName.message}</ErrorMessage>
                )}

                <CustomInput>
                    <SpanLabel>닉네임</SpanLabel>
                    <Input
                        {...register("name")}
                        width={cvw(690)}
                        height={cvh(55)}
                    />
                </CustomInput>
                {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}

                <CustomInput>
                    <SpanLabel>그룹 인원</SpanLabel>
                    <StyledSelect {...register("numMember")}>
                        {[2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </StyledSelect>
                    <SpanLabel>명</SpanLabel>
                </CustomInput>

                <CustomInput>
                    <SpanLabel>그룹 코드</SpanLabel>
                    <Input
                        {...register("password")}
                        width={cvw(690)}
                        height={cvh(55)}
                    />
                </CustomInput>
                {errors.password && (
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}

                <ButtonContainer>
                    <Button
                        bgColor={theme.yellow.y500}
                        fontSize={theme.headingFontSize.h2}
                        width={cvw(180)}
                        height={cvh(90)}
                        type="button"
                        onClick={handleClose}
                    >
                        취소
                    </Button>

                    <Button
                        bgColor={theme.red.r500}
                        fontSize={theme.headingFontSize.h2}
                        width={cvw(180)}
                        height={cvh(90)}
                        type="submit"
                    >
                        확인
                    </Button>
                </ButtonContainer>
            </form>
        </>
    );
};

export default GroupForm;

const CustomInput = styled.div`
    display: flex;
    align-items: center;
    margin: ${cvw(30)} 0;
    margin-bottom: ${cvh(11)};
`;

const SpanLabel = styled.span`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 150px;
`;

const StyledSelect = styled.select.attrs(() => ({ className: "pixel" }))`
    font-family: "NeoDunggeunmo", sans-serif;
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: ${cvw(100)};
    height: ${cvh(71)};
    box-sizing: border-box;
    margin-right: ${cvw(28)};
    padding-top: 4px;
    padding-left: ${cvw(43)};
    appearance: none;
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
    bottom: ${cvh(160)}; // 화면 상단에 배치 (하단은 bottom: 20px로 변경 가능)
    z-index: 1000;
    justify-content: center;
    text-align: center;
`;
