

console.log(dados)

function relogio()
{ setTimeout("showtime();",1000);
    callerdate.setTime(callerdate.getTime()+1000);
    var hora = String(callerdate.getHours());
    var min = String(callerdate.getMinutes());
    var seg = String(callerdate.getSeconds());


}

let relog = {
    tempReal : relogio(),

}

console.log(relog());

