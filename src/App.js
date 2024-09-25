import "./App.css";
import AppEshop from "./practiceComponent/AppEshop";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./utils/DarkModeContext";
import FibonacciComponent from "./components/hooks/usememo";
function App() {
  return (
    <>
      <DarkModeProvider>
        {" "}
        <FibonacciComponent />
      </DarkModeProvider>
    </>
  );
}

export default App;
