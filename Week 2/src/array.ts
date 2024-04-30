import { log } from "console";

// type inference
let list1 = [1, 2, 3, 4]
console.log(list1);


//square bracket
let list1_2 : number[]
list1_2 = [1, 2, 3, 4]


//generic array
let list1_3 : Array <number>
list1_3 = [1, 2, 3, 4]


// Tuple
let list2 : [string, number, number, string]
list2 = ["RED", 14, 15, "GREY"]


// Array of Object
let list3 : {color: string, index: number}[]
list3 = [
    {color: "blue", index: 1},
    {color: "green", index: 2}
]


// generic Array
let list3_1 : Array <{color: string, index: number}>
list3_1 = [
    {color: "blue", index: 1},
    {color: "green", index: 2}
]


// Array multi Dimension
let matrix : Array <Array<number>>
matrix = [
    [1, 2],
    [3, 4]
]

// Destructuring
let [a, b, c, d] : [number, number, number, string] = [81, 90, 87, "A"]




// Object => 2 cara type interence, dan inline interface
// Nested Object
interface item{
    id: string,
    productName: string,
    price: number,
    productDetail: itemDetail
}
interface itemDetail{
    year: number,
    storage: number
}

let product : item
product = {
    id: "ID-1",
    productName: "Thinkpad x1 Carbon",
    price : 20000,
    productDetail : {
        year : 2019,
        storage : 256
    }
}



// nested array of Object
interface Bio {
    street : string,
    city : string
}

interface Addres {
    id : string
    name : string
    address : Array <Bio>
}
let result : Addres = {
    id : "U-1",
    name : "Zulfan",
    address : [
        {
            street : "Brebes",
            city : "Brebes"
        },
        {
            street : "Tegal",
            city : "Tegal"
        }
    ]
}



// Nested Object off Object
interface CartItem {
    id : string
    name : string
    qty : number
}

interface Cart { 
    idCart : string
    dateOrdered : Date
    items : {
        [key : string]: CartItem
    }
}

let keyboard : Cart = {
    idCart : "C1",
    dateOrdered : new Date("2023-12-01"),
    items : {
        p1 : {
            id : "P-1",
            name : "Mechanical Keyboard",
            qty : 2
        },

        p2 : {
            id : "P-2",
            name : "USB HUB",
            qty : 1
        }
    }
}



//Obejct Destructuring
let fullName = {
    firstName : "Anak",
    lastName : "Baik"
}

let {firstName, lastName} : {firstName: string, lastName: string} = fullName
console.log(fullName);
