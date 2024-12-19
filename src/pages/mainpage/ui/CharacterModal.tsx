import React, { useState } from "react";
import Modal from "@shared/ui/Modal";
import Button from "@shared/ui/Button";
import theme from "@app/styles/theme";
import styled from "styled-components";
import CustomAlert from "@shared/ui/CustomAlert";
import { cvh, cvw } from "@shared/utils/unit";

interface CharacterModalProps {
    open: boolean;
    onClose: () => void;
}

const characters = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `캐릭터 ${i + 1}`,
    imgUrl: `/path/to/character${i + 1}.png`,
}));

const CharacterModal = ({ open, onClose }: CharacterModalProps) => {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null);
    const [alertMessage, setAlertMessage] = useState<string>("");

    const handleSelectCharacter = () => {
        if (selectedCharacter !== null) {
            console.log(`선택한 캐릭터 ID: ${selectedCharacter}`);
            setAlertMessage(`캐릭터 ${selectedCharacter} 선택 완료!`);
            setTimeout(() => setAlertMessage(""), 3000); // 3초 후 Alert 제거
            onClose();
        } else {
            setAlertMessage(`캐릭터 선택하셈`);
            setTimeout(() => setAlertMessage(""), 3000);
        }
    };

    return (
        <>
            {alertMessage && <CustomAlert message={alertMessage} />}
            <Modal open={open} onClose={onClose}>
                <Content>
                    <Title>캐릭터 선택하기</Title>

                    <CharactersContainer>
                        {characters.map((character) => (
                            <CharacterCard
                                key={character.id}
                                selected={selectedCharacter === character.id}
                                onClick={() => setSelectedCharacter(character.id)}
                            >
                                <img src={character.imgUrl} alt={`캐릭터 ${character.id}`} />
                            </CharacterCard>
                        ))}
                    </CharactersContainer>

                    <ButtonContainer>
                        <Button bgColor={theme.yellow.y500} onClick={onClose}>
                            취소
                        </Button>
                        <Button bgColor={theme.red.r500} onClick={handleSelectCharacter}>
                            선택
                        </Button>
                    </ButtonContainer>
                </Content>
            </Modal>
        </>
    );
};

export default CharacterModal;

const Content = styled.div`
    padding: 20px;
    width: ${cvh(1000)};
    height: ${cvw(600)};
`;

const Title = styled.h2`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
`;

const CharactersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;

const CharacterCard = styled.div.attrs(() => ({ className: "pixel" }))<{ selected: boolean }>`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        object-fit: cover;
        margin-bottom: 10px;
        border-radius: 50%;
    }

    span {
        font-size: 18px;
        text-align: center;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;
