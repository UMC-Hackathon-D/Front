import { useForm } from "react-hook-form";
import Input from "@shared/ui/Input";
import Button from "@shared/ui/Button";
import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";
import theme from "@app/styles/theme";

interface FormData {
    groupName: string;
    nickname: string;
    groupSize: number;
    groupCode: string;
}

interface GroupFormProps {
    onSubmit: (data: FormData) => void;
    onClose: () => void;
}

const GroupForm = ({ onSubmit, onClose }: GroupFormProps) => {
    const { register, handleSubmit, watch } = useForm<FormData>({
        mode: "onChange"
    });

    // watch를 사용하여 실시간으로 폼 데이터를 추적하고 출력합니다.
    const formData = watch();  // 모든 입력값을 실시간으로 추적
    console.log("Form data:", formData); // 폼 값 실시간 출력

    const handleFormSubmit = (data: FormData) => {
        console.log("groupform : ", data);  // 폼 데이터 출력
        onSubmit(data); // 부모 컴포넌트로 전달
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <CustomInput>
                <SpanLabel>그룹 이름</SpanLabel>
                <Input
                    {...register("groupName", { required: true })}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>

            <CustomInput>
                <SpanLabel>닉네임</SpanLabel>
                <Input
                    {...register("nickname", { required: true })}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>

            <CustomInput>
                <SpanLabel>그룹 인원</SpanLabel>
                <StyledSelect {...register("groupSize")}>
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
                    {...register("groupCode", { required: true })}
                    width={cvw(690)}
                    height={cvh(55)}
                />
            </CustomInput>

            <ButtonContainer>
                <Button
                    bgColor={theme.yellow.y500}
                    fontSize={theme.headingFontSize.h2}
                    width={cvw(180)}
                    height={cvh(90)}
                    type="button"
                    onClick={onClose}
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
    );
};

export default GroupForm;

const CustomInput = styled.div`
    display: flex;
    align-items: center;
    margin: ${cvw(30)} 0;
`;

const SpanLabel = styled.span`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 150px;
`;

const StyledSelect = styled.select.attrs(() => ({ className: "pixel" }))`
    font-family: 'NeoDunggeunmo', sans-serif;
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
`;
