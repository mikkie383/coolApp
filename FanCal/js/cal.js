function calAdd(){
    var add1 = parseInt(document.getElementById("add1").value);
    var add2 = parseInt(document.getElementById("add2").value);

    document.getElementById("addtion").innerHTML = add1 + add2;
}

function calSub(){
    var sub1 = parseInt(document.getElementById("sub1").value);
    var sub2 = parseInt(document.getElementById("sub2").value);

    document.getElementById("subtraction").innerHTML = sub1 - sub2;
}

function calMul(){
    var mul1 = parseInt(document.getElementById("mul1").value);
    var mul2 = parseInt(document.getElementById("mul2").value);

    document.getElementById("multiplication").innerHTML = mul1 * mul2;
}

function calDiv(){
    var div1 = parseInt(document.getElementById("div1").value);
    var div2 = parseInt(document.getElementById("div2").value);

    document.getElementById("division").innerHTML = div1 / div2;
}


var person = prompt("Please enter your name:");
alert("Hi " + person + ", welcome to Fancy Calculator!!!");