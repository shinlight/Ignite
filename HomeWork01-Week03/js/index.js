// 1) Create function testMe that creates 3 variables and returns their product
function testMe() {
    let a=10;
    let b=10;
    let c=10;
    let result=(a*b*c);
    return result;
}

//2) Create function AI that respond "hi" if the parameter is "hello", "I cannot understand" otherwise
function AI(x) {
    var message=("I cannot understand");
    if (x=="hello") {
        return "hi";
    } else {
    return console.log(message);
    }
}

//3) Create function tripleSum that receives 3 numbers and returns the product of them
function tripleSum(x,y,z) {
    var result=(x*y*z);
    return console.log(result);
}

// 4) Create function factorial that calculates the factorial of the given param

function factorial(x) {
    var x;
    var result;
    if (x===0) {
        result=1;
        console.log(result);
    } else {
        result=factorial(x);
        console.log(result);
    }
}

// 5) Create function calculator with 3 params, two numbers (param1 and param2) and a sign between "+","-","*","/". Return the operation between param1 and param2
function calculator(param1,x,param2)  {
    var result;
    var message = "Please insert +, -, * or /. Thank you!";
    if (x=="+") {
        result=(param1+param2);
        console.log(result);
    } else if (x=="-") {
        result=(param1-param2);
        console.log(result);
    } else if (x=="*") {
        result=(param1*param2);
        console.log(result);
    } else if (x=="/") {
        result=(param1/param2);
        console.log(result);
    } else {
        console.log (message);
    }
}

// 6) Create function absolute that returns the absolute value of the parameter (es.: p = 1 returns 1, p = -27 returns 27)
function absolute(n) {
    var result;
    result=Math.abs(n);
    console.log(result);
}

// 7) Create function fizzBuzz that returns fizz if param is multiple of 3, buzz if multiple of 7, fizzbuzz if multiple of 3 and 7. Otherwise returns the same number
function fizzBuzz(x) {
    var mf="fizz";
    var mb="buzz";
    var mfb="fizzbuzz";
    if (x%21==0) {
        console.log (mfb);
    } else if (x%7==0) {
        console.log (mb);
    } else if (x%3==0) {
        console.log (mf);
    } else {
        console.log (x);
    }
}

// 8) Create function positive that returns true if the params is greater than 0
function positive(x) {
    var result;
    if (x>0) {
        result = true;
        console.log(result);
    } else {
        result = false;
        console.log(result);
    }
}

// 9) Create function transform that receives a number between 0 and 9 and returns a string containing the number (ex.: 0 returns "zero", 1 returns "one")
function transform(x) {
    var result;
    var message = "Please digit a number between 0 and 9. Thank you!";
    if (x==0) {
        result = "zero";
        console.log(result);
    } else if (x==1) {
        result = "one";
        console.log(result);
    } else if (x==2) {
        result = "one";
        console.log(result);
    } else if (x==3) {
        result = "three";
        console.log(result);
    } else if (x==4) {
        result = "four";
        console.log(result);
    } else if (x==5) {
        result = "five";
        console.log(result);
    } else if (x==6) {
        result = "six";
        console.log(result);
    } else if (x==7) {
        result = "seven";
        console.log(result);
    } else if (x==8) {
        result = "eight";
        console.log(result);
    } else if (x==9) {
        result = "nine";
        console.log(result);
    } else {
        console.log(message);
    }
}
