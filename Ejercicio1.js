import readline from "readline";


const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calcularDescuento = (tipoUsuario, totalAPagar) =>{
    if (tipoUsuario == "premium") {

        let resultado;

        let descuento = 30;

        let subtotal =(totalAPagar * descuento)/100;

        return resultado = totalAPagar -subtotal;

    } else if (tipoUsuario == "normal") {
        let resultado;

        let descuento = 10;

        let subtotal =(totalAPagar * descuento)/100;

        return resultado = totalAPagar -subtotal;
        
    } else if (tipoUsuario == "comun") {
        let resultado;

        let descuento = 5;

        let subtotal =(totalAPagar * descuento)/100;

        return resultado = totalAPagar -subtotal;
    }
}

const verificarUsuario = (tipoUsuario, totalAPagar) => {
    if (tipoUsuario == "premium") {

        console.log('Su total a pagar es:' , calcularDescuento(tipoUsuario, totalAPagar), " obtuvo un 30% de descuento porque es cliente premium.");

    } else if (tipoUsuario == "normal") {

        console.log('Su total a pagar es:' , calcularDescuento(tipoUsuario, totalAPagar), " obtuvo un 10% de descuento porque es cliente normal.");
        
    } else if (tipoUsuario == "comun") {

        console.log('Su total a pagar es:' , calcularDescuento(tipoUsuario, totalAPagar), " obtuvo un 5% de descuento porque es cliente común.");
        
    }else{
        console.log("por favor ingrese un usuario valido.");
    }
}


const preguntarAlUsuario = () => {

    interfaz.question("Por favor ingrese el tipo de usuraio\nnormal, \npremium, \ncomún : " , (tipoUsuario) => {


        
        interfaz.question("Hola ingrese su total a pagar: ", (total) => {
            let totalAPagar = parseFloat(total)

            verificarUsuario(tipoUsuario, totalAPagar)
        })
        
    })
}


preguntarAlUsuario()