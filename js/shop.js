let entradaUsuario = prompt('Ingrese su nombre')
let recibe = "Hola! " + entradaUsuario + ' Bienvenido al Shop del Slappy DIY.'

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
		console.log("usted selecciono " + this.nombre)
	}	
}

let tipo = prompt('Ingrese el tipo')
let nombre = prompt('Ingrese el nombre:" ')
let material = prompt('Ingrese el material');

const productoX = new Producto(tipo, nombre, material);

const producto1 = new Producto('bolsa','Bolso Playero Slappy DIY','hilo'); 
const producto2 = new Producto('cera','Vela/Wax Slappy DIY','cera'); 
const producto3 = new Producto('campera','Campera Bomber Slappy DIY','hilo'); 
const producto4 = new Producto('bolsa','Bolsas Slappy Logo','algodon'); 
const producto5 = new Producto('remera','Remera Slappy DIY x Persistir','algodon'); 
const producto6 = new Producto('bolso','Bolsos Eje x Slappy DIY','hilo'); 
const producto7 = new Producto('medias','Medias Slappy Logo','algodon'); 
const producto8 = new Producto('skate','Varillas de Skate Slappy','plastico'); 

producto1.respuesta();
producto1.vender();	