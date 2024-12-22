import { useState, useEffect } from "react";
import Modal from "@widgets/Modal/Modal";
import Button from "@shared/ui/Button";
import theme from "@app/styles/theme";
import styled from "styled-components";
import CustomAlert from "@shared/ui/CustomAlert";
import { useNavigate } from "react-router-dom";
import { cvh, cvw } from "@shared/utils/unit";
import { serverInstance } from "@shared/apiInstance";
import { useRecoilState } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { set } from "react-hook-form";
interface FormData {
    partyName: string;
    name: string;
    password: string;
}

interface CharacterModalProps {
    open: boolean;
    onClose: () => void;
    inputData: FormData;
}

interface CharacterDataProps {
    id: number;
    photo: string;
}

const CharacterModal = ({ open, onClose, inputData }: CharacterModalProps) => {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
        null
    ); // 선택된 캐릭터를 하나만 관리
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [characters, setCharacters] = useState<CharacterDataProps[]>([]);

    const navigate = useNavigate();
    const [login, setLogin] = useRecoilState(loginState);

    console.log(login);
    useEffect(() => {
        const getCharacters = async () => {
            try {
                const res = await serverInstance.get("/api/v1/characters");
                setCharacters(res.data.success);
            } catch (err) {
                alert("오류 발생");
            }
        };

        getCharacters();
    }, []);
    // 캐릭터 선택/해제 처리
    const handleSelectCharacter = (id: number) => {
        setSelectedCharacter((prev) => (prev === id ? null : id)); // 이미 선택된 캐릭터는 해제하고, 새로 선택된 캐릭터만 저장
    };

    // 모달 닫을 때 선택된 캐릭터 초기화
    const handleModalClose = () => {
        setSelectedCharacter(null); // 모달 닫을 때 선택된 캐릭터 초기화
        onClose();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputData);
        console.log(selectedCharacter);

        try {
            const res1 = await serverInstance.post(
                "/api/v1/parties/users/signup",
                inputData
            );
            const data = res1.data.success;

            const res2 = await serverInstance.patch(
                `/api/v1/parties/${data.partyId}/users/${data.id}/character`,
                { characterId: selectedCharacter }
            );
            const data2 = res2.data.success;
            setLogin(data2);
            navigate("/groupHome");
        } catch (err) {
            console.log(err);
            alert("중복 닉네임 또는 중복 아이콘입니다.");
        }
    };

    return (
        <>
            {alertMessage && <CustomAlert message={alertMessage} />}
            <Modal
                open={open}
                onClose={onClose}
                width={cvw(700)}
                height={cvh(700)}
            >
                <Content onSubmit={handleSubmit}>
                    <Title>캐릭터 선택하기</Title>

                    <CharactersContainer>
                        {characters.map((character) => (
                            <CharacterCard
                                key={character.id}
                                selected={selectedCharacter === character.id}
                                onClick={() =>
                                    handleSelectCharacter(character.id)
                                }
                            >
                                <img
                                    src={character.photo}
                                    alt={`캐릭터 ${character.id}`}
                                />
                            </CharacterCard>
                        ))}
                    </CharactersContainer>

                    <ButtonContainer>
                        <Button
                            bgColor={theme.yellow.y500}
                            onClick={handleModalClose}
                            fontSize={theme.headingFontSize.h2}
                            width={cvw(180)}
                            height={cvh(70)}
                        >
                            취소
                        </Button>
                        <Button
                            bgColor={theme.red.r500}
                            // onClick={handleConfirmSelection}
                            type="submit"
                            fontSize={theme.headingFontSize.h2}
                            width={cvw(180)}
                            height={cvh(70)}
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

const Content = styled.form`
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
    gap: ${cvw(10)};
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
