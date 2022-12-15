const const_boton = document.getElementById("id_boton")
const const_boton_reiniciar = document.getElementById("boton_reiniciar")
const const_resultado = document.getElementById("id_resultado")

const_boton_reiniciar.addEventListener("click", reiniciar)

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function createArrayOfNumbers(start, end){
    let myArray = [];
    for(let i = start; i <= end; i++) { 
        myArray.push(i);
    }
    return myArray;
}

num_parte = createArrayOfNumbers(1, 28)

const_boton.addEventListener("click", () => {
    
        if(num_parte.length == 0){
            console.log("se acabaron las partes");
            const_resultado.innerHTML = "se acabaron las partes, dale reiniciar para mostrar las partes otra vez"
            return;
        }
        let randomIndex = aleatorio(0, num_parte.length-1);
        let randomNumber = num_parte[randomIndex];
        num_parte.splice(randomIndex, 1)     
        rand_parte = randomNumber;
        parteAleatoria(rand_parte)
    
})

function parteAleatoria(rand_parte) {

    switch (rand_parte) {
        case 1:
            parte = "ATAMA"
            break;
        case 2:
            parte = "MIMI"
            break;
        case 3:
            parte = "ME"
            break;
        case 4:
            parte = "HA"
            break;
        case 5:
            parte = "KUCHI"
            break;
        case 6:
            parte = "KUBI"
            break;
        case 7:
            parte = "KATA"
            break;
        case 8:
            parte = "EMPI"
            break;
        case 9:
            parte = "UDE"
            break;
        case 10:
            parte = "KO"
            break;
        case 11:
            parte = "ASHI"
            break;
        case 12:
            parte = "HARA"
            break;
        case 13:
            parte = "HIZA"
            break;
        case 14:
            parte = "KAKATO"
            break;
        case 15:
            parte = "YOSUKETE O KOSHI"
            break;
        case 16:
            parte = "SOKUTO"
            break;
        case 17:
            parte = "HAISOKU"
            break;
        case 18:
            parte = "TEISOKU"
            break;
        case 19:
            parte = "TE"
            break;
        case 20:
            parte = "SEIKEN"
            break;
        case 21:
            parte = "SHUTO"
            break;
        case 22:
            parte = "RIKEN"
            break;
        case 23:
            parte = "HAITO"
            break;
        case 24:
            parte = "MUNE"
            break;
        case 25:
            parte = "TANDEM"
            break;
        case 26:
            parte = "SENAKA"
            break;
        case 27:
            parte = "MIGI"
            break;
        case 28:
            parte = "HIDARI"
            break;
        default:
            parte = "Error"
            break;
    }
    
    console.log(rand_parte);
    const_resultado.innerHTML = parte;  
}

function reiniciar() {
    location.reload();
}