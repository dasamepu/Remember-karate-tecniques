let defensa = ""

let let_boton = document.getElementById("id_boton")
let_boton.addEventListener("click", resultadoAleatorio)

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function resultadoAleatorio() {
    num_defensa = aleatorio(1, 31)

switch (num_defensa) {
    case 1:
        defensa = "SEIKEN"
        break;
    case 2:
        defensa = "SEIKEN CHOKU ZUKI"
        break;
    case 3:
        defensa = "OIT ZUKI"
        break;
    case 4:
        defensa = "GYAKU ZUKI"
        break;
    case 5:
        defensa = "TATE ZUKI"
        break;
    case 6:
        defensa = "MAWASHI ZUKI"
        break;
    case 7:
        defensa = "URA ZUKI"
        break;
    case 8:
        defensa = "MOROTE HEIKO ZUKI"
        break;
    case 9:
        defensa = "MOROTE YAMA ZUKI"
        break;
    case 10:
        defensa = "KAGI ZUKI"
        break;
    case 11:
        defensa = "RIKEN UCHI"
        break;
    case 12:
        defensa = "HITO SASHI IPON KEN"
        break;
    case 13:
        defensa = "NAKADATE IPON KEN"
        break;
    case 14:
        defensa = "HIRAKEN UCHI"
        break;
    case 15:
        defensa = "KENTSUI UCHI"
        break;
    case 16:
        defensa = "HAITO UCHI"
        break;
    case 17:
        defensa = "HAISHU UCHI"
        break;
    case 18:
        defensa = "KUMADE UCHI"
        break;
    case 19:
        defensa = "IPON NUKITE"
        break;
    case 20:
        defensa = "NIHON NUKITE"
        break;
    case 21:
        defensa = "YOHON NUKITE"
        break;
    case 22:
        defensa = "SHUTO UCHI"
        break;
    case 23:
        defensa = "GIAKU SHUTO UCHI"
        break;
    case 24:
        defensa = "UDE UCHI"
        break;
    case 25:
        defensa = "TEISHO UCHI"
        break;
    case 26:
        defensa = "KO UCHI"
        break;
    case 27:
        defensa = "SEIRYUTO UCHI"
        break;
    case 28:
        defensa = "EMPI UCHI"
        break;
    case 29:
        defensa = "OYAYUBI"
        break;
    case 30:
        defensa = "HERABASAMI"
        break;
    case 31:
        defensa = "YUBI BASAMI"
    break;
    case 32:
        defensa = "URAKEN UCHI"
        break;
    case 33:
        defensa = "AGET SUKI"
        break;
    case 34:
        defensa = "FURIT SUKI"
        break;
    case 35:
        defensa = "OTOSHE UCHI"
    break;
    case 36:
        defensa = "WASHIDE UCHI"
        break;
    case 37:
        defensa = "SHOTEI UCHI"
        break;
    case 38:
        defensa = "KEITO UCHI"
        break;
    default:
        defensa = "Error"
        break;
}

console.log(num_defensa);

let let_resultado = document.getElementById("id_resultado")
let_resultado.innerHTML = defensa;
}

