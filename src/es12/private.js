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
    set #Name(name){
        this.name = name;
    } 

    get #Name(){        /**El signo # es un indicativo que es un metodo privado y solo puede ser accedido por la clase */
        return this.name;
    }
};

const saludaLuisito = new user('Luisito');
console.log(saludaLuisito.speak());
console.log(saludaLuisito.Name="Carlitos");
console.log(saludaLuisito.speak());
    