import React from 'react'

const CompTres = ({el,setDataToEdit,deleteData}) => {
let {name,valor,id}=el;

    return (

     <tr>
  <td>{name}</td>
  <td>{valor}</td>
  <td>
      <button onClick={()=>setDataToEdit(el)}>Editar</button>
      <button onClick={()=>deleteData(id)}>Eliminar</button>
  </td>

  </tr>
);
}

export default CompTres
