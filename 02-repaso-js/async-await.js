const emplados = [
    {
        id: 1,
        name: "Jose",
    },
    {
        id: 2,
        name: "ANTONIO",
    },
    {
        id: 3,
        name: "maria"
    }
]
const salarios = [
    {
        id: 1,
        salario: 100,
    },
    {
        id: 2,
        salario: 1000,
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject)=> {
        const empleado =  emplados.find((it) => it.id === id)?.name;
        (empleado)
        ? resolve(empleado)
        : reject(`El empleado con id ${id} no existe`)
    })
}
const getSalario = (id) => {
    return new Promise((resolve, reject)=> {
        const salario =  salarios.find((it) => it.id === id)?.salario;
        (salario)
        ? resolve(salario)
        : reject(`El empleado con id ${id} no posee un salario asociado`);
    })
}


/* const id = 3;
let name;
getEmpleado(id)
.then(empleado => {
    name = empleado;
    return getSalario(id);
})
.then(salario => console.log(`El usuario ${name} tiene un salario de ${salario}`))
.catch(error => console.log(error)) */


const getInfoUsuario = async(id)=> {
    
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);    
        return `el salario del empleado ${empleado} es de ${salario}`
    } catch (error) {
        throw error;
    }
}
const id = 3;
getInfoUsuario(id)
.then(success => console.log(success))
.catch(error => console.log("fue un error", error));