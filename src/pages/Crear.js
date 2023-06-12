import { useState } from "react";
import { useAppContext } from "../store/store";
import { Link } from "react-router-dom";

export function Crear() {

    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [portada, setPortada] = useState("");
    const [intro, setIntro] = useState("");
    const [comentarios, setComentarios] = useState("");
    const [completado, setCompletado] = useState(false);
    const store = useAppContext();

    function handleChange(e) {
        const n = e.target.name;
        const valor = e.target.value;

        switch (n) {
            case 'titulo':
                setTitulo(valor);
                break;
            case 'autor':
                setAutor(valor);
                break;
            case 'portada':
                handleChangeFile(e);
                break;
            case 'intro':
                setIntro(valor);
                break;
            case 'comentarios':
                setComentarios(valor);
                break;
            case 'completado':
                setCompletado(e.target.checked);
                break;

            default:
                break;
        }
    }

    function handleChangeFile(e){
        const element = e.target;
        var file = element.files[0];
        var read = new FileReader();
        
        read.onloadend = function(){
            setPortada(read.result.toString())};
        read.readAsDataURL(file);
    }

    function handleSubmit(e){
        e.preventdefault();
        const libro={
            id:crypto.randomUUID(),
            titulo,
            autor,
            portada,
            intro,
            comentarios,
            completado
        };

    //Crear un nuevo libro
        store.crearItem(libro);

    }

    return (
        <div>
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input type="text" onChange={handleChange} value={titulo} name="titulo" />         
            </div>
            <div>
                <label>Autor:</label>
                <input type="text" onChange={handleChange} value={autor} name="autor" />
            </div>
            <div>
                <label>Portada:</label>
                <input type="file" onChange={handleChange} name="portada" />
                <div>
                   
                </div>
            </div>
            <div>
                <label>Introducción:</label>
                <input type="text" onChange={handleChange} value={intro} name="intro" />
            </div>
            <div>
                <label>Comentarios:</label>
                <input type="text" onChange={handleChange} value={comentarios} name="comentarios" />
             </div>
            <div>
                <label>Completado:</label>
                <input type="checkbox" onChange={handleChange} value={completado} name="completado" />
            </div>
                <input type="submit" value="Registrar Libro"/>
        </form>
        </div>
    )
}