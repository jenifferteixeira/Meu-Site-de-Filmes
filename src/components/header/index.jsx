import { Container } from "./style";
import logoImage from '../../assets/logo.png';


export const Header = () => {
    return (
        <Container>
            <img src={logoImage} />

            <nav>
                <a href="#movies"> Filmes</a>
                <a href="#tvshows"> Séries</a>
            </nav>
        </Container>
    );
};
