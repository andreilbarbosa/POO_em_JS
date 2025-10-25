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


const nome = "Andrei";
const idade = 20;
const conhecimentos = ['html', 'css', 'javascript'];

const pessoa = {
    nome: nome,
    idade: idade,
    conhecimentos: conhecimentos,
}

//


Object.freeze(pessoa);

pessoa.nome = 'Joao';

console.log(pessoa['nome']);

pessoa['sobrenome'] = 'Barbosa';

if('sobrenome' in pessoa){
    console.log(`Possui sobrenome. O mesmo é ${pessoa.sobrenome}, logo, seu nome é ${pessoa.nome} ${pessoa.sobrenome}.`);
}else{
    console.log('Nào possui sobrenome.');
}

console.log(Object.keys(pessoa));

console.log(Object.values(pessoa));