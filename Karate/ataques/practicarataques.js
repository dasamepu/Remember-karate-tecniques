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

num_ataque = createArrayOfNumbers(1, 38)

const_boton.addEventListener("click", () => {
    
        if(num_ataque.length == 0){
            console.log("se acabaron los ataques");
            const_resultado.innerHTML = "se acabaron los ataques, dale reiniciar para mostrar los ataques otra vez"
            return;
        }
        let randomIndex = aleatorio(0, num_ataque.length-1);
        let randomNumber = num_ataque[randomIndex];
        num_ataque.splice(randomIndex, 1)     
        rand_atack = randomNumber;
        tecnicaAleatoria(rand_atack)
    
})

function tecnicaAleatoria(rand_atack) { 

switch (rand_atack) {
    case 1:
        ataque = "SEIKEN"
        break;
    case 2:
        ataque = "SEIKEN CHOKU ZUKI"
        break;
    case 3:
        ataque = "OIT ZUKI"
        break;
    case 4:
        ataque = "GYAKU ZUKI"
        break;
    case 5:
        ataque = "TATE ZUKI"
        break;
    case 6:
        ataque = "MAWASHI ZUKI"
        break;
    case 7:
        ataque = "URA ZUKI"
        break;
    case 8:
        ataque = "MOROTE HEIKO ZUKI"
        break;
    case 9:
        ataque = "MOROTE YAMA ZUKI"
        break;
    case 10:
        ataque = "KAGI ZUKI"
        break;
    case 11:
        ataque = "RIKEN UCHI"
        break;
    case 12:
        ataque = "HITO SASHI IPON KEN"
        break;
    case 13:
        ataque = "NAKADATE IPON KEN"
        break;
    case 14:
        ataque = "HIRAKEN UCHI"
        break;
    case 15:
        ataque = "KENTSUI UCHI"
        break;
    case 16:
        ataque = "HAITO UCHI"
        break;
    case 17:
        ataque = "HAISHU UCHI"
        break;
    case 18:
        ataque = "KUMADE UCHI"
        break;
    case 19:
        ataque = "IPON NUKITE"
        break;
    case 20:
        ataque = "NIHON NUKITE"
        break;
    case 21:
        ataque = "YOHON NUKITE"
        break;
    case 22:
        ataque = "SHUTO UCHI"
        break;
    case 23:
        ataque = "GIAKU SHUTO UCHI"
        break;
    case 24:
        ataque = "UDE UCHI"
        break;
    case 25:
        ataque = "TEISHO UCHI"
        break;
    case 26:
        ataque = "KO UCHI"
        break;
    case 27:
        ataque = "SEIRYUTO UCHI"
        break;
    case 28:
        ataque = "EMPI UCHI"
        break;
    case 29:
        ataque = "OYAYUBI"
        break;
    case 30:
        ataque = "HERABASAMI"
        break;
    case 31:
        ataque = "YUBI BASAMI"
    break;
    case 32:
        ataque = "URAKEN UCHI"
        break;
    case 33:
        ataque = "AGET SUKI"
        break;
    case 34:
        ataque = "FURIT SUKI"
        break;
    case 35:
        ataque = "OTOSHE UCHI"
    break;
    case 36:
        ataque = "WASHIDE UCHI"
        break;
    case 37:
        ataque = "SHOTEI UCHI"
        break;
    case 38:
        ataque = "KEITO UCHI"
        break;
    default:
        ataque = "Error"
        break;
}

console.log(rand_atack);


const_resultado.innerHTML = ataque;
}

function reiniciar() {
    location.reload();
}