import Modal from "@shared/ui/Modal";
import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
interface UpdateModalProps {
    id: string;
    open: boolean;
    onClose: () => void;
    name: string;
}
const UpdateModal = ({ id, open, onClose, name }: UpdateModalProps) => {
    console.log(name);
    console.log(open);

    return (
        <>
            <ModalStyle id={id} open={open} onClose={onClose}>
                <DeleteModalTitle>닉네임 수정하기</DeleteModalTitle>
                <NickName>
                    <NickNameDiv>닉네임</NickNameDiv>
                    <NickNameInput
                        type="text"
                        defaultValue={name}
                        placeholder={name}
                    ></NickNameInput>
                </NickName>
                <UpdateButtonDiv>
                    <UpdateButton onClick={onClose}>수정하기</UpdateButton>
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
