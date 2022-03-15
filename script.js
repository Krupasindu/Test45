

const var_div = document.querySelector('.div-01');
const btn=document.querySelector('.click-btn');


var_div.addEventListener('mouseover',function(e){
    if(e.target.classList.contains('click-btn')) return;  
    e.target.style.top = `${Math.random()*100}px`;
    e.target.style.left = `${Math.random()*100}px`;

});
var_div.addEventListener('mouseout',function(e){
    if(e.target.classList.contains('click-btn')) return;
    e.target.style.top = `${Math.random()*100*Math.random()*10}px`;
 e.target.style.left = `${Math.random()*100*Math.random()*10}px`;

});
btn.addEventListener('click',function(e){
    document.querySelector('.txt-Winner').classList.remove('hidden');
document.querySelector('.overlay').classList.remove('hidden');

})
