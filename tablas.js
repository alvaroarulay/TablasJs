function Tabla(limite,expresion,numero) {
	parseInt(limite);
	parseInt(numero);
	for (var i = 1;i<=limite; i++) {
		
		switch(expresion) {
    case "multiplicar":
        console.log("la multilicacion de: "+numero+" x "+i+" = "+numero*i);
        break;
    case "sumar":
        console.log("la suma de: "+numero+" + "+i+" = "+(numero+i));
        break;
    case "restar":
        console.log("la Resta de: "+numero+" - "+i+" = "+(numero-i));
        break;
    case "dividir":
         console.log("la Division de: "+numero+" / "+i+" = "+(numero/i));
        break;
    default:
         console.log("no ingreso funcion");
		} 
	
	};
	
}
var limite =10;
var expresion="sumar";
var numero = 2;
Tabla(limite,expresion,numero);



