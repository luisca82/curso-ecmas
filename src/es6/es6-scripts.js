
//Arrays

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]

//Json objects
function solution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    return { ...json1, ...json2 };
  }
console.log(solution());  

//enahced object literals
function newUser(user=1, age=25, country="GT", uId = 1){
    return{
        user,age,country,id:uId,
    }
}
console.log(newUser());
