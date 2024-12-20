import React, { useState } from "react";
import Modal from "@shared/ui/Modal";
import Button from "@shared/ui/Button";
import Input from "@shared/ui/Input";
import styled from "styled-components";
import theme from "@app/styles/theme";
import CharacterModal from "@pages/mainpage/ui/CharacterModal";
import { cvh, cvw } from "@shared/utils/unit";
import { useForm } from "react-hook-form";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

interface FormData {
    groupName: string;
    nickname: string;
    groupCode: string;
}

const InviteModal = ({ open, onClose }: GroupModalProps) => {
    const { register, handleSubmit } = useForm<FormData>(); // useForm 훅으로 폼 데이터 관리
    const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

    const handleConfirm = (data: FormData) => {
        console.log("그룹 이름:", data.groupName);
        console.log("닉네임:", data.nickname);
        console.log("그룹 코드:", data.groupCode);

        // 그룹 모달 닫기
        onClose();

        // 캐릭터 선택 모달 열기
        setIsCharacterModalOpen(true);
    };

    const handleCloseCharacterModal = () => {
        setIsCharacterModalOpen(false);
    };

    return (
        <>
            <Modal open={open} onClose={onClose} width={cvw(996)} height={cvh(720)}>
                <Content>
                    <Title>초대 코드로 들어가기</Title>

                    <CustomInput>
                        <SpanLabel>그룹 이름</SpanLabel>
                        <Input
                            {...register("groupName")} // register로 폼 필드 연결
                            width={cvw(690)}
                            height={cvh(55)}
                        />
                    </CustomInput>

                    <CustomInput>
                        <SpanLabel>닉네임</SpanLabel>
                        <Input
                            {...register("nickname")} // register로 폼 필드 연결
                            width={cvw(690)}
                            height={cvh(55)}
                        />
                    </CustomInput>

                    <CustomInput>
                        <SpanLabel>그룹 코드</SpanLabel>
                        <Input
                            {...register("groupCode")} // register로 폼 필드 연결
                            width={cvw(690)}
                            height={cvh(55)}
                        />
                    </CustomInput>

                    <ButtonContainer>
                        <Button
                            bgColor={theme.blue.b500}
                            fontSize={theme.headingFontSize.h2}
                            width={cvw(180)}
                            height={cvh(90)}
                            onClick={handleSubmit(handleConfirm)} // 폼 제출 시 handleConfirm 호출
                        >
                            들어가기
                        </Button>
                    </ButtonContainer>
                </Content>
            </Modal>

            <CharacterModal open={isCharacterModalOpen} onClose={handleCloseCharacterModal} />
        </>
    );
};

export default InviteModal;

const Content = styled.div`
    padding: ${cvw(32)} ${cvh(90)};
`;

const Title = styled.h2`
    font-size: 32px;
    text-align: center;
    margin-bottom: ${cvw(95)};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${cvw(23)};
`;

const CustomInput = styled.div`
    display: flex;
    align-items: center;
    margin: ${cvw(30)} 0;
`;

const SpanLabel = styled.span`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    width: 150px; /* 고정 너비 유지 */
`;
