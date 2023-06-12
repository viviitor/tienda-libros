import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    items:[],
    crearItem:(item)=>{},
    obtenerItem:(id)=>{},
    actualizarItem:(item)=>{},
});

export function Store({children}){

    const [libro, setLibro] = useState([]);

    function crearItem(item){

        const temporal = [... libro];
        temporal.push(item);
        setLibro(temporal);
    }

    function obtenerItem(id){
        const item=libro.find((item)=>item.id===id);
        return(item);
    }

    function actualizarItem(item){

        const index=libro.findIndex((i)=>i.id===item.id);
        const temporal = [... libro];
        temporal[index]={... item};

    }
    return(
        <AppContext.Provider 
        value={{libro, crearItem, obtenerItem, actualizarItem}}>
        {children}
        </AppContext.Provider>
    );
}
export function useAppContext(){
    return(useContext(AppContext)
    )
}