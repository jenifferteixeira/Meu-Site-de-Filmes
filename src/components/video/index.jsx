import { Player, Youtube } from "@vime/react";
import * as C from './style'
import PropTypes from 'prop-types';

export const Video = ({ linkVideo, playVideo, handleClosePlayVideo }) => {
    return playVideo ? (
        <C.Container>
            <C.Button onClick={handleClosePlayVideo}>
                ⬅ Voltar
            </C.Button>

            <Player controls>
                <Youtube videoId={linkVideo} />
            </Player>
        </C.Container>
    ) : null;
        
};

Video.propTypes = {
    handleClosePlayVideo: PropTypes.node,
    playVideo: PropTypes.node,
    linkVideo: PropTypes.node,
};