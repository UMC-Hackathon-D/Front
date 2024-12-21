import { useState } from "react";
import Modal from "@shared/ui/Modal";
import Button from "@shared/ui/Button";
import theme from "@app/styles/theme";
import styled from "styled-components";
import CustomAlert from "@shared/ui/CustomAlert";
import { useNavigate } from "react-router-dom";
import { cvh, cvw } from "@shared/utils/unit";

interface CharacterModalProps {
    open: boolean;
    onClose: () => void;
}

// 이미지 모듈 로딩
const imageModules = import.meta.glob("@assets/character/*.svg", {
    eager: true, // 즉시 로딩
  });

const characters = Object.keys(imageModules).map((path, index) => {
    return {
        id: index + 1,
        imgUrl: path,
        clickedImgUrl: `/src/shared/assets/character/c${index + 1}.svg`, // 클릭된 이미지 경로
    };
});

const CharacterModal = ({ open, onClose }: CharacterModalProps) => {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(null); // 선택된 캐릭터를 하나만 관리
    const [alertMessage, setAlertMessage] = useState<string>("");
    const navigate = useNavigate();

    // 캐릭터 선택/해제 처리
    const handleSelectCharacter = (id: number) => {
        setSelectedCharacter(prev => prev === id ? null : id); // 이미 선택된 캐릭터는 해제하고, 새로 선택된 캐릭터만 저장
    };

    const handleConfirmSelection = () => {
        if (selectedCharacter !== null) {
            navigate("/groupHome");
            console.log(`선택된 캐릭터 ID: ${selectedCharacter}`); // 클릭한 캐릭터의 ID 출력
        } else {
            setAlertMessage("캐릭터를 선택해주세요.");
            setTimeout(() => setAlertMessage(""), 3000);
        }
    };

    // 모달 닫을 때 선택된 캐릭터 초기화
    const handleModalClose = () => {
        setSelectedCharacter(null); // 모달 닫을 때 선택된 캐릭터 초기화
        onClose();
    };

    return (
        <>
            {alertMessage && <CustomAlert message={alertMessage} />}
            <Modal
                open={open}
                onClose={onClose}
                width={cvw(650)}
                height={cvh(940)}
            >
                <Content>
                    <Title>캐릭터 선택하기</Title>

                    <CharactersContainer>
                        {characters
                            .filter((character) => character.id <= 9) // id가 9 이하인 캐릭터만 렌더링
                            .map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    selected={selectedCharacter === character.id}
                                    onClick={() => handleSelectCharacter(character.id)}
                                >
                                    <img
                                        src={
                                            selectedCharacter === character.id
                                                ? character.clickedImgUrl // 클릭된 이미지 경로
                                                : character.imgUrl // 기본 이미지 경로
                                        }
                                        alt={`캐릭터 ${character.id}`}
                                    />
                                </CharacterCard>
                            ))}
                    </CharactersContainer>

                    <ButtonContainer>
                        <Button bgColor={theme.yellow.y500} onClick={handleModalClose} fontSize={theme.headingFontSize.h2} width={cvw(180)} height={cvh(90)}>
                            취소
                        </Button>
                        <Button
                            bgColor={theme.red.r500} onClick={handleConfirmSelection} fontSize={theme.headingFontSize.h2} width={cvw(180)} height={cvh(90)}
                        >
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
    justify-items: center; /* 가로 방향으로 카드 중앙 정렬 */
    align-items: center; /* 세로 방향으로 카드 중앙 정렬 */
`;

const Title = styled.h2`
    font-size: ${theme.headingFontSize.h1};
    text-align: center;
    margin-top: ${cvh(40)};
    margin-bottom: ${cvh(60)}; 
`;

const CharactersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);
    gap: ${cvw(60)};
`;

const CharacterCard = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${cvh(150)}; /* 카드 크기 조정 */
    height: ${cvh(150)}; /* 카드 높이 설정 */
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: ${cvh(71)};
`;