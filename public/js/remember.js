const animals=JSON.parse(sessionStorage.getItem("animals"));
var remember_animals = [];

for(var i=0;i<8;){
  var animal = animals[Math.floor(Math.random()*animals.length)];
  if(remember_animals.includes(animal)){
    continue;
  }else{
    remember_animals.push(animal);
    i++;
  }
   
}

var mytablediv = document.getElementById("table");
var table = document.createElement("TABLE");
table.setAttributeNS(null,"id","rememberTable");
table.border=1;
var tableBody = document.createElement("TBODY");
table.appendChild(tableBody);

for(var i=0;i<8;i++){
    var tr = document.createElement("TR");
    tableBody.appendChild(tr);
    var td = document.createElement("TD");
    td.appendChild(document.createTextNode(remember_animals[i]));
    tr.appendChild(td);
}
mytablediv.appendChild(table);


var timeleft = 8;
var Timer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(Timer);
    document.getElementById("showTime").innerHTML = "TimeUp";
    send();
    window.location.href = "/recall";
  } else {
    document.getElementById("showTime").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

function send(){
  sessionStorage.setItem("remember_animals",JSON.stringify(remember_animals));
}