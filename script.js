//                             // WORKING ON JAVASCIPT//

//             /* ALERT :- the popup on the web window when you taking your conformation/giving warning etc.
//             syntax is as following the keyword "alert" then the parenthesis ans and taking the string with the double qoute and the last terminator to end the statement .*/
            alert("Muhammmad Zohaib Abbas");

//             //Window.alert//
//             // a global element//
            window.alert("Muhammad Zohaib abbas")
            
//             // the concole.log//
//             /* Work same as the alert but provide the output in the inpect window of the web...*/ 
            console.log("Muhammad Zohaib Abbas");

//             // document:- to write in the html document using the javascipt
             document.write("Muhammad Zohaib Abbas")

//                                  //  VARIABLES //
//     //  a keyword var is used to declare a variable
//     //  syntax :- var variable_name = "value";

    var firstName; // declaring the variable...
    var lastName = "Abbas"; // initializing the varibale...

// // rules for variable:-  ->no use of space   ->no of builtin keywords   ->use of numbers/alphabets/characters ($,_)
// //->use of capital letters but take care of CASE SENSITIVITY ->use of camelCasing ->use of desciptive variable name

//     //string variable
     var firstName = "Muhammad Zohiab ";
     var lastName = "Abbas";
     console.log("My name is "+ firstName + lastName + ".");

     //number variables
     var num1 = 23;
     var num2 = 45;
    //  //here if i assign new value to the variablee declared before like num2=67----its value will change;
     num2 = 67;

     var total=num1+num2;
     console.log(total);// the output will be 68 if the num2 has old value and new value ----see the variable assignment..
    

     //cancatination of string variables 

     var num1 = 34;
     var num2 = "34";
     var total = num1 + num2;
     console.log(total);//output will not be the addition of the nnumber instead it will stick with the number likewise the output will be 3434

                                //PROMPTS//
    /* prompts are used to get the input from the user just like the alert box... both has same syntax  but  prompt has the ability to take input from the user */
      // prompt will be assign to a variable.
       var userName = prompt("Enter your name");
       alert(userName);

       // prompt always return the value in string ..... to identify the return value as number we use the following syntax:
        var num1 = +prompt("Enter the number");
        alert(num1);

                                            //STATEMENTS??
     //use of the statments in some conditions............
                                    //IF statments//
/* thwe conditon will result only in two form "True" or "False"
  /*syntax:  ->  if ( condition){
                                          }*/
    //                                       // lets see the example
    var num1= 34;
    we can use different oiperator -> will study ahead
    you can also take the input from the user using the prompt element
    if ( num1 >= 30){
        alert("the num1 is greater than 30 ")
    }
    you also want the other conditon tooo then write the extra statment
    if ( num1 < 30){
        alert(" the num1 is less than 30.")
    }

                //EXAMPLE PROGRAM//
    var cardBalance= +prompt("Enter your card balance");
    if( cardBalance >= 55){
        alert("You can travel in BRT Peshawar")
    }
    if(cardBalance < 55){
        alert("Please! Recharge your card")
    }
                    //EXAMPLE PROGRAM//
        var userAge= +prompt("Enter your age");
        if (userAge >=18){
            alert("You are eligible for Driving Lisence")
        }
        if (userAge < 18){
            alert("Not Eligible !!!")
        }

    /* We have work on some of the string and the number method */

                        // STRING METHOD //
let myName = "Zohaib"
console.log(myName.charAt(0)); //this method return the character which resdies at the mentioned position...

 let myName2 = "Alikhan";
 console.log(myName2.indexOf("k"));//Where as this method return the index at which the characetr resides...

console.log(myName2.lastIndexOf("")); //it also retrun the index positiion of the character..

                                        //more methods//

   console.log(myName.slice(0,3));//takes the start positon as first value and secodn value as the stopping value...while it does not include the stopping value..

console.log(myName.toLowerCase());// as the name descibe the functionality of the method 

console.log(myName2.toUpperCase()); // as the name descibed the functonality

//this method say wehther the defined character is included in the string or not 
console.log(myName2.includes("i")
);// it will provide the value in true/false 

console.log(myName2.split("i"));//split the character in the parts and define it in the 

                                        //NUMBER METHOD//

 let myStringNumber = "87";
 console.log(Number(myStringNumber)); //convert the string number into actual number datatype
 // few more method are there ....
//  Refer the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number