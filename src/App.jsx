import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";


function App() {

  return (
    <Background>
      <Header />
      <DescriptionMovie />
    </Background>
  );
}

export default App;
