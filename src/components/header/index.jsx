import { Container } from "./style";
import logoImage from '../../assets/img/logo.png';


export const Header = () => {
    return (
        <Container>
            <img src={logoImage} />

            <nav>
                <a href="#"> Filmes</a>
                <a href="#"> TV Shows</a>
                <a href="#"> Tudo</a>
            </nav>
        </Container>
    );
};
