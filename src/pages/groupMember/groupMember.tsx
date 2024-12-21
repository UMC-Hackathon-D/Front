import styled from "styled-components";
import GroupMemberComponent from "@widgets/GroupMemberComponent/GroupMemberComponent";
export const example = [
    {
        img: "https://image.bugsm.co.kr/album/images/500/40752/4075248.jpg",
        name: "셰이나",
        id: 1,
        review: "자고 싶다",
        date: "2024.12.20",
        content: "친구에게 사랑한다 말하기",
    },
    {
        img: "https://image.bugsm.co.kr/album/images/200/193874/19387484.jpg?version=20230503022513.0",
        name: "미니",
        id: 2,
        date: "2024.12.20",
        content: "친구에게 사랑한다 말하기",
        review: "자고 싶다",
    },
    {
        img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8d/d7/0f/8dd70fba-0a8f-b7ce-a2d2-f0d32dad2837/8809912894132.jpg/1200x1200bf-60.jpg",
        name: "무랫",
        id: 3,
        date: "2024.12.20",
        review: "자고 싶다",
        content: "친구에게 사랑한다 말하기",
    },
    {
        img: "https://image.bugsm.co.kr/album/images/200/7222/722272.jpg?version=20220514022202.0",
        name: "옌찌",
        id: 4,
        date: "2024.12.20",
        review: "자고 싶다",
        content: "친구에게 사랑한다 말하기",
    },
];
const GroupMember = () => {
    // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <GroupMemeberDiv>
            <GroupCharacterTitleDiv>그룹 멤버 보기</GroupCharacterTitleDiv>
            <GroupCharacterDiv>
                {example.map((data) => {
                    return (
                        <GroupMemberComponent
                            characterImg={data.img}
                            name={data.name}
                        ></GroupMemberComponent>
                    );
                })}
            </GroupCharacterDiv>
        </GroupMemeberDiv>
    );
};
export default GroupMember;

//css
const GroupCharacterTitleDiv = styled.div`
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.headingFontSize.h1};
`;

const GroupCharacterDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    place-items: center;
    margin: auto;
`;

const GroupMemeberDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
