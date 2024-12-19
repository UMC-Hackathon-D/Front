import theme from "../app/styles/theme";
import styled from "styled-components";
import { cvw, cvh } from "../shared/utils/unit";
import SideTag from "../widgets/SideTag/SideTag";

const tagArr = [
    { color: theme.yellow.y500, text: "홈", path: "/groupHome" },
    {
        color: theme.red.r500,
        text: "낭만 모음집",
        path: "/groupHome/collection",
    },
    {
        color: theme.blue.b500,
        text: "그룹 멤버 보기",
        path: "/groupHome/groupMember",
    },
];

export default function sideBar() {
    return (
        <SideBarDiv>
            <SideTagBox>
                {tagArr.map((tag, idx) => (
                    <SideTag
                        color={tag.color}
                        text={tag.text}
                        path={tag.path}
                        key={idx}
                    />
                ))}
            </SideTagBox>
        </SideBarDiv>
    );
}

const SideBarDiv = styled.div`
    background-color: ${({ theme }) => theme.black.b100};
    width: ${cvw(270)};
    height: ${cvh(890)};
    padding-top: ${cvh(91)};
    flex-shrink: 0; /* 부모 flex 스타일 무시 */
`;

const SideTagBox = styled.div`
    width: 100%;
    height: ${cvh(250)};
    display: flex;
    flex-direction: column;
    gap: ${cvh(34)};
`;
