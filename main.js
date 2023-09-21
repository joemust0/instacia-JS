class Carro{
    constructor(cor){
        this.cor = cor;
    }
    Acelerar(){
        console.log("vruumm");
    }
    Parar(){
        console.log("PAAAAARRREEEEE!!!!!")
    }
}

 class Motor{
    constructor(p){
        console.log("Motor em funcionamento...");
        this.potenciaDoMotor = p;
    }
    Acelerar(){
        console.log("Funciona rapido");
    }
    Parar(){
        console.log("Funciona de vagar")
    }
 }

let c = new Carro("black");
let motor4c= new Motor(10);
let motorV6 = new Motor(100);

c.Acelerar();
c.Parar();
motor4c.Acelerar();
motor4c.Parar();
motorV6.Acelerar();
motorV6.Parar();