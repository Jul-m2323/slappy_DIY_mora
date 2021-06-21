let entradaUsuario = prompt('Ingrese su nombre');
let recibe = "Hola! " + entradaUsuario + ' Bienvenido al Shop del Slappy DIY.';

	alert(recibe);

class Producto{
 constructor(tipo, nombre, material) {
	this.tipo = tipo;
	this.nombre = nombre;
	this.material = material;
	}
	vender(){
		this.vender = true ;
	} 
	respuesta(){
		console.log("usted selecciono " + this.nombre);
	}	
}

let tipo = prompt('Ingrese el tipo');
let nombre = prompt('Ingrese el nombre:" ');
let material = prompt('Ingrese el material');

let productoX = new Producto(tipo, nombre, material);

let productos = [
	{id:1, tipo:'bolsa',nombre:'Bolso Playero Slappy DIY',material:'hilo'},
	{id:2, tipo:'cera', nombre:'Vela/Wax Slappy DIY', material:'cera'},
	{id:3, tipo:'campera' ,nombre:'Campera Bomber Slappy DIY',material:'hilo'},
	{id:4, tipo:'bolsa', nombre:'Bolsas Slappy Logo', material:'algodon'},
	{id:5, tipo:'remera', nombre:'Remera Slappy DIY x Persistir', material:'algodon'},
	{id:6, tipo:'bolso', nombre:'Bolsos Eje x Slappy DIY',material:'hilo'},
	{id:7, tipo:'medias', nombre:'Medias Slappy Logo', material:'algodon'},
	{id:8, tipo:'skate', nombre:'Varillas de Skate Slappy', material:'plastico'},			 				
 ];

const buscarProducto = productos.find(producto => producto.id === 3); 
console.log(buscarProducto);

let concatenado = "ID : "+ productos.id +"Tipo: "+ productos.tipo + "Producto: " + productos.nombre +"Material: "+productos.material;
let plantilla   = `ID: ${productos.id} - Tipo ${productos.tipo} - Producto ${productos.nombre} - material ${productos.material}`;

console.log(concatenado);
console.log(plantilla);

let articulos = document.getElementsByClassName("articulos");
console.log(articulos[0].innerHTML);



