import CharacterImgComponent from "@widgets/ImgComponent/CharacterImg";
const GroupMemberComponent = ({
    characterImg,
    name,
}: {
    characterImg: string;
    name: string;
}) => {
    return (
        <div>
            <CharacterImgComponent
                key={characterImg}
                img={characterImg}
                name={name}
            ></CharacterImgComponent>
            <div>{name}</div>
        </div>
    );
};
export default GroupMemberComponent;
