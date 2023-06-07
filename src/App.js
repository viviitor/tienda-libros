import {Routes, Route, BrowserRouter} from "react-router-dom";
import { Index } from "./pages/Index";
import { Crear } from "./pages/Crear";
import { Vista } from "./pages/Vista";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="crear" element={<Crear/>}/>
    <Route path="vista/:libroId" element={<Vista/>}/>
   </Routes>
   </BrowserRouter>
  );
}
export default App;
