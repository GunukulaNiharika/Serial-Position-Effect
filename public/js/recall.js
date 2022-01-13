const animals=JSON.parse(sessionStorage.getItem("animals"));
const remember_animals = JSON.parse(sessionStorage.getItem("remember_animals"));

display_animals = [];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

for(var i=0;i< 8;){
    var animal = animals[Math.floor(Math.random()*animals.length)];
    
    if(remember_animals.includes(animal)){
        continue;
    }
    else{
        display_animals.push(animal);
        i++;
    }
}
display_animals=display_animals.concat(remember_animals);

display_animals = shuffleArray(display_animals);
console.log(display_animals);

mytablediv = document.getElementById("table");
table = document.createElement("TABLE");

table.setAttributeNS(null,"id","recallTable");
table.border=1;
var tableBody = document.createElement("TBODY");
table.appendChild(tableBody);

const n=8;
for(var i=0;i<n;i++){
 var tr= document.createElement("TR");
 tableBody.appendChild(tr);
     var td1 = document.createElement("TD");
     td1.appendChild(document.createTextNode(display_animals[i]));
     td1.setAttribute("id",`${i}`);
     td1.setAttribute("selected","false");
     var td2 = document.createElement("TD");
     td2.appendChild(document.createTextNode(display_animals[i+n]));
     td2.setAttribute("id",`${i+n}`);
     td2.setAttribute("selected","false");
    tr.appendChild(td1);
    tr.appendChild(td2);

}
mytablediv.appendChild(table);

var selected = 0;
var recall_animals=[];
document.getElementById("recallTable").addEventListener("click",(e) =>{
   
    var id = e.target.id;
    if(!isNaN(id)) {
        var isSelected=document.getElementById(id).getAttribute("selected");
        if(isSelected=="true"){
            selected--;
            document.getElementById(id).setAttribute("selected","false");
            document.getElementById(id).classList.remove("highlight")
            
            recall_animals = recall_animals.filter(item => item!==display_animals[id]);
        }else{
            if(selected<8){
            selected ++;
            document.getElementById(id).setAttribute("selected","true");
            document.getElementById(id).classList.add("highlight");
            recall_animals.push(display_animals[id]);
            }
            else{
                alert("You have selected Maximum number of animals(8).")
            }
        }
       
    }
    console.log(selected);



    console.log(recall_animals);
});

function send(){
    sessionStorage.setItem("recall_animals",JSON.stringify(recall_animals));
}