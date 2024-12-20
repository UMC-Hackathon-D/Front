import styled from "styled-components";
import { cvw } from "@shared/utils/unit";
import Card from "@widgets/Card/Card";

const PersonCard = ({
    personData,
    setModalIdx,
}: {
    personData: unknown[];
    setModalIdx: (prev: number) => void;
}) => {
    // onClick 하면 클릭한 값 저장하고 , 카드가 뒤로 뒤집히고 transition 주고
    // 다음 모달로 넘어가기
    return (
        <Container>
            {[1, 2].map((number) => (
                <Card
                    number={number}
                    onClick={() => setModalIdx((prev) => ++prev)}
                ></Card>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${cvw(40)};
`;

export default PersonCard;
