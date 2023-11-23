// variable var & let
var name = "Hello Anak Baik"
console.log(name);

let hobby = "GAME!!!"
console.log(hobby);



// looping for
for (let i = 0; i<5; i++){
    console.log(i);
}



// LOOPING WHILE
let counter = 0
while (counter < 10){
    console.log(counter)
    counter ++
}



// Function
function sayHello (name){
    switch(name){
        case "Zulfan":
            return "Hi Zulfan";
        case "Muhith":
            return "Hi Muhith";
        case "Aqna":
            return "Hi Aqna"
    }
}
console.log(sayHello("Zulfan"));
console.log(sayHello("Muhith"));
console.log(sayHello("Aqna"));



// if else
const exampValue = 90
if (exampValue > 80){
    console.info("good");
}else if(exampValue > 60){
    console.info("Not Bad")
}else{
    console.info("Try Again")
}