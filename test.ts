console.log("Hello World");

function addition(value: string) {
    console.log("Value is: " + value);
    }
    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);

    // five primtive types

    let str : string  = 'hello'; // string
    let numb :number = 27; // number
    let flag : boolean = true; // boolean
    console.log("Value assfined  to flag is : " + flag);

    console.log(str);
    console.log("My favouritre number is " + numb);
    // Array
    let  myArray: number []= [1,2,3];
    for (let i=0;i<myArray.length;i++){
        console.log("The value of my item "+(i+1)+"is"+myArray[i])
    }
    let myArray2: Array<number> =[1,2,3];
    myArray2.forEach(function(item){
        console.log("the value is"+ item)

    })

    // any
    let unKnown: any = "Whatever we want";

    console.log("the value is uknown"+ unKnown);


    // Function 
    function myFun(x:string):number{
        return 5;
    }

    // a.
    function count_with_spaces(value : string):number{
        return value.length;

    }
    let count = count_with_spaces("test1");
    console.log(count);

    //b.
    function count_without_spaces(value: string):number{
        return value.replace("","").length;
        console.log(count_without_spaces(" test 1 "));
    }

    // c
    function count_both(value:string, spaces:boolean):number{
        let count : number = 0;
        if(spaces){
            count = value.length;

        }else{
            count = value.replace("","").length;
        }
        return count
    }
    console.log(count_both("Test 1",true))
    console.log(count_both("Test 1",false))