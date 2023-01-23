
function chk() {
    var p1 = document.getElementsByClassName("input_phn")[0].value;
    var str = p1.toString();
    document.getElementsByClassName("input_phn")[0].value = str.slice(0, 17);
}
function chk1() {
    var p1 = document.getElementsByClassName("v_3m1")[0].value;
    var str = p1.toString();
    document.getElementsByClassName("v_3m1")[0].value = str.slice(0, 4);
}
function chk2() {
    var p1 = document.getElementsByClassName("v_3m2")[0].value;
    var str = p1.toString();
    document.getElementsByClassName("v_3m2")[0].value = str.slice(0, 4);
}
function chk3() {
    var p1 = document.getElementsByClassName("v_3m3")[0].value;
    var str = p1.toString();
    document.getElementsByClassName("v_3m3")[0].value = str.slice(0, 4);
}
function chk4() {
    var p1 = document.getElementsByClassName("weight_value")[0].value;
    var str = p1.toString();
    document.getElementsByClassName("weight_value")[0].value = str.slice(0, 4);
}
