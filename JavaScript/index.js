// const { use } = require("react");

console.log('==========Welcome to Javascript Tutorials==========')
//  variables => To store the data and can be used throughout programme whenever needed
// it's a container used to store the data
// Declearing a variable=> var , let , const
// var- function scoped, can be access anywhere
// Hoisting

// var first_name = 'Sachin'; //Decleration and Initialization
// console.log(first_name);
// Re-Initialization is Possible
// first_name="Priya" 
// Re-Decleration is Possible
// var first_name="Kumar"
// console.log(first_name);

// let 
//Decleration and Initialization
// let last_name="Sagar" 
// console.log(last_name);
// Re-Initialization is Possible
// last_name='K'
// console.log(last_name);
// Re-Decleration is not Possible
// let last_name=''

// const -> Once Decleration and Initialization done
// -> we can not able to modify
// const pan_number='JVKBKB638'
// console.log(pan_number);
// pan_number='JJ872493BKK'

// JavaScript DataTypes
// javaScript is a Dynamicaly typed language
// Premitive Data Types(immutable)
// 1. String
// let college_name = "BBC"
// console.log(college_name);
// console.log(typeof (college_name));
// 2. Number
// let distance = 5.7
// console.log(distance);
// console.log(typeof (distance));
// 3. Boolean
// let isOkay = true
// console.log(isOkay);
// console.log(typeof (isOkay));
// 4. Undefined
// let marks;
// console.log(marks);
// console.log(typeof (marks));
// 5. Null
// let product = null
// console.log(product);
// console.log(typeof (product));
// 6. Symbol
// 7. BigInt

// Non-Premitive(Reference) Data Types
// Complex data structures, mutable
// 1. Object
// const Employee={
//     Emp_id:123,
//     Emp_Name:'Akshay'
// }
// console.log(Employee);
// console.log(typeof(Employee));
// 2. Array
// const college_names=['A','B', 'C', 'D']
// console.log(college_names);
// 3. Functions
// function JavaScript(){
//     return 'This is JavaScript Functions...'
// }
// console.log(JavaScript());

// Opeartors
// Operators are special symbols or keywords that perform operation on ome or more value
// Assignment Operators -(=, +=, -=, *=, /=, **=)
// ================================
//  Assign a value to a variable
// let num1=10;
// let num2=5;
// console.log(num1+num2);
// num1 = num1 - 5
// num1 -= 5;
// console.log(num1);

// Calculate Total Price With Discounts
// let basePrice = 1000;
// const discount_Per = 0.10;
// console.log(basePrice, discount_Per);
// let final_price = basePrice;
// console.log(final_price);
// final_price -= (basePrice * discount_Per) //Apply discount
// console.log(final_price);
// console.log(`Price After 10% discount: ${final_price}`);
// final_price *= 1.05;// adding Tax
// console.log(`Price After Tax along with 10% discount: ${final_price}`);

// Arithmetic Operators- +, -, *, /, %, **, ++, --
// ==================================
// Perform Methematical operations
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(3 ** 4);
// num1 + 1
// num1++
// console.log(num1);
// num1 - 1
// num1--
// console.log(num1);


// Logical Operators => AND(&&, *), OR(||, +), NOT(^ !)
// ===================================
// AND True=1 False=0
// console.log(0 && 0);
// console.log(1 && 1);
// const username = "Sachin"
// const password = "admin"
// if (username === 'Sachin' && password === 'admin') {
//     console.log('Login Successful');
// } else {
//     console.log('Invalid Username and Passward');
// }

// OR True=1 False=0
// console.log(1 || 0);
// let isAdmin = false;
// let isPrimeUser = true;

// if (isAdmin || isPrimeUser) {
//     console.log("Special features unlocked");
// } else {
//     console.log("features available");
// }

// NOT 
// console.log(!true);
// console.log(!false);
// const isLoggedIn = true;
// if (!isLoggedIn) {
//     console.log('Please log in to continue');
// }

// Comparison Operators(==, !=, ===, !==, <, >, <=, >=)
// ===================================
// compare two values and return boolean values
// let n1 = 10;
// let n2 = 10;
// console.log(n1 >= n2);

// Checking User Permissions
// const userRole = 'admin';
// const requiredRole = 'admin';
// const minAccesslevel = 8;
// let currentAccessLevel = 7;

// if (userRole === requiredRole) {
//     console.log(`User has Required Role`);
// } else {
//     console.log(`User does not have required role`);
// }

// if (currentAccessLevel >= minAccesslevel) {
//     console.log('User Has sufficient Access Level');
// } else {
//     console.log('Access Denied, insufficient Level');
// }

// Bitwise Opertors
// ===================================
// Ternary Operators


// Control Flow Statements
// ==============================

// Control Statements
// ===========================
// Allow your code to execute different block of code based on weather condition is true or false
// if , else, elseif
// if (condition1) {

// }else if(condition2){

// }else if(condition3){

// }else{

// }

// User role-Based Access Controll
// ====================================
// const UserRole = 'editor';
// if (UserRole === 'admin') {
//     console.log(`Welcome Administrator full Access Granted`);
// } else if (UserRole === 'editor') {
//     console.log(`Welcome editor, You can manage content`);
// } else {
//     console.log(`Welcome,Guest Limited Access`);
// }

// Form Input Validation
// ====================================
// const emailInput = 'user@gmail.com'
// const passwordInput = 'pass1234'

// if (emailInput.length < 5 || !emailInput.includes('@')) {
//     console.error('Error, Invalid Email format')
// } else if (passwordInput.length < 8) {
//     console.error('Error. Password must be at least 8 charecters long');
// } else {
//     console.log('Form inputs are valid, proceed with submission');
// }

// Switch Statements
// 
// sunday -> Eating Non veg
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// Handling API Response status code
// const statusCode = 400;

// switch (statusCode) {
//     case 200:
//     case 201:
//         console.log(`Success, Request Processed Successfully ${statusCode}`);
//         break;
//     case 400:
//         console.log(`Client Error: Bad Request, check input data ${statusCode}`);
//         break;
//     case 401:
//         console.log(`Authentication Error, Unauthorized access`);
//         break;
//     case 403:
//         console.log(`Forbidden: The client does not have permission to access the resource.`);
//         break;
//     case 404:
//         console.log(`Not Found: The requested resource could not be found`);
//         break;
//     case 503:
//         console.log(`Server error, Something went wrong the server`);
//         break;
//     default:
//         console.log(`Unhandled status code: ${statusCode}`);
// }

// Control flow- Loop
// Loops allow you to execute a block of code multiple times without writing it again and again
// Print N Natural Number upto 100 => 1,2,3,4,5...100
// Automate repetitive task
// Work Arrays, objects, and user input

// For Loop => Runs code a fixed number of times
//  1          2           4
// for(initial; condition; update(inc/dec)){
//     logics  3
// }
// for (let i = 0; i <= 5; i++) {
//     console.log("Number ");
// }
// console.log("Comes out of the Loop");
// // 
// let Products = ['shoes', 'watch', 'Bag', 'Bike', 'Mobiles']
// for (let i = 0; i < Products.length; i++) {
//     console.log('Product List', Products[i]);
// }
// console.log(Products);

// i = 0, 0 <= 5 (T), 0, i++= i=i+1 =0+1=1
// i=1, 1<=5(T),1,i++=1+1=2
// i=2, 2<=5(T),2, 2+1=3
// i=3, 3<=5(T),3, 3+1=4
// i=4, 4<=5(T),4, 4+1=5
// i=5, 5<=5(T),5, 5+1=6
// i=6, 6<=5(F)- Comes out of the Loop

// While Loop => Repeats as long as the condition is True
// while (condition) {
//     logics
// }
// let count = 1;
// while (count <= 3) {
//     console.log('Try', count);
//     count++;
// }

// let isConnected = false;
// let attempt = 1;

// while (!isConnected && attempt <= 3) {
//     console.log(`Attempt ${attempt}: Connecting to Server...`);

//     if (attempt === 3) {
//         isConnected = true;
//         console.log('✅ Connected successfully');
//     } else {
//         console.log('❌ Connection Failed, Retrying...');
//     }

//     attempt++;
// }

// Do While Loop => Runs the code at least once, tghen repeats while condition is true 
// do {

// } while (condition);
// let co_unt = 1;
// do {
//     console.log(co_unt);
//     co_unt++;
// } while (co_unt <= 3)
// ==============================
// let correctPassword='admin1234';
// let enteredPassword;
// let attempts=0;

// do{
//     attempts++;
//     if(attempt <= 3){
//         enteredPassword ='wrongpass'
//     }else{
//         enteredPassword='admin1234'
//     }
//     console.log(`Attempt ${attempt}: checking Password..`);
// } while(enteredPassword !== correctPassword && attempts < 5)

// if(enteredPassword === correctPassword){
//     console.log('✅ Access Granted')
// }else{
//     console.log('❌ Access denied')
// }

// For..of Loop => Loop over value of an iterable (Arrays and String)

// for (const element of object) {

// }
// let web_development=['HTML','CSS','JavaScript', 'React js','Mongo DB']
// console.log(web_development);
// for (let sub of web_development){
//     console.log(sub);
// }

// let emails=['sk@gmail.com','p@gmail.com','omkar@yahoo.com']
// for (let email of emails){
//     console.log(email);
// }

// For..in Loop => Loops over the key.prop of an object

// for (const key in object) {

// }

// let user={
//     username:'Sagar',
//     email:'sagar@gmail.com',
//     city:'Bangalore'
// }
// for(let key in user){
//     console.log(key, "=>", user[key]);
// }

// console.log(user.username);
// console.log(user['email']);



//Functions in JavaScript

// A function in JavaScript is a reusable block of code that performs a specific task. 
// You can call (or invoke) a function whenever you want to execute that task

// function functionName(parameters) {
//     // code to execute
//     return result;
// }

//  Types of Functions in JavaScript

// 1. Named Function => Declared with a name using function keyword

// A named function has a unique identifier (name) and is declared using the function keyword. 
// It can be called anywhere in the code (if declared in the appropriate scope).
// function functionName(parameters) {
//     // code block
// }
// function Student(f_name){
//     return `Hello ${f_name}`
// }
// console.log(Student('Harini'));


// 2. Anonymous Function =>	Function without a name, often assigned to a variable
// An anonymous function is a function without a name. It's often assigned to a variable or used as an argument to another function
// const variable = function(parameters) {
//     // code block
// };

// const Employee= function(Emp_data){
//     return `${Emp_data}`
// }
// console.log(Employee('Sagar'));

// Example 1: Sort Users by Age
// ============================================
// const sortByAge = function(users) {
//     return users.sort((a,b)=> a.age - b.age)
// };
// const users = [{name: 'Amit', age: 28}, {name: 'Sara', age: 20},{name:'Harini', age:22}];

// console.log(sortByAge(users));

// console.log(users);

// const users_data = [{name: 'Amit', age: 28}, {name: 'Sara', age: 20},{name:'Harini', age:22}];
// console.log(users_data);

// =============================================
// Example 2: Filter Completed Tasks

// const getCompletedTasks = function(tasks) {
//     return tasks.filter(task => task.completed);
// };

// const tasks = [
//     { task: "Login", completed: false },
//     { task: "Register", completed: true }
// ];

// console.log(getCompletedTasks(tasks));


// Example 3: Check Product Stock
// ===========================================
// const isAvailable = function (products, name) {
//     return products.some(p => p.name === name && p.stock > 0);

// };
// const products = [{ name: "Mobile", stock: 0 }, { name: "Tablet", stock: 5 }];
// console.log(isAvailable(products, "Mobile"));


// 3. Arrow Function	Concise syntax using => (introduced in ES6)
// An arrow function is a shorter syntax for writing function expressions. It is often used for simple tasks and doesn't bind its own this.
// const functionName = (params) => {
//     // code block
// };

// Example 1: Calculate Discounted Price
// const getDiscount = (price, discount) => price - (price * discount / 100);
// console.log(getDiscount(1000, 20));

// Example 2: Count Words in Text
// const wordCount = text => text.trim().split(/\s+/).length;
// console.log(wordCount("Learn JavaScript in real projects"));

// const course_data='Web Development'
// console.log(course_data.trim().split(/\s+/).length);

// Example 3: Convert Celsius to Fahrenheit
// const cToF = c => (c * 9/5) + 32;
// console.log(cToF(30));

// 4. Immediately Invoked Function Expression (IIFE)	Runs as soon as it is defined

// 5. Callback Function => 	Passed as an argument to another function
// A callback function is passed as an argument to another function and is executed after the completion of that function.
// function task(callback) {
//     callback();
// }

// Example 1: After Payment Confirmation
// =======================================
// function processPayment(amount, callback) {
//     console.log("Processing ₹" + amount);
//     callback("TXN123");
// }

// processPayment(1000, (receipt) => {
//     console.log("Payment done, Receipt:", receipt);
// });


// Example 2: After Image Upload
// ========================================
// function upload(file, callback) {
//     setTimeout(() => callback(file + " uploaded"), 1000);
// }
// upload("profile.jpg", msg => console.log(msg));



// Example 3: After User Login
// ==========================================
// function login(user, pass, callback) {
//     if (user === "admin" && pass === "admin123")
//         callback(null, "Welcome Admin!");
//     else
//         callback("Invalid Login", null);
// }

// login("admin", "admin123", (err, success) => {
//     if (err) console.error(err);
//     else console.log(success);
// });

// 6. Constructor Function	Used to create objects using new keyword


// Array => An Array is a special variable that can hold multiple values in a single variable, value can be any type
// Indexed (starts from 0 and end with n-1 ( n = length of the array))
// Dynamic size
// Can store mixed types
//    0       1        2     
const students = ['Suman', 'Kavya', 'Omkar', 'Aditya', 'Ajay Kumar']
console.log(students.length);
console.log(students);
console.log(students[0]);

for (const data of students) {
    console.log(data);
}
console.log(" =====================");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Adds item to the end
students.push('Harish')
console.log(students);

// Removes last item
students.pop()
console.log(students);

// Remove first item
students.shift()
console.log(students);

// Adds item to the start/beginning
students.unshift('Tejash')
console.log(students);

// Returns portion
console.log(students.slice(1, 4));

// Add/Remove elements
console.log(students.splice(1, 1));
console.log(students);

// Return index of element
console.log(students.indexOf('Omkar'));

// check if array contains element
console.log(students.includes('Aditya'));

// Reverse the array
console.log(students.reverse());

// Converts Array to String
console.log(students.join(' '));

let marks = [10, 20, 30, 40]
// Merge the two array
let merge_data = students.concat(marks)
console.log(merge_data);

// String => A string is a sequence of characters used to represent text
// immutable(can not change directly)
// use '', "", ``
let course = "Web Dev"
console.log(course);
console.log(course.length);
// Charecter at index
console.log(course.charAt(2));
// finds first occurances index value
console.log(course.indexOf('W'));
console.log("======================");
console.log(course.indexOf('e'));
console.log(course.lastIndexOf('e'));
console.log(course.toUpperCase());
console.log(course.toLowerCase());
console.log(course.slice(1, 3));
// console.log(course.replace('e',''));
console.log(course.replaceAll('e', ''));

console.log("==========Objects============");
// Objects => An Object is a collection of Properties(key-value pair)
// used to represents real-world entities

// let mobile={
//     mobile_name : 'Iphone',
//     price:89000,
//     model_price:{
//         iphone13:50000,
//         iphone14:60000,
//         iphone15:80000,
//         iphone16:80000
//     }
// }
// console.log(mobile);

// console.log(mobile.mobile_name);
// console.log(mobile['price']);

// console.log(mobile.model_price.iphone14);

// console.log(Object.keys(mobile));
// console.log(Object.values(mobile));

// console.log(Object.entries(mobile));


const mobiles = [
    {
        mobile_name: 'iPhone',
        price: 89000,
        model_price: {
            iphone13: 50000,
            iphone14: 60000,
            iphone15: 80000,
            iphone16: 90000
        },
        specifications: {
            brand: 'Apple',
            os: 'iOS',
            camera: '12MP',
            storage: ['128GB', '256GB', '512GB'],
            is5G: true
        }
    },
    // console.log(mobiles[0])
    {
        mobile_name: 'Samsung Galaxy',
        price: 75000,
        model_price: {
            s21: 45000,
            s22: 60000,
            s23: 72000,
            s24: 85000
        },
        specifications: {
            brand: 'Samsung',
            os: 'Android',
            camera: '50MP',
            storage: ['128GB', '256GB'],
            is5G: true
        }
    },
    {
        mobile_name: 'OnePlus',
        price: 55000,
        model_price: {
            nord: 28000,
            oneplus9: 40000,
            oneplus10: 50000,
            oneplus12: 58000
        },
        specifications: {
            brand: 'OnePlus',
            os: 'Android',
            camera: '48MP',
            storage: ['128GB', '256GB'],
            is5G: true
        }
    },
    {
        mobile_name: 'Google Pixel',
        price: 62000,
        model_price: {
            pixel6: 45000,
            pixel6a: 35000,
            pixel7: 55000,
            pixel8: 62000
        },
        specifications: {
            brand: 'Google',
            os: 'Android',
            camera: '50MP',
            storage: ['128GB', '256GB'],
            is5G: true
        }
    },
    {
        mobile_name: 'Realme',
        price: 25000,
        model_price: {
            narzo: 15000,
            x7: 20000,
            gtNeo: 24000,
            gtNeo3: 25000
        },
        specifications: {
            brand: 'Realme',
            os: 'Android',
            camera: '64MP',
            storage: ['64GB', '128GB'],
            is5G: true
        }
    }
];

console.log(mobiles);
console.log(mobiles[4].model_price.gtNeo3);
console.log(mobiles[0].specifications.storage[2])








