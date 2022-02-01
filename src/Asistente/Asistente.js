import "./Asistente.css";
function Maquinaria(props){
    
    return(
        <div className="container">
            <h2>{props.idAsitente_mto}</h2>
            <p>{props.nombre}</p>
            
        </div>
    );
}

export default Maquinaria;
