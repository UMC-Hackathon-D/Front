import styled from "styled-components";
import BackgroundImage from "@shared/assets/image/background_test.svg";

interface BackgroundProps {
    children: React.ReactNode; // 배경 위에 올릴 자식 요소
}

const Background = ({ children }: BackgroundProps) => {
    return (
        <BackgroundContainer>
            <BackgroundImageElement src={BackgroundImage} alt="background" />
            {children}
        </BackgroundContainer>
    );
};

export default Background;

const BackgroundContainer = styled.div`
    position: relative; /* 자식 요소를 배치할 수 있도록 설정 */
    width: 100vw;
    height: 100vh;
    overflow: hidden; /* 이미지를 벗어난 부분을 숨김 */
    display: grid; /* 자식 요소를 grid로 배치 */
    grid-template-rows: 0.6fr 0.1fr; /* 기존 MainPage의 grid 레이아웃 */
    align-items: center;
    justify-items: center;
`;

const BackgroundImageElement = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; /* 화면 너비에 맞춤 */
    height: 100%; /* 화면 높이에 맞춤 */
    object-fit: cover; /* 이미지 비율을 유지하면서 부모 컨테이너를 채움 */
    z-index: -1; /* 배경 이미지가 자식 요소 뒤로 가도록 설정 */
    object-position: center 90%; /* 이미지를 화면 위쪽으로 조금 더 이동 */
`;
