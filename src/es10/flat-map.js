//flat
const arrelgoDinamico = [1,2,3,4,[1,2,3,5,[9,8,7]]];
console.log(arrelgoDinamico);
console.log(arrelgoDinamico.flat(3)); //Infinity
console.log(arrelgoDinamico.flat(Infinity)); //Infinity

//flatmap
const arregloSimple = [1,2,3,4,5];
console.table(arregloSimple.flatMap(v => [v, v*2]));

