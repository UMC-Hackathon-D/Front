import styled from "styled-components";
import BackgroundImage from "@shared/assets/background_test.svg";
import { cvh, cvw } from "@shared/utils/unit";

import Logo from "@pages/mainpage/ui/Logo";
import TextBlock from "@pages/mainpage/ui/TextBlock";
import Buttons from "@pages/mainpage/ui/Buttons";

const MainPage = () => {
    return (
        <Container>
            <Logo />
            <TextBlock />
            <Buttons />
        </Container>
    );
};

export default MainPage;

// center/cover말고이미지로 해보든 어케 하든 해봐
// 위젯에 뺴놓고 기본 엘리먼트로 지정
// 라우팅에 재사용
const Container = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    grid-template-rows: 0.5fr 0.1fr;
    align-items: center;
    justify-items: center;
    min-width: ${cvw(1440)};
    min-height: ${cvh(1024)};
`;
