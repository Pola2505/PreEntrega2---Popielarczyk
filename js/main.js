let user1
// Funcion lista de actividades
function listaActividades() {
    console.log("Elegi el nivel de actividad entre 1.2 a 1.8");
    console.log("1.2 - ninguna actividad ( personas enfermas, todo el dia en la cama");
    console.log("1.4 - poca actividad ( solo paseos )");
    console.log("1.5 - actividad ligera ( solo en el trabajo, oficina)");
    console.log("1.6 - actividad moderada ( trabajo oficina + 3 entrenamientos fisicos por semana");
    console.log("1.7 - mucha actividad ( trabajo fisico + 3 entrenamientos por semana)");
    console.log("1.8 - entrenamientos todos los dias");
}
// Funcion elegir elementos del menu
function elegir() {
    const option = prompt(
        "Elegi una dieta:",
        "1. Dieta vegetariana",
        "2. Dieta vegana",
        "3. Dieta comun",
        "4. Dieta facil y barata",
        "5. Salir"
    );

    opciones(option, user1);
}

// Función de bienvenida al usuario
function welcome() {

    // Pedimos el nombre del usuario
    let NOMBRE = prompt(
        "Bienvenido a nuestra pagina sobre nutricion. Para registrarte y encontrar una dieta perfecta ingrese su nombre:"
    );

    // Pedimos la edad del usuario 
    let EDAD = prompt(
        "Por favor ingrese su edad:"
    );

    let esNumero = false;

    while (!esNumero) {
        if (!isNaN(EDAD) && EDAD > 0 && EDAD < 120) {
            esNumero = true;
            console.log("Ingresaste un numero valido");
        } else {
            EDAD = prompt("No se ingreso un numero valido");
        }
    }

    // Pedimos la altura del usuario
    let ALTURA = prompt(
        "Por favor, ingrese su altura"
    );

    esNumero = false;

    while (!esNumero) {
        if (!isNaN(ALTURA) && ALTURA > 0 && ALTURA < 260) {
            esNumero = true;
            console.log("Ingresaste un numero valido");
        } else {
            ALTURA = prompt("No se ingreso un numero valido");
        }
    }

    // Pedimos EL PESO del usuario
    let PESO = prompt(
        "Por favor, ingrese su peso"
    );

    esNumero = false;

    while (!esNumero) {
        if (!isNaN(PESO) && PESO > 0 && PESO < 260) {
            esNumero = true;
            console.log("Ingresaste un numero valido");
        } else {
            PESO = prompt("No se ingreso un numero valido");
        }
    }

    // Pedimos el email del usuario para mandar dietas y ofertas
    let CORREO = prompt(
        "Por favor ingrese su correo electrónico:"
    );

    listaActividades();

    let ACTIVIDAD = prompt(
        "Elegi el nivel de actividad diaria entre 1.2 a 1.8"
    );

    let RESULTADO = 655.1 + (9.567 * PESO) + (1.85 * ALTURA) - (4.68 * EDAD);
    console.log("La cantidad de calorias que necesitas para mantener tu peso actual es " + Math.ceil(RESULTADO * ACTIVIDAD) + " calorias ");
    console.log("Para bajar de peso deberias comer alrededor de " + Math.ceil(RESULTADO * ACTIVIDAD - 300) + " calorias ");
    console.log("Para subir de peso deberias comer alrededor de " + Math.ceil(RESULTADO * ACTIVIDAD + 300) + " calorias ");



    // Constructor para guardar los datos del usuario

    class nuevoUsuario {
        constructor(nombre, edad, altura, peso, correo, actividad) {

            this.nombre = nombre;
            this.edad = edad;
            this.altura = altura;
            this.peso = peso;
            this.correo = correo;
            this.actividad = actividad;

        }
    }

    user1 = new nuevoUsuario(NOMBRE, EDAD, ALTURA, PESO, CORREO, ACTIVIDAD);
    console.log(user1);


    // Funcion de mensaje al usuario
    message(user1);

}


// Mensaje al usuario con su nombre ingresado
function message(user1) {
    alert(
        "Hola " +
        user1.nombre + " ! " +
        " Gracias por ingresar todos tus datos. Esperamos que vamos a poder ayudarte a encontrar una dieta perfecta para vos!"
    );
}

function menu() {

    // Array 
    const options = [
        "Elegi una dieta:",
        "1. Dieta vegetariana",
        "2. Dieta vegana",
        "3. Dieta comun",
        "4. Dieta facil y barata",
        "5. Salir"
    ];

    for (let i = 0; i < options.length; i++) {
        console.log(options[i]);
    }
}


// Opciones 
function opciones(option, user1) {

    switch (option) {
        case "1":
            console.log("Option 1");
            alert(
                "Te vamos a mostrar que una dieta vegetariana no tiene que ser llena de ensaladas y verduras aburridas. Vamos a mandarte la oferta a tu mail con toda la informacion, precios y con acuerdo a la cantidad de calorias calculadas para vos con nuestro calculador inteligente."
            );
            elegir();
            break;
        case "2":
            console.log("Option 2");
            alert(
                "Te vamos a mostrar que una dieta vegana puede ser rica y interesante. Probaras varias cosas diferentes que te ayudaran a no extranar ningun producto animal! Vamos a mandarte la oferta a tu mail con toda la informacion, precios y con acuerdo a la cantidad de calorias calculadas para vos con nuestro calculador inteligente."
            );
            elegir();
            break;
        case "3":
            console.log("Option 3");
            alert(
                "Te ofrecemos esta dieta que tiene de todo. Muchos platos con pasta, arroz, carne, verduras, panqueues de avena y nuestra receta secreta para una avena al horno increible. No vas a extranar nada con estos platos increibles! Hay un monton de opciones entre cuales puedes elegir y tambien cambiar los ingredientes con una lista de ingredientes de remplazo!"
            );
            elegir();
            break;
        case "4":
            console.log("Option 4");
            let presupuesto = prompt(
                "Ingrese su presupuesto",
            );
            if (presupuesto <= 5000) {
                alert(
                    "Te recomendamos la dieta de verano con ingredientes simples y baratos" +
                    " El precio es 4500 pesos"

                );
                elegir();
                
            } else if (presupuesto > 10000 && presupuesto <= 15000) {
                alert(
                    "Te recomendamos la dieta mediterranea con un nutricionista asignado que te brindara toda la informacion 24hs por 7!" +
                    " El precio es 12000 pesos"

                );
                elegir();

            } else if (presupuesto > 25000) {
                alert(
                    "Te recomendamos nuestra dieta con un nutricionista asignado y con los entrenamientos en casa con videos y un plan" +
                    "El precio es 20000 pesos"
                );
                elegir();

            } else {
                alert(
                    "Numero invalido"
                );
                elegir();
            }
            break;
        case "5":
            console.log(user1);
            alert(
                "Te vamos a enviar la informacion a tu correo: '" + user1.correo + "'"
            );
            console.log("Segui navegando.");
            return;
        default:
            console.log("Opcion invalida");
    }
   
}


// Llame a la función de bienvenida, datos del usuario
welcome();
// Muestra el menu 
menu();
// Para poder elegir la opcion y volver a llamar otras opciones despues de elegir sacando despues de la opcion salir
elegir();
// Pregunta por la primera opción
opciones();






