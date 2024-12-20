import styled from "styled-components";
import { cvw, cvh } from "@shared/utils/unit";
const MissionGuide = ({ mission }: { mission: string }) => {
    return (
        <Container>
            <Text>
                <span>
                    오늘의 미션은
                    <br />
                    <span className="highlight">{mission}</span>
                    입니다 !
                </span>
            </Text>
            <Text>
                <span>
                    미션 완료 후 미션을 인증해주세요 !<br />
                    그럼 파이팅입니다 :)
                </span>
            </Text>
            <Button>확인</Button>
        </Container>
    );
};

const Container = styled.div`
    margin-top: ${cvh(90)};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${cvh(40)};
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${({ theme }) => theme.headingFontSize.h1};

    & > span {
        text-align: center;
        line-height: 1.5;
        & > .highlight {
            color: ${({ theme }) => theme.blue.b500};
        }
    }
`;

const Button = styled.button.attrs(() => ({ className: "pixel" }))`
    margin-top: ${cvh(40)};
    width: ${cvw(180)};
    height: ${cvh(70)};
    background-color: ${({ theme }) => theme.red.r500};
    cursor: pointer;
    font-family: "NeoDunggeunmo";
    font-size: ${({ theme }) => theme.headingFontSize.h3};
`;

export default MissionGuide;
