import "./App.css";
import AppEshop from "./practiceComponent/AppEshop";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./utils/DarkModeContext";
function App() {
  return (
    <>
      <DarkModeProvider>
        {" "}
        <AppEshop />
      </DarkModeProvider>
    </>
  );
}

export default App;
