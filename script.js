function calcular(){
    let val1 = Number(document.getElementById("val1").value)
    let val2 = Number(document.getElementById("val2").value)

    let soma = val1 + val2
    document.getElementById("resultado").value = soma;
}