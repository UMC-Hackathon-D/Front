import Modal from "@shared/ui/Modal";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useMutation } from "@tanstack/react-query";
import { updateData } from "@shared/Apis/Apis";
import { queryClient } from "@app/main";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";
import { useState } from "react";
interface UpdateModalProps {
    id: number;
    open: boolean;
    onClose: () => void;
    name: string;
}
const UpdateModal = ({ id, open, onClose, name }: UpdateModalProps) => {
    const [changedName, setChangeName] = useState<string>("");
    const loginData = useRecoilValue(loginState);
    const partyId = loginData?.partyId;
    const { mutate } = useMutation({
        mutationFn: updateData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getData"] });
        },
        onError: () => {
            console.error("에러 발생");
        },
    });
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangeName(e.target.value);
    };
    console.log(changedName);

    const updateButton = () => {
        onClose();
        mutate({ partyId: partyId, id: id, name: changedName });
    };
    return (
        <>
            <ModalStyle id={id} open={open} onClose={onClose}>
                <DeleteModalTitle>닉네임 수정하기</DeleteModalTitle>
                <NickName>
                    <NickNameDiv>닉네임</NickNameDiv>
                    <NickNameInput
                        type="text"
                        defaultValue={name}
                        onChange={changeName}
                    ></NickNameInput>
                </NickName>
                <UpdateButtonDiv>
                    <UpdateButton onClick={updateButton}>수정하기</UpdateButton>
                </UpdateButtonDiv>
            </ModalStyle>
        </>
    );
};
export default UpdateModal;

const DeleteModalTitle = styled.div`
    width: ${cvw(805)};
    height: ${cvh(40)};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    display: flex;
    justify-content: center;
`;

const NickName = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${cvh(54)};
    margin-bottom: ${cvh(54)};
    gap: ${cvw(20)};
`;
const NickNameDiv = styled.div`
    font-size: ${({ theme }) => theme.headingFontSize.h3};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NickNameInput = styled.input.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.black.b100};
    width: ${cvw(690)};
    height: ${cvh(55)};
    padding: ${cvh(19)} ${cvw(585)} ${cvh(14)} ${cvw(45)};
`;

const UpdateButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.blue.b500};
    font-size: ${({ theme }) => theme.headingFontSize.h2};
    width: ${cvw(240)};
    height: ${cvh(70)};
    text-align: center;
    // padding: ${cvh(21)} ${cvw(59)} ${cvh(17)} ${cvw(60)};
`;
const UpdateButtonDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;
const ModalStyle = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;
