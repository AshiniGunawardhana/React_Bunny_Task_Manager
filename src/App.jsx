import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import TodoPage from "./Pages/TodoPage";


function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/app" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
