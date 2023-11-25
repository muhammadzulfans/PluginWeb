"use strict";
// type inference
var list1 = [1, 2, 3, 4];
console.log(list1);
//square bracket
var list1_2;
list1_2 = [1, 2, 3, 4];
//generic array
var list1_3;
list1_3 = [1, 2, 3, 4];
// Tuple
var list2;
list2 = ["RED", 14, 15, "GREY"];
// Array of Object
var list3;
list3 = [
    { color: "blue", index: 1 },
    { color: "green", index: 2 }
];
// generic Array
var list3_1;
list3_1 = [
    { color: "blue", index: 1 },
    { color: "green", index: 2 }
];
// Array multi Dimension
var matrix;
matrix = [
    [1, 2],
    [3, 4]
];
// Destructuring
var _a = [81, 90, 87, "A"], a = _a[0], b = _a[1], c = _a[2], d = _a[3];
var product;
product = {
    id: "ID-1",
    productName: "Thinkpad x1 Carbon",
    price: 20000,
    productDetail: {
        year: 2019,
        storage: 256
    }
};
var result = {
    id: "U-1",
    name: "Zulfan",
    address: [
        {
            street: "Brebes",
            city: "Brebes"
        },
        {
            street: "Tegal",
            city: "Tegal"
        }
    ]
};
var keyboard = {
    idCart: "C1",
    dateOrdered: new Date("2023-12-01"),
    items: {
        p1: {
            id: "P-1",
            name: "Mechanical Keyboard",
            qty: 2
        },
        p2: {
            id: "P-2",
            name: "USB HUB",
            qty: 1
        }
    }
};
//Obejct Destructuring
var fullName = {
    firstName: "Anak",
    lastName: "Baik"
};
var firstName = fullName.firstName, lastName = fullName.lastName;
console.log(fullName);

