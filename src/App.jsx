import { useState, useEffect } from 'react'

import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

import { apiData } from './api/data';
import axios from 'axios';

const DEFAULT_MOVIE = {
  title: "Capitão America",
  description: "É o próximo filme da Marvel e dá continuidade à série “Falcão e o Soldado Invernal”. Sam Wilson (Anthony Mackie) assume o papel de Capitão América, sucedendo Steve Rogers, e enfrenta novos desafios e aliados inesperados. O filme faz parte da Fase Cinco do Universo Cinematográfico Marvel (UCM).",
  imageSmall: "https://scontent.fpoa16-1.fna.fbcdn.net/v/t39.30808-6/364264308_334063985615751_2013922389647790604_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eW7cVFpeGfQQ7kNvgHJcsNj&_nc_ht=scontent.fpoa16-1.fna&oh=00_AYAv2VF1uHYF2p1Aiii9ta7_EptbavSe9TU04oQMo3yJhg&oe=66BC468F",
  imageBanner: "https://www.cinemascomics.com/wp-content/uploads/2023/11/Capitan-America-Brave-New-World.jpg",
  linkVideo: "AxkTbqfEOIY",
  category: "movies",
};

function App() {
  const [video, setVideo] = useState(DEFAULT_MOVIE)
  const [moviesData, setMoviesData] = useState([])
  const [playVideo, setPlayVideo] = useState(false)
  const baseUrl = 'http://localhost:3003'

  const { description, title, linkVideo, imageBanner } = video;

  const apiDataMovies = moviesData?.movies?.length > 0 ? moviesData : apiData;

  useEffect(() => {
    const getMoviesAndCategories = async () => {
      const { data } = await axios.get(`${baseUrl}/movies-categories`);
      setMoviesData(data)
    }
    getMoviesAndCategories()
  }, [])

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  const handleVideo = (data) => {
    setVideo(data);
    window.scrollTo({ top: 0 });
  };


  return (
    <Background imageBanner={imageBanner}>
      <Header />
      <DescriptionMovie
        title={title}
        description={description}
        handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies
        data={apiDataMovies} handleVideo={(data) => handleVideo(data)} />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
        linkVideo={linkVideo}
      />

    </Background>
  );
}

export default App;
