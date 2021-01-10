// Variáveis globais
var btnEncriptar = document.getElementById("encriptar");
var btnDecriptar = document.getElementById("decriptar");
var btnSetChave = document.getElementById("setChave");
var btnSetSenha = document.getElementById("setSenha");
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
    setSenha();
    setChave();
}

// Functions
function encriptarTxt() {
    // Para criptografar o texto escrito
}
function decriptarTxt() {
    // Para descriptografar o texto escrito
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
        let entSenha = prompt("Informe a senha atual:");
        if (entSenha == senha) {
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