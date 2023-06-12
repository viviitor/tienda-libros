import { Link } from "react-router-dom";
import { useAppContext } from "../store/store";

export function Index(){

    const store=useAppContext();

    return(
        <div>
            <Link to="/crear">Crear libro</Link>
            {store.libro.map(
                (item)=><div>{item.titulo}</div>
            )}
        </div>
    );
}