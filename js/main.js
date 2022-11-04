const row = ["rad 1", "rad 2", "rad 3", "rad 4", " rad 5"];
for (let a = 0; a < row.length; a++) {
    const el = document.createElement("h1");
    document.body.appendChild(el);
    el.innerText = row[a];
    el.style.fontSize = a + "7px";
    el.style.textAlign = "center";
    el.style.backgroundColor = `hsl(${100 + a * 20}, 100%, 50%)`;
    el.style.marginTop = a + "5px"
}


const div = document.createElement('div');
document.body.appendChild(div);
div.style.border = "solid 1px black"
div.style.display = "flex"
div.style.justifyContent ="space-around"



const list1 = document.createElement("ol");
list1.style.listStyleType = "none";
list1.style.textAlign = "left";
list1.style.padding = "15px";
div.appendChild(list1);
list1.style.backgroundColor = "purple";

for (let i = 0; i < 10; i++) {
    const liElement = document.createElement("li");
    liElement.innerText= i;
    list1.appendChild(liElement);
    liElement.style.border = "1px solid black";   
    liElement.style.width = "100px";
    liElement.style.border= "none"
    if (i%2 == 1){
        liElement.style.backgroundColor = "white"
        liElement.style.color = "black"
    }
    else if(i ==4){
        liElement.style.backgroundColor ="transparent"
        liElement.style.color = "white"
    }
    else if(i % 2 ==0){
        liElement.style.backgroundColor ="black"
        liElement.style.color ="white"
    }
}
                // .    
const list2 = document.createElement("ol");
div.appendChild(list2);
list2.style.listStyleType = "none";
list2.style.textAlign = "center";
list2.style.padding = "15px";
list2.style.backgroundColor = "purple"
for (let j = 9; j>=0; j--) {
    const liElement = document.createElement("li");
    list2.appendChild(liElement);
    liElement.innerText= j;
    liElement.style.width = "100px";
    liElement.style.border = "none"
    if(j % 2==1){
        liElement.style.backgroundColor ="white"
        liElement.style.color= "black"
    }
    else if (j == 8){
        liElement.style.backgroundColor ="transparent"
        liElement.style.color = "white"
    }
    else if (j % 2 ==0){
        liElement.style.backgroundColor ="black"
        liElement.style.color = "white"
    }
}
                // .
const list3 = document.createElement("ol");
div.appendChild(list3);
const number = ["one","two","three","four","five","six","seven","eight","nine","ten"]
list3.style.listStyleType = "none";
list3.style.textAlign = "right";
list3.style.padding = "15px";
list3.style.backgroundColor = "purple"
for (let a = 0; a < 10; a++) {
    const liElement = document.createElement("li");
    list3.appendChild(liElement);
    liElement.style.width = "100px";
    liElement.innerText= number[a];
    if(a == 5){
        liElement.style.backgroundColor = "transparent"
        liElement.style.color= "black"
    }
    else if (a % 2 == 1){
        liElement.style.backgroundColor ="white"
        liElement.style.color ="black"
    }
    else if (a % 2 ==0){
        liElement.style.backgroundColor ="black"
        liElement.style.color= "white"
    }
    
}