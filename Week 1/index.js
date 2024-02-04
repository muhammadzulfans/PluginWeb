// Variable JavaScript (var, let, & const)

// Variable var
var nama = "Hello Anak Baik"
console.log(nama);

// Variable let
let hobby = "GAME!!!"
console.log(hobby);

// Variable const
const phi = "3.14"
//phi = "3.14"     //Assignment to constant variable

console.log(phi);



// looping for
for (let i = 0; i<5; i++){
    console.log(i);
}


// looping While
let counter = 0
while (counter < 10){
    console.log(counter)
    counter ++
}



// Pengkodisian Switch Case & If Else

// Pengkondisian SwitchCase (Function)
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



// Pengkondisian If Else
const exampValue = 90
if (exampValue > 80){
    console.info("good");
}else if(exampValue > 60){
    console.info("Not Bad")
}else{
    console.info("Try Again")
}