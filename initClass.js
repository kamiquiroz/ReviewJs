function variblesVar(){
    //Variables
    console.log(animal);
    var animal="leon";

    var animal="Mono";
    console.log(animal);
   /* var a = 5;
    var b = 7;
    var z = a + b;
    console.log(z);

    //scope
    if (true) {
        console.log("Z-->"+z);
    }*/

    if(true) {
        var animal  = "pato";
        console.log(animal);
    }

    var showMessage = function (){
        message = "hello";
        console.log("this is the message "+ message)
        var message;
    }
    
    showMessage();
}

function variblesLet(){ 

    let animal="Leon";
    console.log("Animal 1-->"+animal);
    
    //let animal="Mono";
    //console.log("Animal 2-->"+animal);
    animal="Mono";

    //scope
    if(true) {
        let animal  = "pato";
        console.log("Animal 2-->"+animal);
    }
    console.log("Animal 3-->"+animal);

    for (let i=0; i<5; i++) {
        console.log(i);
    }
}

function variableConst(){
    const animal="Leon";
    console.log("Animal 1-->"+animal);
    //animal  = "pato";
    //console.log("Animal 2-->"+animal);
        
    //scope
    if(true) {
        const animal  = "pato";
        console.log("Animal 2-->"+animal);
    }
    console.log("Animal 3-->"+animal);

    if(true) {
        const animal  = [];
        animal.push("Leon");
        animal.push("Pato");
        animal.push("Mono");
        console.log("Animal array-->"+animal);

        animal[0]="Cangrejo";
        console.log("Animal array-->"+animal);

        animal = "Zebra";
    }

}

//variblesVar();
//variblesLet();

//variableConst();

function operators() {
    let x = 5;
    let y = "5";
    if (x === y) {
        console.log("true");
    }else {
        console.log("false");
    }
}

operators();



const result = myFunction(5, 4);
console.log(result);

function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

/*
function suma (a , b) {
    return a+b;
}

const suma = (a , b) => a+b;

const result2 = suma (3,2);
console.log(result2);*/

//1. Convertir en función anonima 
/*function (a , b) {
    return a+b;
}*/

//2. Eliminar la palabra function
//(a , b) => {
//    return a+b;
//}

//3. Eliminar la palabra return y los parentesis
//(a , b) => a+b;

//3. Eliminar la palabra return
//(a , b) => a+b;

const suma = (a , b) => a+b;

const result2 = suma(3,2);
console.log("El resultado de la suma es:" + result2);

/*const suma = (a , b) => {
    const x = a+b;
    const y = x+1; 
    return y+x;
}*/