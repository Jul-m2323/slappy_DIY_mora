const productos = [
    {
        id:1,
        tipo:'bolsa',
        nombre:'Bolso Playero Slappy DIY',
        material:'hilo',
        precio:750,
        img:"multimedia/bolso_playero_slappy.jpg" ,
        seleccionado: false

    },
    {
        id:2,
        tipo:'cera',
        nombre:'Vela/Wax Slappy DIY',
        material:'cera',
        precio:150,
        img:"multimedia/vela_slappy.jpg" ,
        seleccionado: false

    },
    {
        id:3,
        tipo:'campera',
        nombre:"Campera Bomber Slappy DIY",
        material:'hilo',
        precio:3500,
        img: 'multimedia/campera_slappy.jpg' ,
        seleccionado: false

    },
    {
        id:4,
        tipo:'bolsa',
        nombre:'Bolsas Slappy Logo',
        material:'algodon',
        precio:850,
        img: 'multimedia/bolsas_slappy_diy.jpg' ,
        seleccionado: false

    },
    {
        id:5,
        tipo:'remera',
        nombre:'Remera Slappy DIY x Persistir',
        material:'algodon',
        precio:900,
        img:"multimedia/slappy_remera_persistir.jpg" ,
        seleccionado: false

    },
    {   
        id:6,
        tipo:'bolso',
        nombre:'Bolsos Eje x Slappy DIY',
        material:'hilo',
        precio:1800,
        img: 'multimedia/bolsos_slappy_diy.jpg',
        seleccionado: false

    },
    {   
        id:7,
        tipo:'medias',
        nombre:'Medias Slappy Logo',
        material:'algodon',
        precio:400,
        img: 'multimedia/medias_slappy_diy.jpg',
        seleccionado: false

    },
    {
        id:8,
        tipo:'skate',
        nombre:'Varillas de Skate Slappy',
        material:'plastico',
        precio:400,
        img:"multimedia/varas_skate.jpg" ,
        seleccionado: false
    },			 				
];

const clientes = {
    nombre:'',
    apellido:'',
    telefono:'',
    direccion:'',
    codPostal:''
};

//CARDS CREADAS PARA CADA PRODUCTO
for (element of productos) {
    $("#primerSeccionProductos").append(
        `<div class="card  miCard col-12 col-sm-6 col-md-8 col-lg-4" >
		  <img src="${element.img}" class="card-img-top" alt="...">
		  <div class="card-body">
		    <p class="card-text articulos">${element.nombre}</p>
			<p>${element.precio} $</p>
			<button type="button" id="${element.id}" class="buttonJs sumarAlCarro btn btn-outline-warning">Agregar al carrito</button>
		  </div>
		</div>`
    );
}

//ASIGNACION DE EVENTO SUMAR AL CARRO
$('.sumarAlCarro').click( function (event){
    const buttonclick = event.target;
    console.log(buttonclick.id);
    console.log(buttonclick.nombre);

    const sumarProductos = productos.find((productoItem) => productoItem.id === parseInt(buttonclick.id));

    if (sumarProductos){
        sumarProductos.seleccionado = true ;
        alert("El producto se ha agregado al carrito");
        console.log(productos);
    }

})

//CARRITO MAS FUNCIONES (MOSTRAR PRODUCTOS SELECCIONADOS, RELLENAR FORM, REALIZAR COMPRA)
$("#carrito").click(function () {
    console.log("click");

    const hijos = $('.noRepeat');
    console.log(hijos);
    for (const hijo of hijos) {
        hijo.remove()
    }

const nombre = '';
const apellido ='';
const telefono = '';
const direccion = '';
const codPostal = '';
$(`#Carrito`).append(
   `<div class="col-xl-4 noRepeat">
    <h2>Productos Seleccionados</h2>
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Material</th>
                <th scope="col">$</th>
            </tr> 
        </thead>
        <tbody id="productoSeleccionado">
        </tbody>
    </table>
    <div id="carritoTotal"></div>
    </div>
    <div class="col-xl-6 noRepeat">
        <form id="cliente">
            <label for="formGroupExampleInput">Nombre</label>
            <input type="text" id="nombre" class="col-xl-12 form-control">

            <label for="formGroupExampleInput2">Apellido</label>
            <input type="text" id="apellido" class="col-12 form-control">
        
            <label for="formGroupExampleInput2">Telefono</label>
            <input type="number" id="telefono" class="col-12 form-control">
         
            <label for="formGroupExampleInput2">Direccion (incluir entrecalles)</label>
            <input type="text" id="direccion" class="col-12 form-control">
            
            <label for="formGroupExampleInput2">Codigo Postal</label>
            <input type="text" id="codPostal" class="col-12 form-control">
            
            <button id="realizarCompra" type="button" class="btn8 btn btn-outline-warning">Comprar</button>
            <button id="vaciarCarrito" type="button" class="btn8 btn btn-outline-warning">Vaciar Carro</button>
        </form>
    </div>`  
);
const productosCarrito = productos.filter((productoItem) => productoItem.seleccionado);
console.log(productosCarrito);
sessionStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
let totalProductos = 0;

    for (const producto of productosCarrito) {
        totalProductos += parseInt(producto.precio);
        $('#productoSeleccionado').append(` 
        <tr>
			<th>${producto.id}</th>
			<td>${producto.nombre}</td>
			<td>${producto.material}</td>
			<td>$${producto.precio}</td>
		</tr>
    `)}

const total = totalProductos;
const envio = total + 250
$('#carritoTotal').append(`
<h3>Total: $${total}</h3>
<h4>+ Envio: $${envio}</h4>
`)

$('#vaciarCarrito').click(function (){
    $('#productoSeleccionado').empty()
    $('#carritoTotal').empty()

})
 
$('#realizarCompra').click(function() {

if ($("#nombre").val().trim() === ""){
    alert('no ha ingresado su nombre');
    return;
}  else {
    sessionStorage.setItem('nombre',JSON.stringify(nombre));
}  
if ( $("#apellido").val().trim() === ""){
    alert('no ha ingresado su apellido');
    return;
}  else {
    sessionStorage.setItem('nombre',JSON.stringify(apellido));
}  
if ($("#telefono").val().trim() === ""){
    alert('no ha ingresado su telefono');
    return;
}  else {
    sessionStorage.setItem('nombre',JSON.stringify(telefono));
}  
if ($("#direccion").val().trim() === ""){
    alert('no ha ingresado su direccion');
    return;
}  else {
    sessionStorage.setItem('nombre',JSON.stringify(direccion));
}      
if ($("#codPostal").val().trim() === ""){
    alert('no ha ingresado su codigo postal');
    return;
}  else {
    sessionStorage.setItem('nombre',JSON.stringify(codPostal));
}  
alert(`muchas gracias por su compra!`);
})
});


