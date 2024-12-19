import styled from "styled-components";
import { cvh, cvw } from "@shared/utils/unit";

const TextBlock = () => {
    return (
        <TextWrapper>
            <Text>랜덤으로 주어지는 미션을 통해</Text>
            <Text>낭만이란 배를 타고 떠나보세요!</Text>
        </TextWrapper>
    );
};

export default TextBlock;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(60)};
`;

const Text = styled.p`
    font-size: 32px;
    text-align: center;
`;
