const button = document.querySelector('#btn');
const texto = document.querySelector('#input');

button.addEventListener('click',async function(){
    const module = await import ('./webPart-DynamicImport/module.js');
    texto.value = module.hello();
    
})