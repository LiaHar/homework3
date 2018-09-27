// 1.
const Take3Args = function(arg1, arg2, arg3) {
    return (arg1 + (arg2 + arg3)) * arg1 - arg2 / arg1;
}
const Calc3Args = Take3Args(2, 4, 6);
console.log(Calc3Args);

// 2.
const NoArg = function() {
    const hi = "barev";
    const bye = " hajox";
    return hi + bye;
}

console.log(NoArg());

//3.
const name = function (name, surname) {
    const fullname = name + " " + surname;
  console.log(fullname);
 }
 const nameresult = name("anun", "azganun");
 //4.
const LongString = function(Str1, Str2, Str3) {
    if(Str1.length > Str2.length) {
        if(Str1.length > Str3.length) {
            return Str1;
        }
 }
        else if(Str2.length > Str3.length) {
            return Str2;
        }
        else {
            return Str3;
        }
    
}
console.log(LongString("ssss", "ddddd", "aaaaaaaa"));

//5.

const OneNumber = function(num1, num2) {
    if(num1 > num2) {
        return 1;
    }
    else if(num1 === num2) {
        return 0;
    }
    else {
        return -1;
    }
}

const OneNumber1 = OneNumber(1, 1);
console.log(OneNumber1);

//6.

const multiply = function(num1, num2) {
    const result = num1 * num2;
    return result;
}
const CountResult = multiply(3, 4);
console.log(CountResult);

//7.


const divide = function(num1, num2) {
    const result1 = num1 / num2;
    return result1;
}
const CountResult1 = divide(12, 4);
console.log(CountResult1);

//8.

const triangleArea = function(base, height) {
    const Count = multiply(base, height);
    const Count1 = divide(Count, 2); 
    return Count1;
}
const result2 = triangleArea(10, 4);
console.log(result2);

//9.

const numLength = function(num) {
    const stringnum = num + "";
    return stringnum.length;
}

const NumLResult = numLength(344455);
console.log(NumLResult);

//10.

const concutStrings = function(str1, str2, num) {
    const concutresult = str1 + str2;
    if(concutresult.length > num){
        return 1;
    }
    else {
        return -1;
    }
}
const concutSResult = concutStrings("barev", "hajox", 10);
console.log(concutSResult);


//11.


const runStuff = function(num1, num2, str) {
    if(str === "rectangle") {
        const rectangleArea = num1 * num2;
      return rectangleArea;
    }
    else if(str === "triangle") {
        return triangleArea(num1, num2);
    }
    else {
        return -1;
    }
}
const runStuffresult = runStuff(3, 4, "rectangle");
console.log(runStuffresult);