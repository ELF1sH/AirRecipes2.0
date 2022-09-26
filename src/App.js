import RoutesWrapper from "./components/RoutesWrapper/RoutesWrapperProvider";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Air Recipes</h1>
        <RoutesWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
