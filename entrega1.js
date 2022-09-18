


function Pizza(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pizza " + this.version + " es de tamaño " + this.size + " y su precio es " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ( "Su plato es: Pizza " + this.version)}
}


const pizzaMargarita = new Pizza("margarita", 550, "mediana", 1, "margarita.jpg")
const pizzaPrimavera = new Pizza("primavera" , 600, "mediana",2, "primavera.jpg")
const pizzaCaprese = new Pizza("caprese", 650, "grande",3, "caprese.jpg")

let arrayPizzas =[pizzaCaprese, pizzaPrimavera, pizzaMargarita]




function Pasta(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la pasta " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es:  " + this.version)}
}

const pastaSpaghetti = new Pasta('spaghetti', 400, "grande",4, "spaghetti.jpg");
const pastaRavioles = new Pasta('ravioles', 600, "grande",5, "ravioles.jpg");
const pastaMacarrones = new Pasta('macarrones', 450, "grande",6, "macarrones.jpg");

let arrayPasta = [pastaRavioles, pastaSpaghetti, pastaMacarrones]




function Ensalada(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Ensalada " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: Ensalada " + this.version)}
}

const ensaladaTomateLechuga = new Ensalada('tomate y lechuga', 750, "mediana",7,"tomatelechuga.jpg");
const ensaladaCesar = new Ensalada('cesar', 800, "mediana",8,"cesar.jpg");
const ensaladaPapaHuevo = new Ensalada('papa y huevo', 800, "mediana",9,"papahuevo.jpg");

let arrayEnsalada = [ensaladaCesar, ensaladaPapaHuevo, ensaladaTomateLechuga] 




function Carne(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("la Carne: " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su plato es: " + this.version)}
}

const carneBife = new Carne('bife', 400, "mediano",10,"bife.jpg");
const carneHamburguesa = new Carne('hamburguesa', 600, "mediana",11,"hamburguesa.jpg");
const carneVacio = new Carne('vacio', 650, "mediano",12,"vacio.jpg");
const carneChorizo = new Carne('chorizo', 400, "mediano",13,"chorizo.jpg");
const carneAsado = new Carne('asado', 600, "mediana",14,"asado.jpg");

let arrayCarne = [carneBife, carneAsado, carneVacio, carneChorizo, carneHamburguesa] 



function Trago(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El trago de " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su trago es: " + this.version)}
}

const tragoVino = new Trago('vino', 400, "copa",15,"vino.jpg");
const tragoCerveza = new Trago('cerveza', 600, "pinta",16,"cerveza.jpg");
const tragoRefresco = new Trago('refresco', 650, "vaso",17,"refresco.jpg");

let arrayTragos =  [tragoVino, tragoCerveza, tragoRefresco]



function Postre(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El postre " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio +  " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su postre es: " + this.version)}
}

const postreFlan = new Postre('flan', 400, "chico",18,"flan.jpg");
const postreFruta = new Postre('fruta', 600, "chico",19,"fruta.jpg");
const postreHelado = new Postre('helado', 650, "chico",20,"helado.jpg");

let arrayPostres = [postreFlan, postreFruta, postreHelado]



function Cafe(version,precio,size,id,imagen) {
	this.version = version;
	this.precio = precio;
	this.size = size;
	this.id = id;
	this.imagen = imagen;
	this.hablar = function () {console.log ("El " + this.version +" es de tamaño " + this.size + " y su precio es $ " + this.precio + " - CODIGO: " + this.id)}
	this.idFuction = function () {console.log ("Su pedido es: " + this.version)}
}

const cafeCafe = new Cafe('cafe', 300, "chico",21,"cafe.jpg");
const cafeTe = new Cafe('te', 250, "chico",22,"te.jpg");
const cafeCapuccino = new Cafe('capuccino', 350, "chico",23,"capuccino.jpg");

let arrayCafe = [cafeCafe, cafeTe, cafeCapuccino ]




let arrayMenu = arrayEnsalada.concat(arrayCarne, arrayPasta, arrayPizzas, arrayTragos ,arrayCafe, arrayPostres)




function buscarPorPrecio() {
	let buscarPrecio = prompt("Ingrese el monto maximo a gastar")

	let precioBusqueda = arrayMenu.filter((Pizza)=>Pizza.precio <= buscarPrecio)
	
	if(precioBusqueda == 0 ) {
		console.log("No existen productos con ese precio")
	}else{
		console.log("Los productos encontrados con ese precio son:")
		for (let precioEncontrado of precioBusqueda) {
			precioEncontrado.hablar()
		}
	}
}






function mostrarMenu() {
	for (Pizza of arrayPizzas) {Pizza.hablar();}
	for (Pasta of arrayPasta) {Pasta.hablar();}
	for (Ensalada of arrayEnsalada) {Ensalada.hablar();}
	for (Carne of arrayCarne) {Carne.hablar();}
	for (Trago of arrayTragos) {Trago.hablar();}
	for (Postre of arrayPostres) {Postre.hablar();}	
	for (Cafe of arrayCafe) {Cafe.hablar();}	
}



function buscarPorId() {
	let buscarId = parseInt(prompt("Ingrese el CODIGO del plato deseado"));

	let idEncontrado = arrayPizzas.find((Pizza)=>Pizza.id == buscarId )
    	||  arrayPasta.find((Pasta)=>Pasta.id == buscarId )  		
		||  arrayEnsalada.find((Ensalada)=>Ensalada.id == buscarId ) 
		||  arrayCarne.find((Carne)=>Carne.id == buscarId ) 
		||  arrayTragos.find((Tragos)=>Tragos.id == buscarId ) 
		||  arrayPostres.find((Postre)=>Postre.id == buscarId ) 
		||  arrayCafe.find((Cafe)=>Cafe.id == buscarId ) 
	if(idEncontrado == undefined ) {
		console.log("El codigo ingresado no esta asociado a ningun plato")
	}else{
		idEncontrado.idFuction()
	}

}



function limpiar() {
	let divPizzas = document.getElementById("pizzas")
	let divPasta = document.getElementById('pasta')
	let divCafe = document.getElementById("cafe")
	let divEnsalada = document.getElementById("ensalada")
	let divTragos = document.getElementById("tragos")
	let divPostres = document.getElementById("postres")
	let divCarne = document.getElementById("carne")
	divPizzas.innerHTML = ""
	divCafe.innerHTML = ""
	divEnsalada.innerHTML = ""
	divTragos.innerHTML = ""
	divPostres.innerHTML = ""
	divCarne.innerHTML = ""
	divPasta.innerHTML = ""
	
}

let productosEnCarrito = []

function mostrarMenuPizzas(array) { 
	limpiar()
	let divPizzas = document.getElementById("pizzas")
	

	arrayPizzas.forEach((pizza)=>  {
		
		let nuevaPizza = document.createElement("div")

		nuevaPizza.innerHTML = `<div class="card fix my-3" style="width: 15rem;">
		                  			<img class="card-img-top " src="images/${pizza.imagen}" alt="pasta">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${pizza.version}</h5>
		                      					<p class="card-text">Precio: ${pizza.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${pizza.size}</p>
		                      				<button id="agregarBtn${pizza.id}" class="btn btn-primary ">Comprar </button>
		                    			</div>
	                			</div>`
	        divPizzas.append(nuevaPizza)

	        let btnAgregar = document.getElementById(`agregarBtn${pizza.id}`)

			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPizza(pizza)

			})


	})



}


function agregarAlCarritoPizza (pizza) {
	productosEnCarrito.push(pizza)
	console.log(productosEnCarrito)

}









function mostrarMenuPasta(array)  { 
	limpiar()
	let divPasta = document.getElementById('pasta')
	arrayPasta.forEach((pasta)=> {

		let nuevaPasta = document.createElement("div")
		nuevaPasta.innerHTML = `<div class="card my-3" style="width: 15rem;">
		                  			<img class="card-img-top" src="images/${pasta.imagen}" alt="pasta">
		                    			<div class="card-body py-5">
		                      				<h5 class="card-title">${pasta.version}</h5>
		                      					<p class="card-text">Precio: ${pasta.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${pasta.size}</p>
		                      				<button id="agregarBtn${pasta.id}" class="btn btn-primary">Comprar</button>
		                    			</div>
	                			</div>`
	   		 divPasta.append(nuevaPasta)

	   		let btnAgregar = document.getElementById(`agregarBtn${pasta.id}`)
			btnAgregar.addEventListener("click", () => {

				agregarAlCarritoPasta(pasta)

			})




	})

}

function agregarAlCarritoPasta (pasta) {
	productosEnCarrito.push(pasta)
	console.log(productosEnCarrito)

}






function mostrarMenuEnsalada () { 
	limpiar()
	let divEnsalada = document.getElementById("ensalada")

	arrayEnsalada.forEach((ensalada)=> {

		let nuevaEnsalada = document.createElement("div")

		nuevaEnsalada.innerHTML = `<div class="card my-3" style="width: 15rem; height:400px;">
		                  			<img class="card-img-top" src="images/${ensalada.imagen}" alt="pasta">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${ensalada.version}</h5>
		                      					<p class="card-text">Precio: ${ensalada.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${ensalada.size}</p>
		                      				<button id="agregarBtn${ensalada.id}" class="btn btn-primary">Comprar</button>
		                    			</div>
	                			</div>`
	   		 divEnsalada.append(nuevaEnsalada)
	   		 let btnAgregar = document.getElementById(`agregarBtn${ensalada.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoEnsalada(ensalada)

			})




	})
}

function agregarAlCarritoEnsalada (ensalada) {
	productosEnCarrito.push(ensalada)
	console.log(productosEnCarrito)

}






function mostrarMenuCarne () { 
	limpiar()
	let divCarne = document.getElementById("carne")


	arrayCarne.forEach((carne)=> {

		let nuevaCarne = document.createElement("div")

		nuevaCarne.innerHTML = `<div class="card my-3" style="width: 15rem; height: 400px;">
		                  			<img class="card-img-top" src="images/${carne.imagen}" alt="carne">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${carne.version}</h5>
		                      					<p class="card-text">Precio: ${carne.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${carne.size}</p>
		                      				<button id="agregarBtn${carne.id}" class="btn btn-primary">Comprar</button>
		                    			</div>
	                			</div>`
	   		 divCarne.append(nuevaCarne)
	   		 let btnAgregar = document.getElementById(`agregarBtn${carne.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(carne)

			})


	})

}

function agregarAlCarritoCarne (carne) {
	productosEnCarrito.push(carne)
	console.log(productosEnCarrito)

}





function mostrarMenuTragos() { 
	limpiar()
	let divTragos = document.getElementById("tragos")

	arrayTragos.forEach((tragos)=> {

		let nuevaTragos = document.createElement("div")

		nuevaTragos.innerHTML = `<div class="card my-3" style="width: 15rem; height: 500px">
		                  			<img class="card-img-top" src="images/${tragos.imagen}" alt="carne">
		                    			<div class="card-body">
		                      				<h5 class="card-title">${tragos.version}</h5>
		                      					<p class="card-text">Precio: ${tragos.precio}</p>
		                      					<p class="card-text">Tamaño de producto: ${tragos.size}</p>
		                      				<button id="agregarBtn${tragos.id}" class="btn btn-primary">Comprar</button>
		                    			</div>
	                			</div>`
	   		 divTragos.append(nuevaTragos)
	   			let btnAgregar = document.getElementById(`agregarBtn${tragos.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(tragos)

			})

	})

}

function agregarAlCarritoTragos (tragos) {
	productosEnCarrito.push(tragos)
	console.log(productosEnCarrito)

}









function mostrarMenuPostres() { 
		limpiar()
		let divPostres = document.getElementById("postres")


		arrayPostres.forEach((postre)=> {

			let nuevaPostre = document.createElement("div")

			nuevaPostre.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${postre.imagen}" alt="postre">
			                    			<div class="card-body">
			                      				<h5 class="card-title">${postre.version}</h5>
			                      					<p class="card-text">Precio: ${postre.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${postre.size}</p>
		                      					<button id="agregarBtn${postre.id}" class="btn btn-primary">Comprar</button>
			                    			</div>
		                			</div>`
		   		 divPostres.append(nuevaPostre)
		   		 let btnAgregar = document.getElementById(`agregarBtn${postre.id}`)
				btnAgregar.addEventListener("click", () => {

				agregarAlCarritoCarne(postre)

			})


		})
}

function agregarAlCarritoPostres (postre) {
	productosEnCarrito.push(postre)
	console.log(productosEnCarrito)

}





function mostrarMenuCafe() { 
		limpiar()
		let divCafe = document.getElementById("cafe")

		arrayCafe.forEach((cafe)=> {

			let nuevaCafe = document.createElement("div")

			nuevaCafe.innerHTML = `<div class="card my-3" style="width: 15rem;">
			                  			<img class="card-img-top" src="images/${cafe.imagen}" alt="postre">
			                    			<div class="card-body">
			                      				<h5 class="card-title">${cafe.version}</h5>
			                      					<p class="card-text">Precio: ${cafe.precio}</p>
			                      					<p class="card-text">Tamaño de producto: ${cafe.size}</p>
		                      					<button id="agregarBtn${cafe.id}" class="btn btn-primary">Comprar</button>
			                    			</div>
		                			</div>`
		   		 divCafe.append(nuevaCafe)
		   		let btnAgregar = document.getElementById(`agregarBtn${cafe.id}`)
					btnAgregar.addEventListener("click", () => {

					agregarAlCarritoCarne(cafe)

			})


		})

}



function agregarAlCarritoCafe (cafe) {
	productosEnCarrito.push(postre)
	console.log(productosEnCarrito)

}













let mostrarMenuPizzasBtn = document.getElementById("mostrarPizzasBtn")

mostrarMenuPizzasBtn.addEventListener("click",mostrarMenuPizzas)


let mostrarMenuPastaBtn = document.getElementById("mostrarPastaBtn")

mostrarMenuPastaBtn.addEventListener("click",mostrarMenuPasta)


let mostrarMenuEnsaladaBtn = document.getElementById("mostrarEnsaladaBtn")

mostrarMenuEnsaladaBtn.addEventListener("click",mostrarMenuEnsalada)



let mostrarMenuCarneBtn = document.getElementById("mostrarCarneBtn")

mostrarMenuCarneBtn.addEventListener("click",mostrarMenuCarne)



let mostrarMenuTragosBtn = document.getElementById("mostrarTragosBtn")

mostrarMenuTragosBtn.addEventListener("click",mostrarMenuTragos)


let mostrarMenuPostresBtn = document.getElementById("mostrarPostresBtn")

mostrarMenuPostresBtn.addEventListener("click",mostrarMenuPostres)



let mostrarMenuCafeBtn = document.getElementById("mostrarCafeBtn")

mostrarMenuCafeBtn.addEventListener("click", mostrarMenuCafe)


let mostrarMenuCompleto = document.getElementById("mostrarMenuBtn")






let buttonBuscar = document.getElementById("buttonBuscar")

buttonBuscar.addEventListener("click", buscarPorPlato )







function buscarPorPlato() {
	let buscarPlato = document.getElementById("buscarPlato")

	switch (buscarPlato.value.toLowerCase()) {

	case "margarita":
	mostrarMenuPizzas();
	break;

	case "primavera":
	mostrarMenuPizzas();
	break;

	case "caprese":
	mostrarMenuPizzas();
	break;

	case "flan" :
	mostrarMenuPostres();
	break; 

	case "helado":
	mostrarMenuPostres();
	break; 

	case "fruta":
	mostrarMenuPostres();
	break; 

	case "vacio" :
	mostrarMenuCarne();
	break;

	case "hamburguesa":
	mostrarMenuCarne();
	break; 

	case  "bife" :
	mostrarMenuCarne();
	break; 

	case  "chorizo" :
	mostrarMenuCarne();
	break;  

	case "asado" :
	mostrarMenuCarne();
	break; 

	case "pasta":
	mostrarMenuPasta();
	break;

	case "ravioles":
	mostrarMenuPasta();
	break;

	case "macarrones":
	mostrarMenuPasta();
	break;

	case "vino":
	mostrarMenuTragos();
	break;

	case "cerveza":
	mostrarMenuTragos();
	break;

	case "refresco":
	mostrarMenuTragos();
	break;

	case "cesar":
	mostrarMenuEnsalada();
	break;

	case "tomate y lechuga":
	mostrarMenuEnsalada();
	break;

	case "papa y huevo":
	mostrarMenuEnsalada();
	break;

	case "lechuga y tomate":
	mostrarMenuEnsalada();
	break;

	case "cafe":
	mostrarMenuCafe();
	break;

	case "capuccino":
	mostrarMenuCafe();
	break;

	case "te":
	mostrarMenuCafe();
	break;

	default:
	buscarPlato = alert("No se ha encontrado el plato en nuestro menu")
	}
}






function Cliente(nombre,apellido,calle,numeracion,telefono) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.calle = calle;
	this.numeracion = numeracion;
	this.telefono = telefono;

}
	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")


let arrayClientes = []






function crearCliente(array) {

	let nombreCliente = document.getElementById("nombreCliente")
	let apellidoCliente = document.getElementById("apellidoCliente")
	let calleCliente = document.getElementById("calleCliente")
	let numeracionCliente = document.getElementById("numeracionCliente")
	let telefonoCliente = document.getElementById("telefonoCliente")

	let nuevoCliente = new Cliente (nombreCliente.value, apellidoCliente.value, calleCliente.value, numeracionCliente.value, telefonoCliente.value)
	array.push(nuevoCliente)

	console.log(array)
}



let clienteNuevo = document.getElementById("clienteNuevo")

clienteNuevo.addEventListener("click", ()=>{
	crearCliente(arrayClientes);
	alert("Felicidades! Ya eres cliente registrado. Tu codigo de cliente es: " );

})



