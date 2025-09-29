import { BrowserRouter, Routes } from "react-router-dom";
import { renderRouter } from "./router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {renderRouter()}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
