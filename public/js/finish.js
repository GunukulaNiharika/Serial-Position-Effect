var remember_animals = JSON.parse(sessionStorage.getItem("remember_animals"));
var recall_animals = JSON.parse(sessionStorage.getItem("recall_animals"));

var correct=[];
 outside=0; inside = 0;

remember_animals.forEach((animal,index) => {
    if(recall_animals.includes(animal)){
        correct.push(animal);
        if(index>=3 && index <6){
            inside +=1;
        }
        else{
            outside +=1;
        }
    }
});

console.log(inside);
console.log(outside);

var message="";
if (inside < outside) {
    message = 
       " You have recalled more elements in the boundary of the array than in the interior. So, the serial position has been effective."
  
  } else if (outside !== inside) {
    message = 
       " You have recalled more elements in the interior of the array than in the boundary. So, the serial position has not been effective."
 
  }
  if (remember_animals.every((animal) => recall_animals.includes(animal))) {
    message =
        "You have recalled all the animals and your memory is very good. So, the serial position efect does not apply."
  }
  if (recall_animals.length > remember_animals.length) {
    message = 
        "You have selected more than 8 elements. So, the serial position efect does not apply. Please retry the simulation"
 
  }
  if (
    recall_animals.length === 0 ||
    !remember_animals.some((animal) => recall_animals.includes(animal))
  ) {
    message = "You have not recalled any animal correctly. Do you want to retry?"
  }

  document.getElementById("message").innerHTML=message;
  document.getElementById("percentage").innerHTML=`Your recall Precentage is: ${100 * correct.length/remember_animals.length }%`
  var mytablediv = document.getElementById("table");
  var table = document.createElement("TABLE");
  table.setAttributeNS(null,"id","finalTable");
  table.border=1;
  tableBody = document.createElement("TBODY");
  table.appendChild(tableBody);

  for(var i=0;i<remember_animals.length;i++){
      var tr = document.createElement("TR");
      var td = document.createElement("TD");
      if(correct.includes(remember_animals[i])){
          td.classList.add("highlight");
      }
      td.appendChild(document.createTextNode(remember_animals[i]));
      tr.appendChild(td);
      tableBody.appendChild(tr);
  }
  mytablediv.appendChild(table);
  

