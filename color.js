const background = document.getElementById('background');
const btn = document.querySelector('#color');
const main = document.querySelector('main');

//#a45678 generating hexadecimal code

hexArr = [ 1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
btn.addEventListener('click', function(){

    hexagonal = "#";

    for(i=0; i<6; i++){
       hexagonal +=hexArr[getRandomColor()]
    }

    main.style.backgroundColor =hexagonal
    background.textContent = hexagonal
    background.style.color = hexagonal
   
})

function getRandomColor(){
    return Math.floor(Math.random()*hexArr.length);
}

