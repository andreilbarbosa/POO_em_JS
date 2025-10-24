const carro = {
    modelo: 'Fiesta',
    marca: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('acelerar..');
    }
}

const CarroJoao = {
    modelo: 'Fiesta',
    marca: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log('acelerar..');
    }
}

const CarroMaria = {
    modelo: 'Fiesta',
    marca: 'Ka',
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function(){
        console.log('acelerar..');
    }
}

//Segunda forma - Funções Construtoras


function Carro (modelo, marca, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.marca = marca;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('acelerar!');
    }
}

const carroJoao2 = new Carro("Fiesta", "Ford", "2020", "2019");

const carroMaria2 = new Carro("Ka", "Ford", "2022", "2021");

console.log(carroJoao2);

console.log(carroMaria2);

