function addition (num1, num2){
    return(num1+num2);
}

function subtraction (num1, num2){
    return(num1-num2);
}

function multiplication (num1, num2){
    return(num1*num2);
}


document.getElementById("btnadd").addEventListener("click", function(){
    document.getElementById("answer").textContent = addition(Number(document.getElementById("firstnum").value), Number(document.getElementById("secondnum").value));
})

document.getElementById("btnsub").addEventListener("click", function(){
    document.getElementById("answer").textContent = subtraction(Number(document.getElementById("firstnum2").value), Number(document.getElementById("secondnum2").value));
})

document.getElementById("btnmult").addEventListener("click", function(){
    document.getElementById("answer").textContent = multiplication(Number(document.getElementById("firstnum3").value), Number(document.getElementById("secondnum3").value));
})




