import * as C from './style'
import PropTypes from 'prop-types';


export const DescriptionMovie = ({title, description, handleOpenPlayVideo}) => {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>

            <C.Button onClick={handleOpenPlayVideo}> ▶ Assistir</C.Button>

        </C.Container>
    )
};

DescriptionMovie.propTypes = {
    handleOpenPlayVideo: PropTypes.node,
    title: PropTypes.node,
    description: PropTypes.node
};