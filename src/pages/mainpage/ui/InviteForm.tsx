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

interface FormData {
  groupName: string;
  nickname: string;
  groupCode: string;
}

interface GroupFormProps {
  onSubmit: (data: FormData) => void;
}

const GroupForm = ({ onSubmit }: GroupFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    mode: "onSubmit",
    resolver: zodResolver(groupFormSchema),
  });

  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [login, setLogin] = useRecoilState(loginState); // 로그인 상태를 Recoil로 관리

  const handleFormSubmit = async (data: FormData) => {
    const requestBody = {
      partyName: data.groupName,
      name: data.nickname,
      password: data.groupCode,
    };

    try {
      const response = await serverInstance.post("/api/v1/parties/users/signup", requestBody);
      console.log("API Response:", response.data.success);
      onSubmit(data); // 부모 컴포넌트로 전달

      // 로그인 상태 업데이트 (예: 회원가입 후 로그인 처리)
      setLogin({
        ...login,
        success: response.data.success,
        isLoggedIn: true,
      });
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.reason || "회원가입 중 오류가 발생했습니다.";
      console.error("API Error:", errorMessage);
      setAlertMessage(errorMessage);

      setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {alertMessage && <CustomAlertWrapper>
        <CustomAlert message={alertMessage} duration={3000} />
      </CustomAlertWrapper>}

      <CustomInput>
        <SpanLabel>그룹 이름</SpanLabel>
        <Input
          {...register("groupName")}
          width={cvw(690)}
          height={cvh(55)}
        />
      </CustomInput>
      {errors.groupName && <ErrorText>{errors.groupName.message}</ErrorText>}

      <CustomInput>
        <SpanLabel>닉네임</SpanLabel>
        <Input
          {...register("nickname")}
          width={cvw(690)}
          height={cvh(55)}
        />
      </CustomInput>
      {errors.nickname && <ErrorText>{errors.nickname.message}</ErrorText>}

      <CustomInput>
        <SpanLabel>그룹 코드</SpanLabel>
        <Input
          {...register("groupCode")}
          width={cvw(690)}
          height={cvh(55)}
        />
      </CustomInput>
      {errors.groupCode && <ErrorText>{errors.groupCode.message}</ErrorText>}

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
