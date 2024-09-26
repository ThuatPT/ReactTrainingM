import "./App.css";
import AppEshop from "./practiceComponent/AppEshop";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./utils/DarkModeContext";
import FibonacciComponent from "./components/hooks/usememo";
import Counter from "./components/hooks/usecallback";
function App() {
  return (
    <>
      <DarkModeProvider>
        {" "}
        <Counter />
      </DarkModeProvider>
    </>
  );
}

export default App;
