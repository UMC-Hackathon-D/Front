import React, { useState } from "react";
import Modal from "@shared/ui/Modal";
import Button from "@shared/ui/Button";
import Input from "@shared/ui/Input";
import styled from "styled-components";
import theme from "@app/styles/theme";

interface GroupModalProps {
    open: boolean;
    onClose: () => void;
}

const GroupModal = ({ open, onClose }: GroupModalProps) => {
    const [groupName, setGroupName] = useState("");
    const [nickname, setNickname] = useState("");
    const [groupSize, setGroupSize] = useState(0);
    const [groupCode, setGroupCode] = useState("");
    console.log(groupSize);
    const handleConfirm = () => {
        // 그룹 모달 닫기
        onClose();
    };    

    return (
        <Modal open={open} onClose={onClose}>
            <Content>
                <Title>그룹 만들기</Title>

                <CustomInput>
                    <SpanLabel>그룹 이름</SpanLabel>
                    <Input
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        width="600px"
                    />
                </CustomInput>

                <CustomInput>
                    <SpanLabel>닉네임</SpanLabel>
                    <Input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        width="600px"
                    />
                </CustomInput>

                <CustomInput>
                    <SpanLabel>그룹 인원</SpanLabel>
                    <StyledSelect
                        value={groupSize}
                        onChange={(e) => setGroupSize(Number(e.target.value))}
                    >
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
                        value={groupCode}
                        onChange={(e) => setGroupCode(e.target.value)}
                        width="600px"
                    />
                </CustomInput>

                <ButtonContainer>
                    {/* 취소 버튼 */}
                    <Button bgColor={theme.yellow.y500} onClick={onClose}>
                        취소
                    </Button>

                    {/* 확인 버튼 */}
                    <Button bgColor={theme.red.r500} onClick={handleConfirm}>
                        확인
                    </Button>
                </ButtonContainer>
            </Content>
        </Modal>
    );
};

export default GroupModal;

const Content = styled.div`
    padding: 20px 80px;
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
    width: 150px; /* 고정 너비 유지 */
`;

const StyledSelect = styled.select`
    font-family: 'NeoDunggeunmo', sans-serif;
    font-size: 20px;
    padding: 12px 15px;
    width: 80px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    background-color: #fff;
    margin-right: 10px;
`;