import styled, { css } from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
import { useState, useRef } from "react";
import Close from "@assets/icon/Close.svg?react";

const MissionCertificate = () => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [imgFile, setImgFile] = useState<string | null>(null);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const imgRef = useRef<HTMLInputElement>(null);

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const textAreaValue = textAreaRef.current?.value || "";
        console.log(textAreaValue);
        console.log(imgFile);
    };

    const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // 선택된 파일
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgFile(reader.result as string); // 미리보기 URL 설정
            };
            reader.readAsDataURL(file); // 파일 읽기
        }
    };
    return (
        <Container onSubmit={handleSubmit}>
            <Box>
                <span>후기를 작성해주세요.</span>
                <textarea
                    ref={textAreaRef}
                    className="content text pixel"
                ></textarea>
            </Box>

            <Box>
                <span>사진을 등록하여 미션을 인증해주세요.</span>
                <FileInputContainer className="pixel">
                    {imgFile ? (
                        <div className="img-container">
                            <img src={imgFile} />
                            <Close
                                className="icon"
                                onClick={() => setImgFile(null)}
                            />
                        </div>
                    ) : (
                        <>
                            <HiddenInput
                                type="file"
                                id="file-upload"
                                accept="image/*"
                                ref={imgRef}
                                onChange={saveImgFile}
                            />
                            <CustomLabel
                                isDragging={isDragging}
                                onDragOver={handleDragEnter} // Allow drop
                                onDragLeave={handleDragLeave}
                                htmlFor="file-upload"
                            >
                                +
                            </CustomLabel>
                        </>
                    )}
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

    & > .img-container {
        width: 100%;
        height: 100%;
        position: relative;

        & > img {
            display: block;
            width: 100%;
            height: 100%;
        }

        & > .icon {
            width: ${cvw(35)};
            height: ${cvh(35)};
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
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
