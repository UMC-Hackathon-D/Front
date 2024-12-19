import React, { useState } from "react";
import Modal from "@shared/ui/Modal";
import Button from "@shared/ui/Button";
import Input from "@shared/ui/Input";
import styled from "styled-components";
import theme from "@app/styles/theme";
import CharacterModal from "@pages/mainpage/ui/CharacterModal";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

const InviteModal = ({ open, onClose }: GroupModalProps) => {
    const [groupName, setGroupName] = useState("");
    const [nickname, setNickname] = useState("");
    const [groupCode, setGroupCode] = useState("");
    const [isCharacterModalOpen, setIsCharacterModalOpen] = useState(false);

    const handleConfirm = () => {
        console.log("그룹 이름:", groupName);
        console.log("닉네임:", nickname);
        console.log("그룹 코드:", groupCode);

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
            <Modal open={open} onClose={onClose}>
                <Content>
                    <Title>초대 코드로 들어가기</Title>

                    <CustomInput>
                        <SpanLabel>그룹 이름</SpanLabel>
                        <Input
                            placeholder="그룹 이름"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            width="600px"
                        />
                    </CustomInput>

                    <CustomInput>
                        <SpanLabel>닉네임</SpanLabel>
                        <Input
                            placeholder="닉네임"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            width="600px"
                        />
                    </CustomInput>

                    <CustomInput>
                        <SpanLabel>그룹 코드</SpanLabel>
                        <Input
                            placeholder="그룹 코드"
                            value={groupCode}
                            onChange={(e) => setGroupCode(e.target.value)}
                            width="600px"
                        />
                    </CustomInput>

                    <ButtonContainer>
                        <Button bgColor={theme.blue.b500} onClick={handleConfirm}>
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
    padding: 60px 80px;
`;

const Title = styled.h2`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 32px;
    text-align: center;
    margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const CustomInput = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 30px 0;
`;

const SpanLabel = styled.span`
    font-size: 24px;
    color: #555;
    margin-right: 10px;
    width: 150px;
`;
