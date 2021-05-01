import React, {useState} from 'react';
import CompDos from './CompDos';
import CompTabl from './CompTabl';
import "../styles/sty1.css";

const proDucto= [
{
    id: 1,
    name: "Tenis nike",
    valor: "6900 $",
  },
  {
    id: 2,
    name: "Sudadera nike ",
    valor: "8000$",
  },
  {
    id: 3,
    name: "Tenis addidas",
    valor: "6000$",
  },
  {
    id: 4,
    name: "Saco addidas",
    valor: "10000$",
  },

];


//varible de estado
const CompUno = () => {
    const [db,setDb]=useState(proDucto);

const [dataToEdit,setDataToEdit]=useState(null);

//agregar objeto
const createData=(data)=>{
    data.id=Date.now();
setDb([...db,data]);
};

const updateData=(data)=>{
let newData=db.map(el=>el.id===data.id?data:el);
setDb(newData);

};


const deleteData=(id)=>{
let isDelete=window.confirm(`estas seguro de eliminar"${id}"?`
);
if(isDelete){
let newData=db.filter(el=>el.id !==id);
setDb(newData);
}else{
return;
}
};
return (
<div>
<h2></h2>
<CompDos
createData={createData}
updateData={updateData}
dataToEdit={dataToEdit}
setDataToEdit={setDataToEdit}/>

<CompTabl data={db}
setDataToEdit={setDataToEdit}
deleteData={deleteData}/>
<table></table>



</div>
)
}

export default CompUno
