import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { groupFormSchema } from "@shared/schemas/GroupSchema";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import theme from "@app/styles/theme";
import { serverInstance } from "@shared/apiInstance/index";
import { useState } from "react";
import CustomAlert from "@shared/ui/CustomAlert";
import { useRecoilState } from "recoil"; // useRecoilState 추가
import { loginState } from "@shared/recoil/recoil"; // loginState import
import { on } from "events";

interface FormData {
    partyName: string;
    name: string;
    password: string;
}

interface GroupFormProps {
    onSubmit: (data: FormData) => void;
}

const GroupForm = ({ onSubmit }: GroupFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onSubmit",
        resolver: zodResolver(groupFormSchema),
    });

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [login, setLogin] = useRecoilState(loginState); // 로그인 상태를 Recoil로 관리

    const handleFormSubmit = async (data: FormData) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            {alertMessage && (
                <CustomAlertWrapper>
                    <CustomAlert message={alertMessage} duration={3000} />
                </CustomAlertWrapper>
            )}

            <CustomInput>
                <SpanLabel>그룹 이름</SpanLabel>
                <Input
                    {...register("partyName")}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>
            {errors.partyName && (
                <ErrorText>{errors.partyName.message}</ErrorText>
            )}

            <CustomInput>
                <SpanLabel>닉네임</SpanLabel>
                <Input
                    {...register("name")}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

            <CustomInput>
                <SpanLabel>그룹 코드</SpanLabel>
                <Input
                    {...register("password")}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>
            {errors.password && (
                <ErrorText>{errors.password.message}</ErrorText>
            )}

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

const ErrorText = styled.span`
    color: red;
    margin-left: ${cvw(140)};
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

const CustomAlertWrapper = styled.div`
    position: fixed;
    margin-left: ${cvw(340)};
    bottom: ${cvh(190)};
    z-index: 1000;
    justify-content: center;
    text-align: center;
`;
