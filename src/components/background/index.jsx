import { BackgroundImage, BackgroundGradient } from "./style";
import PropTypes from 'prop-types';


export const Background = ({ children, imageBanner }) => {
    return (
        <BackgroundImage bgImage={imageBanner}>
            <BackgroundGradient>
                {children}
            </BackgroundGradient>

        </BackgroundImage>
    );
};

Background.propTypes = {
    children: PropTypes.node,
    imageBanner: PropTypes.node,
};