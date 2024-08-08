import { BackgroundImage } from "./style";
import backgroundImage from "../../assets/img/captain-america-bnw.jpg"

export const Background =  ({ Children })  => {
    return(
        <BackgroundImage bgImage={backgroundImage}>
            {Children}
        </BackgroundImage>
    );
};
