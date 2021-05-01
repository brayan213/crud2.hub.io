import React, {useState,useEffect} from 'react';


const comienzoForm= {
name:"",
valor:"",
id: null,
};



const CompDos = ({createData,updateData,dataToEdit,setDataToEdit}) => {
const [form,setForm]=useState(comienzoForm);

useEffect(()=>{
if(dataToEdit){
    setForm(dataToEdit);
}else{
    setForm(comienzoForm);
}
},[dataToEdit]);




const handleChange=(e)=>{ //actualiza
setForm({
...form,
[e.target.name]:e.target.value,
});
};

const handleSubmit=(e)=>{
e.preventDefault();

if(!form.name||!form.valor){
    alert("Datos incompletos")
    return;
}
if(form.id===null){
 createData(form);
}else{
updateData(form);
}
handleReset();

};


const handleReset=(e)=>{
setForm(comienzoForm);
setDataToEdit(null);
};

return (
<div>
<h2>Agregar Producto Deportivo</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name}/>
<input type="text" name="valor" placeholder="Valor"onChange={handleChange} value={form.valor}/>

<input type= "reset" value="Limpiar" onClik={handleReset}/>
<input type= "submit" value="Enviar"/>
</form>
</div>
)
}

export default CompDos
