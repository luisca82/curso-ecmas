function* iterate(array){
    for (let value of array){
        yield value;
    }
}
const arreglo = ['David','Ana','Luis','Emiliana'];

const it = iterate(arreglo);

for (let valor of arreglo){
    console.log(it.next().value);
}
