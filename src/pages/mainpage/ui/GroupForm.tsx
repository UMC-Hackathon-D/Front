import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import theme from "@app/styles/theme";
import { zodResolver } from "@hookform/resolvers/zod";
import { groupFormSchema } from "@shared/schemas/GroupSchema";
import CustomAlert from "@shared/ui/CustomAlert";
import { z } from "zod";
import { useRecoilState } from "recoil";
import { loginState } from "@shared/recoil/recoil";

type FormData = z.infer<typeof groupFormSchema>;

interface GroupFormProps {
    onSubmit: (data: FormData) => void;
}

const GroupForm = ({ onSubmit, onClose }: GroupFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(groupFormSchema),
        mode: "onSubmit",
    });

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [login, setLogin] = useRecoilState(loginState); // 로그인 상태를 Recoil로 관리

    const handleFormSubmit = async (data: FormData) => {
        onSubmit(data);
    };
    const handleClose = () => {
        reset(); // 폼 리셋
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
                <CustomInputWrapper>
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
                </CustomInputWrapper>

                <CustomInputWrapper>
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
                </CustomInputWrapper>

                <CustomInputWrapper>
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
                </CustomInputWrapper>

                <CustomInputWrapper>
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
                </CustomInputWrapper>

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

const CustomInputWrapper = styled.div`
    margin-bottom: ${cvh(30)};
`;

const CustomInput = styled.div`
    display: flex;
    align-items: center;
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
    margin-top: ${cvh(35)};
    margin-bottom: ${cvh(44)};
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
