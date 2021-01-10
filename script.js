// Variáveis globais
var btnEncriptar = document.getElementById("encriptar");
var btnDecriptar = document.getElementById("decriptar");
var btnSetChave = document.getElementById("setChave");
var btnSetSenha = document.getElementById("setSenha");
var campoEncriptar = document.getElementById("txtEncriptar");
var campoDecriptar = document.getElementById("txtDecriptar");
var senha = "";
var chave = "";
// Matriz de criptografia
var vigenere = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A"],
    ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B"],
    ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C"],
    ["E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D"],
    ["F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E"],
    ["G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F"],
    ["H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G"],
    ["I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H"],
    ["J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I"],
    ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
    ["L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
    ["M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
    ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    ["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
    ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
    ["Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"],
    ["R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q"],
    ["S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
    ["T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S"],
    ["U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
    ["V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"],
    ["W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V"],
    ["X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W"],
    ["Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"],
    ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"]
];

btnEncriptar.addEventListener('click', encriptarTxt);
btnDecriptar.addEventListener('click', decriptarTxt);
btnSetChave.addEventListener('click', setChave);
btnSetSenha.addEventListener('click', setSenha);

// Requisitos iniciais do software
window.onload = function () {
    //setSenha();
    //setChave();
}

// Functions
function encriptarTxt() {
    // Para criptografar o texto escrito
    let lc = 0;
    let iLetraTxt = 0;
    let iLetraChave = 0;
    let txtEncriptar = campoEncriptar.value.toUpperCase();
    let txtDecriptar = "";
    alert(txtEncriptar.replace(/ /g,""));
    for (let l of txtEncriptar) {
        if (l == " ") {
            txtDecriptar += " ";
        } else {
            iLetraTxt = retornaIndice(l);
            iLetraChave = retornaIndice(chave[lc]);
            txtDecriptar += vigenere[iLetraTxt][iLetraChave];
            if (lc == chave.length - 1) {
                lc = 0;
            } else {
                lc++;
            }
        }
    }
    campoDecriptar.value = txtDecriptar;
}
function decriptarTxt() {
    // Para descriptografar o texto escrito
}
function retornaIndice(letra) {
    // Retorna o índice da letra de acordo com o alfabeto
    if (letra == "A") {
        return 0;
    } else if (letra == "B") {
        return 1;
    } else if (letra == "C") {
        return 2;
    } else if (letra == "D") {
        return 3;
    } else if (letra == "E") {
        return 4;
    } else if (letra == "F") {
        return 5;
    } else if (letra == "G") {
        return 6;
    } else if (letra == "H") {
        return 7;
    } else if (letra == "I") {
        return 8;
    } else if (letra == "J") {
        return 9;
    } else if (letra == "K") {
        return 10;
    } else if (letra == "L") {
        return 11;
    } else if (letra == "M") {
        return 12;
    } else if (letra == "N") {
        return 13;
    } else if (letra == "O") {
        return 14;
    } else if (letra == "P") {
        return 15;
    } else if (letra == "Q") {
        return 16;
    } else if (letra == "R") {
        return 17;
    } else if (letra == "S") {
        return 18;
    } else if (letra == "T") {
        return 19;
    } else if (letra == "U") {
        return 20;
    } else if (letra == "V") {
        return 21;
    } else if (letra == "W") {
        return 22;
    } else if (letra == "X") {
        return 23;
    } else if (letra == "Y") {
        return 24;
    } else if (letra == "Z") {
        return 25;
    }
}
function setChave() {
    // Para mudar chave da criptografia
    if (chave == "") {
        // Configurando a chave no caso de primeiro acesso
        chave = prompt("Crie uma chave válida.\n*Pode ser qualquer palavra ou frase\n*Não pode conter números\n*Não pode conter caracteres especiais\n*Digite as palavras sem acentos\nInsira a chave:");
        alert("Nova chave definida.");
    } else {
        // Configurando a chave no caso de não ser primeiro acesso
        let reqSenha = prompt("Para alterar a chave é necessária autenticação.\nDigite sua senha:");
        if (reqSenha != senha) {
            alert("Senha incorreta!\nVocê não pode alterar a chave.");
        } else {
            chave = prompt("Crie uma nova chave.\n*Pode ser qualquer palavra ou frase\n*Não pode conter números\n*Não pode conter caracteres especiais\n*Digite as palavras sem acentos\nInsira a nova chave:");
            alert("Nova chave definida.");
        }
    }
    chave = chave.toUpperCase();
}
function setSenha() {
    // Configura a senha de usuário
    let valido = false;
    if (senha == "") {
        // Configurando senha no caso de primeiro acesso
        while (!valido) {
            let s1 = prompt("Crie uma senha:");
            let s2 = prompt("Confirme a senha:");
            if (s1 == s2) {
                senha = s1;
                alert("Senha alterada com sucesso.");
                valido = true;
            } else {
                alert("Senhas não coincidem. Tente novamente.")
            }
        }
    } else {
        // Configurando a senha no caso de não ser o primeiro acesso
        let reqSenha = prompt("Informe a senha atual:");
        if (reqSenha == senha) {
            while (!valido) {
                let s1 = prompt("Crie uma senha:");
                let s2 = prompt("Confirme a senha:");
                if (s1 == s2) {
                    senha = s1;
                    alert("Senha alterada com sucesso.");
                    valido = true;
                } else {
                    alert("Senhas não coincidem. Tente novamente.")
                }
            }
        } else {
            alert("Senha incorreta.\nVocê não pode alterar a senha.");
        }
    }
}