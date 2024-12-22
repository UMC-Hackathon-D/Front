import CharacterImgComponent from "@widgets/ImgComponent/CharacterImg";
const GroupMemberComponent = ({
    id,
    characterId,
    name,
}: {
    id: number;
    characterId: number;
    name: string;
}) => {
    console.log(id);

    return (
        <div>
            <CharacterImgComponent
                id={id}
                key={characterId}
                characterId={characterId}
                name={name}
            ></CharacterImgComponent>
            <div>{name}</div>
        </div>
    );
};
export default GroupMemberComponent;
