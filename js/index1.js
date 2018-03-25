/**
 * Created by lenovo on 18/1/7 007.
 */
function li1(){
    document.getElementById("main1").style.display="block";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li2(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li3(){
    document.getElementById("main3").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main4").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li4(){
    document.getElementById("main4").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main5").style.display="none";
}
function li5(){
    document.getElementById("main5").style.display="block";
    document.getElementById("main1").style.display="none";
    document.getElementById("main2").style.display="none";
    document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
}
function li11(){
    document.getElementById("main11").style.display="block";
    document.getElementById("main22").style.display="none";
    document.getElementById("main33").style.display="none";
    document.getElementById("main44").style.display="none";
    document.getElementById("main55").style.display="none";
}
function li22(){
    document.getElementById("main22").style.display="block";
    document.getElementById("main11").style.display="none";
    document.getElementById("main33").style.display="none";
    document.getElementById("main44").style.display="none";
    document.getElementById("main55").style.display="none";
}
function li33(){
    document.getElementById("main33").style.display="block";
    document.getElementById("main11").style.display="none";
    document.getElementById("main22").style.display="none";
    document.getElementById("main44").style.display="none";
    document.getElementById("main55").style.display="none";
}
function li44(){
    document.getElementById("main44").style.display="block";
    document.getElementById("main11").style.display="none";
    document.getElementById("main22").style.display="none";
    document.getElementById("main33").style.display="none";
    document.getElementById("main54").style.display="none";
}
function li55(){
    document.getElementById("main55").style.display="block";
    document.getElementById("main11").style.display="none";
    document.getElementById("main22").style.display="none";
    document.getElementById("main33").style.display="none";
    document.getElementById("main44").style.display="none";
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (!a.test(email)) {
        document.getElementById("emailSpan").innerHTML = "不符合规范"
    } else {
        document.getElementById("emailSpan").innerHTML = "正确"
    }
}
