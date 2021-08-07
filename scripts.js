document.getElementById('box2').onclick = function() {enableText()}

function enableText() {
    if (document.getElementById('box2').checked == true) {
        document.getElementById('time').disabled = false;
        document.getElementById('time2').disabled = false;
    }
    else {
        document.getElementById('time').disabled = true;
        document.getElementById('time2').disabled = true;
    }
}

document.getElementById('box').onclick = function() {enableText2()}

function enableText2() {
    if (document.getElementById('box').checked == false) {
        document.getElementById('time').disabled = false;
        document.getElementById('time2').disabled = false;
    }
    else {
        document.getElementById('time').disabled = true;
        document.getElementById('time2').disabled = true;
    }
}

function validate() {
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var airline = document.getElementById("airline");
    var clas = document.getElementById("class");
    var dTime = document.getElementById("dTime");
    var dDate = document.getElementById("dDate");
    var fName = document.getElementById("fName");
    var lName = document.getElementById("lName");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone")

    if(from.value=="From"||to.value=="To"||airline.value=="Preferred Airline"||clas.value=="Cabin Class"||
      dTime.value==""||dDate.value==""||fName.value==""||lName.value==""||email.value==""||phone.value=="") {
        alert("--No blanks value allowed. Please fill in the blank--");
        return false;
    }
    else {
        alert("--Your order has been sent. Thank you--");
        return false;
    }
}
