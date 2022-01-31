import React, { useState, useEffect } from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";

import maquinaria from './maquinaria';
import { getListAsistente_mto, Areateasistente_mto } from './Servicie/AsistenteService';
//import  UniversidadPage from './xxxx/ServiciesUniversidad';

function App() {


  return (

    <BrowserRouter>
    
      <Routes>
        <Route path="/asistente_mto" element={asistente_mtoPage} /> 
        <Route path="/maquinaria" element={<maquinariaPage />} />   
        
        
      </Routes>
    </BrowserRouter>  
    
  );

  






  
    //asincronía JavaScript
    const [, setAsistente_mto] = useState([]);
    //Crear variables para guardar el estado de los inputs 
    const [idmaquinaria, setMaquinaria] = useState('');
    const [nombre, setNombre] = useState('');
    //const [correo, setCorreo] = useState('');



    const onSubmit = (event) => {
      // tambieb se crea un evento, cuya información se almacena en event
          event.preventDefault();
      //aqui llamamos a la función creada createTeacher en ...service, donde esta toda la lógica que
      // se conecta al Servidor Express. Esta función recibe la información de los inputs.
          const objeto = {
            
            id_maquina: id_maquina,
            marca: marca,
            estado: estado,
            modelo: modelo,
            fabricacion: fabricacion,
            matricula: matricula,
            costo: costo,
            responsable: responsable,
            seccion: seccion,
            serie: serie,

          
            //correo: correo,
            //sexo:'MAS',
            //estado_civil: 'casado',
          }
          createAsistente_mto( objeto)
    
    
        } 
        


  
  //Funcion (tipo flecha) que se llamara cada vez que exista un cambio en los inputs.
    const onChange = (event) => {   
   // el objeto event tiene toda la información que se genera cuando existe un cambio en cada input 
      if (event.target.name==='id_maquina')    
      setid_maquinaria(event.target.value)
      if (event.target.marca==='marca')
      setMarca(event.target.value)
      if (event.target.name==='estado')    
      setEstado(event.target.value)
      if (event.target.marca==='modelo')
      setModelo(event.target.value)
      if (event.target.name==='fabricacion')    
      setFabricaccion(event.target.value)
      if (event.target.marca==='matricula')
      setMatricula(event.target.value)
      if (event.target.name==='costo')    
      setCosto(event.target.value)
      if (event.target.marca==='responsable')
      setResponsable(event.target.value)
      if (event.target.name==='seccion')    
      setid_Seccion(event.target.value)
      if (event.target.marca==='serie')
      setSerie(event.target.value)
      
      //if (event.target.name==='correo')
      //setCorreo(event.target.value)
    }
  // Funcion (tipo flecha) que se llamara cada vez que se de un clics en el boton
  // 
    
  
  
    
    useEffect(() => {
      getListAsistente_mto().then(data => {
        setAsistente_mto(data);
      }
      );
    }, []);
  return (
    <div>



      <h1 className='tituloPagina'>                   ***********AMPI*********</h1>

      <form onSubmit={ onSubmit} >
        <label>
          Id_maquina
        <input 
        name="id_maquina"
        value={id_maquina}
        onChange={onChange}
        />
        </label>

        <label>
          Marca
        <input 
        name="marca"
        value={idmarca}
        onChange={onChange}
        />
        </label>

        <label>
          Estado
        <input 
        name="estado"
        value={idestado}
        onChange={onChange}
        />
        </label>

        <label>
          Modelo
        <input 
        name="modelo"
        value={idmodelo}
        onChange={onChange}
        />
        </label>

        <label>
          Fabricacion
        <input 
        name="fabricacion"
        value={idfabricaccion}
        onChange={onChange}
        />
        </label>

        <label>
          Matricula
        <input 
        name="matricula"
        value={idmatricula}
        onChange={onChange}
        />
        </label>

        <label>
          Costo
        <input 
        name="costo"
        value={idcosto}
        onChange={onChange}
        />
        </label>

        <label>
          
          Responsable
        <input 
        name="responsable"
        value={idresponsable}
        onChange={onChange}
        />
        </label>

        <label>
          Seccion
        <input 
        name="seccion"
        value={idseccion}
        onChange={onChange}
        />
        </label>

        <label>
          Serie
        <input 
        name="idserie"
        value={idserie}
        onChange={onChange}
        />
        </label>



       

        <button type="submit">
        Guardar
        </button>





      </form>



     
        {asistente_mto.map(u => (
         
          <tAsistente_mto key = {a.id_maquina} id_maquina={a.id_maquina} marca = {a.marca} estado= {a.estado} modelo= {a.modelo} fabricacion= {a.fabricacion}
           matricula= {a.matricula} costo= {a.costo} responsable= {a.responsable} seccion= {a.seccion} serie= {a.serie}  />
          
        ))}

    
      
      
    
    </div>
     
  );
}

export default App;
