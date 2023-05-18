// OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data: {
        userName: string,
        email: string
    }
):void
    {
console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado es: ${data.email}`);
}

imprimirDatos({userName: "Dominic", email: "dpa.lasso@yavirac.edu.ec" });

// OBJETOS CON TIPADOS

type userData = {
    nombre: string,
    edad: number,
    email: string,
    telefono: string
}

let userList: userData[] = [];

userList.push({
    nombre: "Dominic",
    edad: 21,
    email: "dpa.lasso@yavirac.edu.ec",
    telefono: "0998212055"
});

userList.push({
    nombre: "Juan",
    edad: 30,
    email: "juanperez@gamilc.com",
    telefono: "09999999"
});
console.log(userList[0]);




