import React from "react";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import Modal from "@shared/ui/Modal";
import { useMutation } from "@tanstack/react-query";
import { deleteData } from "@shared/Apis/Apis";
import { queryClient } from "@app/main";
import { useRecoilValue } from "recoil";
import { loginState } from "@shared/recoil/recoil";
interface DeleteModalProps {
    id: number;
    open: boolean;
    onClose: () => void;
    name: string;
}
const DeleteModal = ({ id, open, onClose, name }: DeleteModalProps) => {
    const loginData = useRecoilValue(loginState);
    const partyId = loginData?.partyId;
    console.log(partyId);

    const { mutate } = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getData"] });
        },
        onError: () => {
            console.error("에러 발생");
        },
    });
    const conFirmButton = () => {
        onClose;
        mutate({ partyId: partyId, id: id });
    };
    console.log(id);

    return (
        <>
            <ModalStyle id={id} open={open} onClose={onClose}>
                <CLoseButton>
                    <CLoseButton onClick={onClose} />
                </CLoseButton>

                <DeleteModalTitle>그룹 멤버 삭제하기</DeleteModalTitle>
                <DeleteModalContent>
                    {name} 님을 삭제하시겠습니까?
                </DeleteModalContent>
                <UpdateButtonDiv>
                    <UpdateButton onClick={conFirmButton}>확인</UpdateButton>
                </UpdateButtonDiv>
            </ModalStyle>
        </>
    );
};
export default DeleteModal;

const ModalStyle = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${cvw(996)};
    height: ${cvh(441)};
`;
const DeleteModalTitle = styled.div`
    width: ${cvw(805)};
    height: ${cvh(40)};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const DeleteModalContent = styled.div`
    width: ${cvw(805)};
    height: ${cvh(40)};
    font-size: ${({ theme }) => theme.headingFontSize.h1};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${cvh(54)};
`;
const UpdateButton = styled.button.attrs(() => ({ className: "pixel" }))`
    background-color: ${({ theme }) => theme.red.r500};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${cvw(180)};
    height: ${cvh(70)};
    font-size: ${({ theme }) => theme.headingFontSize.h2};
`;

const UpdateButtonDiv = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    border: 0;
    background-color: white;
    padding: 0;
    margin-top: ${cvh(54)};
`;
const CLoseButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;
