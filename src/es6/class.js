class user {
    //Constructor
    constructor(name) {
        this.name = name;
        //console.log(this.name);
    }
    //metodos
    greetings () {
        return 'Hello';
    }
    speak(){
        return(`${this.greetings()} ${this.name}`);
    }
    set Name(name){
        this.name = name;
    } 

    get Name(){
        return this.name;
    }
};

/*const luisito = new user();
console.log(luisito.greetings());
const prueba = new user();
console.log(prueba.greetings());*/

const saludaLuisito = new user('Luisito');
console.log(saludaLuisito.speak());
console.log(saludaLuisito.Name="Carlitos");
console.log(saludaLuisito.speak());
    