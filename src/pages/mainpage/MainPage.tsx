import Background from "@pages/mainpage/ui/Background";
import Logo from "@pages/mainpage/ui/Logo";
import TextBlock from "@pages/mainpage/ui/TextBlock";
import Buttons from "@pages/mainpage/ui/Buttons";

const MainPage = () => {
    return (
        <Background>
            <Logo />
            <TextBlock />
            <Buttons />
        </Background>
    );
};

export default MainPage;