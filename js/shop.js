
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

let articulos = document.getElementsByClassName("articulos");
console.log(articulos[0].innerHTML);

const buscarProducto = productos.find(producto => producto.id <= 7); 
console.log(buscarProducto);

 let boton1 = document.getElementById("btn1")
 boton1.onclick = () => { console.log("Usted selecciono Bolso Playero Slappy DIY");}

 let boton2 = document.getElementById("btn2")
 boton2.onclick = () => { console.log("Usted selecciono Vela/Wax Slappy DIY");}

 let boton3 = document.getElementById("btn3")
 boton3.onclick = () => { console.log("Usted selecciono Campera Bomber Slappy DIY");}

 let boton4 = document.getElementById("btn4")
 boton4.onclick = () => { console.log("Usted selecciono Bolsas Slappy Logo");}

 let boton5 = document.getElementById("btn5")
 boton5.onclick = () => { console.log("Usted selecciono Remera Slappy DIY x Persistir");}

 let boton6 = document.getElementById("btn6")
 boton6.onclick = () => { console.log("Usted selecciono Bolsos Eje x Slappy DIY");}

 let boton7 = document.getElementById("btn7")
 boton7.onclick = () => { console.log("Usted selecciono Medias Slappy Logo");}

 let boton8 = document.getElementById("btn8")
 boton8.onclick = () => { console.log("Usted selecciono Varillas de Skate Slappy");}

 let ok = true;
const carrito = [];
cargarProducto = false;
do{
	if(cargarProducto){
			carrito.push(productos);
			console.log("Producto adherido al Carro");
	}
}while(ok != false)

console.log(carrito);
