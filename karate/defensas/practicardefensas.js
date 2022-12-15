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

num_defensa = createArrayOfNumbers(1, 31)

const_boton.addEventListener("click", () => {
    
        if(num_defensa.length == 0){
            console.log("se acabaron las defensas");
            const_resultado.innerHTML = "se acabaron las defensas, dale reiniciar para mostrar las defensas otra vez"
            return;
        }
        let randomIndex = aleatorio(0, num_defensa.length-1);
        let randomNumber = num_defensa[randomIndex];
        num_defensa.splice(randomIndex, 1)     
        rand_defense = randomNumber;
        tecnicaAleatoria(rand_defense)
    
})

function tecnicaAleatoria(rand_defense) {

    switch (rand_defense) {
        case 1:
            defensa = "YODAN AGE UKE"
            break;
        case 2:
            defensa = "YOKO UKE"
            break;
        case 3:
            defensa = "YOKO UCHI UKE"
            break;
        case 4:
            defensa = "GEDAN BARAY"
            break;
        case 5:
            defensa = "SHUTO UKE"
            break;
        case 6:
            defensa = "JUJI SHOTEI UKE"
            break;
        case 7:
            defensa = "JUJI UKE"
            break;
        case 8:
            defensa = "MOROTE KAKIWAKE UKE"
            break;
        case 9:
            defensa = "MOROTE YOKO UKE"
            break;
        case 10:
            defensa = "ZUKI UKE"
            break;
        case 11:
            defensa = "TEISHO UKE"
            break;
        case 12:
            defensa = "KEITO UKE"
            break;
        case 13:
            defensa = "KO UKE"
            break;
        case 14:
            defensa = "HAISHU UKE"
            break;
        case 15:
            defensa = "KENTSUI UKE"
            break;
        case 16:
            defensa = "KAKE UKE"
            break;
        case 17:
            defensa = "SUKAMI UKE"
            break;
        case 18:
            defensa = "NAGASHI UKE"
            break;
        case 19:
            defensa = "OSAE UKE"
            break;
        case 20:
            defensa = "SUKUI UKE"
            break;
        case 21:
            defensa = "WANKA UKE"
            break;
        case 22:
            defensa = "UDE UKE"
            break;
        case 23:
            defensa = "TEKUBI KAKE UKE"
            break;
        case 24:
            defensa = "JIJI UKE"
            break;
        case 25:
            defensa = "JIJI SASAE UKE"
            break;
        case 26:
            defensa = "KURI UKE"
            break;
        case 27:
            defensa = "SEIRYU TO UKE"
            break;
        case 28:
            defensa = "AWASE UKE"
            break;
        case 29:
            defensa = "KAKETE UKE"
            break;
        case 30:
            defensa = "OTOSHE UDE UKE"
            break;
        case 31:
            defensa = "HARAY UKE"
        break;
        default:
            defensa = "Error"
            break;
    }
    
    console.log(rand_defense);
    const_resultado.innerHTML = defensa;  
}

function reiniciar() {
    location.reload();
}