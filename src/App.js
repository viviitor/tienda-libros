import {Routes, Route, BrowserRouter} from "react-router-dom";
import { Index } from "./pages/Index";
import { Crear } from "./pages/Crear";
import { Vista } from "./pages/Vista";
import { Store } from "./store/store";

function App() {
  return (
    <Store>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Index/>}/>
    <Route path="crear" element={<Crear/>}/>
    <Route path="vista/:libroId" element={<Vista/>}/>
   </Routes>
   </BrowserRouter>
   </Store>
  );
}
export default App;
