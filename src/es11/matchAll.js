const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Aguacate, Apple, Orange, etc. etc. etc.';

for (let match of fruit.matchAll(regex)){
    console.log(match);
}