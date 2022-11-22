// EJEMPLO DESAFÍO ENTREGABLE

const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt ("¿Querés comprar shampoo, acondicionador o ambos?");
        cantidad = prompt ("¿Cuántos querés comprar?");

    switch (producto) {
        case "shampoo":
            precio = 500;
            break;
        case "acondicionador":
            precio = 700;
            break;
        case "ambos":
            precio = 1100;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }

    totalCompra += precio * cantidad;

    // El método confirm retornara true o false dependiendo si el usuario acepta o cancela la acción
    seguirComprando = confirm("¿Querés agregar otro producto?");

    } while (seguirComprando)

    return totalCompra;
}

// Función para aplicar un descuento del 20% al total de la compra si esta es mayor a 5000
const aplicarDescuento = (totalCompra) => {
    if (totalCompra >= 5000) {
        return totalCompra * 0.80;
    } else {
        return totalCompra;
    }
}

// Función para calcular el envío según el total de la compra
const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");

    if (tieneEnvioADomicilio && totalCompra >= 2000) {
      alert("Tenés envio gratis. El total de tu compra es $" + totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
      totalCompra += 700;
      alert("El envío cuesta $700. El total de tu compra es $" + totalCompra);
    } else {
      alert("El total de tu compra es $" + totalCompra);
    }

    return totalCompra;
}

// Invocamos a las funciones
calcularEnvio(aplicarDescuento(comprarProductos()));
