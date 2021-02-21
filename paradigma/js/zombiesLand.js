

//FUNCIONES/VARIABLES
let x=0, y=0
const zombie = document.getElementById('zombie'),
        up = () => zombie.style.transform = `translate(${x}%,${y -=5}%)`
        down = () => zombie.style.transform = `translate(${x}%,${y +=5}%)`
        right = () => zombie.style.transform = `translate(${x += 5}%,${y}%)`
        left = () => zombie.style.transform = `translate(${x -= 5}%,${y}%)` 


document.addEventListener('keydown', evento =>{
    switch (evento.key) {
        case 'ArrowUp':
            up()
            break;
        case 'ArrowDown':
            down()
            break;
        case 'ArrowRight':
            right()
            break;
            case 'ArrowLeft':
            left()
            break;
            
    }
})