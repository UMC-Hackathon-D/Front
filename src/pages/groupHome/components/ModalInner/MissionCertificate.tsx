import styled, { css } from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useState } from "react";

const MissionCertificate = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };
    return (
        <Container>
            <Box>
                <span>후기를 작성해주세요.</span>
                <textarea
                    name=""
                    id=""
                    className="content text pixel"
                ></textarea>
            </Box>

            <Box>
                <span>사진을 등록하여 미션을 인증해주세요.</span>
                <FileInputContainer className="pixel">
                    <HiddenInput type="file" id="file-upload" />
                    <CustomLabel
                        isDragging={isDragging}
                        onDragOver={handleDragEnter} // Allow drop
                        onDragLeave={handleDragLeave}
                        htmlFor="file-upload"
                    >
                        +
                    </CustomLabel>
                </FileInputContainer>
            </Box>

            <button type="submit" className="pixel">
                확인
            </button>
        </Container>
    );
};

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(40)};

    & > button {
        width: ${cvw(180)};
        height: ${cvh(70)};
        background-color: ${({ theme }) => theme.red.r500};
        cursor: pointer;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;

    & > .content {
        width: ${cvw(637)};
        background-color: ${({ theme }) => theme.black.b100};
        margin-top: ${cvh(11)};
    }

    & > .text {
        height: ${cvh(150)};
        outline: none;
        padding: 10px 10px;
    }
`;

const FileInputContainer = styled.div`
    position: relative;
    margin-top: ${cvh(11)};
    width: ${cvw(637)};
    height: ${cvh(240)};
    background-color: ${({ theme }) => theme.black.b100};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const HiddenInput = styled.input`
    display: none; /* 기본 파일 입력 숨기기 */
`;

const CustomLabel = styled.label<{ isDragging: boolean }>`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.black.b200};
    color: ${({ theme }) => theme.black.b300};
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
        background-color: ${({ theme }) => theme.black.b300};
        color: ${({ theme }) => theme.black.b200};
    }

    ${({ isDragging }) =>
        isDragging &&
        css`
            background-color: ${({ theme }) => theme.black.b200};
            color: ${({ theme }) => theme.black.b300};
        `}
`;

export default MissionCertificate;
