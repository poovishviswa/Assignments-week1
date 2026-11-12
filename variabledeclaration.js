// var 
var name = "Sara";

name = "Ilan";

console.log(name);

var name = "Yaazh";

console.log(name);


//let

let num = 123;

console.log(num);

num = 567;

console.log(num);

//let num = 345;

//console.log(num);

//const

const key = "abc";

console.log(key);

//key = "abc1";

//console.log(key);

//const key = "ghi";

//console.log(key);

//scope


var a = 1;

let b = 2;

const c = 3;

function displayValue()
    {
        //console.log(b);  Hoisting let

        let b;

        //console.log(x); Hoisting const 

        const x = 10;

        console.log(y); // Hoisting a var

        var y = 111;

        console.log(y);
        

        if(true)
        {    
        console.log(a);

        console.log(b);

        console.log(c);
        
        var d = 5;

        let e = 6;

        const f = 7;

        }
            console.log(d);

            //console.log(e);

            //console.log(f);
        

    }

    displayValue();

    //console.log(d);

    //console.log(e);

    //console.log(f);

   







