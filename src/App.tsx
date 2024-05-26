import PasteArea from "./components/pasteArea";
import TopBar from "./components/topBar";
import { MainContainer, TextAreaContainer } from "./styles/styles";

function App() {
  return (
    <>
      <TopBar />
      <MainContainer>
        <TextAreaContainer>
          <PasteArea />
        </TextAreaContainer>
      </MainContainer>
    </>
  );
}

export default App;
