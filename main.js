// FizzBuzz

let i ;
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");

    }
    else if(i%3==0){
        console.log("Fizz");

    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}


// Palindrome
let str ="madam"
let rev ="";
console.log(str)
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
    }
if(str==rev){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

// Array Largest Number

let arr = [10,20,30,300,40]
let max = arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
    }
console.log(arr)
console.log(max);

// occurrences in a string

let text = "Hello"
console.log(text);
let count = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] == "l") {
        count += 1;
    }
}
console.log(count);

// Longest word in String
let txt = "Hello Hi Vanakkam";
console.log(txt);
let maxy = 0;
let word = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
        if (maxy < word.length) {
            maxy = word.length;
            word = word;
        }
        word = "";
    } else {
        word += txt[i];
    }
}
console.log(word);

// factorial

let num = 15;
console.log("Number is ", num);
let fact = 1;
for (let i = 1; i <= num; i++) {
    fact = fact * i;
    console.log("Factorial is", fact);
}

// Celsius to FahrenHeit

let Celsius = 100;
let Fahrenheit = (Celsius * 9/5) + 32;
console.log("Celsius is", Celsius) 
console.log("Fahrenheit is", Fahrenheit)


// Missing element in Array

let  array= [1,2,3,4,5,6,7,8,9,10];
console.log(array);
