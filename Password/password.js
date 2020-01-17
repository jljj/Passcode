// == compares ONLY the values
// ===compare the BOTH the values and the data type
// != not equal to value 
// !==not equal to value and the data type

// A String is a list of characters
// Think of them as words you type

// a number is a interger
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;

 
function checkCode() {
    a = document.querySelector(".a").value;
    b = document.querySelector(".b").value;
    c = document.querySelector(".c").value;
    d = document.querySelector(".d").value;
    
    if (a != 0 && b != 0 && c != 0 && d != 0) {
        document.querySelector(".word-display").innerHTML = "Error, wrong password!";
    
    } else {
        document.querySelector(".word-display").innerHTML = "Access Confirm!";
    }
    
};

function checkWord() {
    e = document.querySelector(".e").value;
    f = document.querySelector(".f").value;
    g = document.querySelector(".g").value;
    h = document.querySelector(".h").value;
    
    if (e == "hello" && f == "hello" && g == "hello" && h == "hello") {
        document.querySelector(".word-display-two").innerHTML = " RIGHT WORD!";
    
    } else {
        document.querySelector(".word-display-two").innerHTML = "<br>ERROR WRONG WORD(S)!";
    }
    
};