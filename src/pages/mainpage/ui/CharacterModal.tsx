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
        try {
            const res1 = await serverInstance.post(
                "/api/v1/parties/create",
                inputData
            );
            const data = res1.data.success;
            console.log(data);
            const res2 = await serverInstance.patch(
                // `/api/v1/parties/${data.partyId}/users/${data.partyName}/character`,
                `/api/v1/parties/${data.partyName}/users/${data.userId}/character`,
                { characterId: selectedCharacter }
            );
            const data2 = res2.data.success;
            setLogin(data2);
            navigate("/groupHome");
        } catch (err) {
            console.log(err);
            // alert("중복 닉네임 또는 중복 아이콘입니다.");
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
                                className="pixel"
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
    display: flex;
    flex-direction: column;
    gap: ${cvh(16)};
    width: ${cvw(700)};
    height: ${cvh(700)};
    padding: ${cvh(40)} ${cvw(115)};
`;

const Title = styled.h2`
    font-size: ${theme.headingFontSize.h1};
    text-align: center;
`;

const CharactersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    place-items: center;
    margin-top: ${cvh(40)};
`;

const CharacterCard = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: ${cvw(150)};
    height: ${cvh(150)};
    background-color: ${({ selected }) => selected && theme.blue.b500};
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const ButtonContainer = styled.div`
    margin-top: ${cvh(20)};
    display: flex;
    justify-content: center;
    gap: ${cvw(23)};
`;
