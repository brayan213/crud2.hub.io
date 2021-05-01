import React from 'react'
import CompTres from './CompTres'

const CompTabl = ({data,setDataToEdit,deleteData}) => {
    return (
<div>
    <h2>Tabla De Contenido</h2>
<table>
<thead>
<tr>
<th>Producto</th>
<th>Valor</th>
<th>Acciones</th>
</tr>
</thead>
<tbody>

{data.length ===0?(
 <tr>
 <td colSpan="3">Sindatos</td>
 </tr>
 ):(
     data.map((el)=><CompTres key={el.id} el={el}
      setDataToEdit={setDataToEdit}deleteData={deleteData}/>)
 )}


</tbody>

</table>


 </div>
)
}

export default CompTabl
