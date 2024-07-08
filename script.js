// //                             // WORKING ON JAVASCIPT//

// //             /* ALERT :- the popup on the web window when you taking your conformation/giving warning etc.
// //             syntax is as following the keyword "alert" then the parenthesis ans and taking the string with the double qoute and the last terminator to end the statement .*/
//             alert("Muhammmad Zohaib Abbas");

// //             //Window.alert//
// //             // a global element//
//             window.alert("Muhammad Zohaib abbas")
            
// //             // the concole.log//
// //             /* Work same as the alert but provide the output in the inpect window of the web...*/ 
//             console.log("Muhammad Zohaib Abbas");

// //             // document:- to write in the html document using the javascipt
//              document.write("Muhammad Zohaib Abbas")

// //                                  //  VARIABLES //
// //     //  a keyword var is used to declare a variable
// //     //  syntax :- var variable_name = "value";

//     var firstName; // declaring the variable...
//     var lastName = "Abbas"; // initializing the varibale...

// // // rules for variable:-  ->no use of space   ->no of builtin keywords   ->use of numbers/alphabets/characters ($,_)
// // //->use of capital letters but take care of CASE SENSITIVITY ->use of camelCasing ->use of desciptive variable name

// //     //string variable
//      var firstName = "Muhammad Zohiab ";
//      var lastName = "Abbas";
//      console.log("My name is "+ firstName + lastName + ".");

//      //number variables
//      var num1 = 23;
//      var num2 = 45;
//     //  //here if i assign new value to the variablee declared before like num2=67----its value will change;
//      num2 = 67;

//      var total=num1+num2;
//      console.log(total);// the output will be 68 if the num2 has old value and new value ----see the variable assignment..
    

//      //cancatination of string variables 

//      var num1 = 34;
//      var num2 = "34";
//      var total = num1 + num2;
//      console.log(total);//output will not be the addition of the nnumber instead it will stick with the number likewise the output will be 3434

//                                 //PROMPTS//
//     /* prompts are used to get the input from the user just like the alert box... both has same syntax  but  prompt has the ability to take input from the user */
//       // prompt will be assign to a variable.
//        var userName = prompt("Enter your name");
//        alert(userName);

//        // prompt always return the value in string ..... to identify the return value as number we use the following syntax:
//         var num1 = +prompt("Enter the number");
//         alert(num1);

//                                             //STATEMENTS??
//      //use of the statments in some conditions............
//                                     //IF statments//
// /* thwe conditon will result only in two form "True" or "False"
//   /*syntax:  ->  if ( condition){
//                                           }*/
//     //                                       // lets see the example
//     var num1= 34;
//     // we can use different oiperator -> will study ahead
//     // you can also take the input from the user using the prompt element
//     if ( num1 >= 30){
//         alert("the num1 is greater than 30 ")
//     }
//     // you also want the other conditon tooo then write the extra statement
//     if ( num1 < 30){
//         alert(" the num1 is less than 30.")
//     }

//                 //EXAMPLE PROGRAM//
//     var cardBalance= +prompt("Enter your card balance");
//     if( cardBalance >= 55){
//         alert("You can travel in BRT Peshawar")
//     }
//     if(cardBalance < 55){
//         alert("Please! Recharge your card")
//     }
//                     //EXAMPLE PROGRAM//
//         var userAge= +prompt("Enter your age");
//         if (userAge >=18){
//             alert("You are eligible for Driving Lisence")
//         }
//         if (userAge < 18){
//             alert("Not Eligible !!!")
//         }

//     /* We have work on some of the string and the number method */

//                         // STRING METHOD //
// let myName = "Zohaib"
// console.log(myName.charAt(0)); //this method return the character which resdies at the mentioned position...

//  let myName2 = "Alikhan";
//  console.log(myName2.indexOf("k"));//Where as this method return the index at which the characetr resides...

// console.log(myName2.lastIndexOf("")); //it also retrun the index positiion of the character..

//                                         //more methods//

//    console.log(myName.slice(0,3));//takes the start positon as first value and secodn value as the stopping value...while it does not include the stopping value..

// console.log(myName.toLowerCase());// as the name descibe the functionality of the method 

// console.log(myName2.toUpperCase()); // as the name descibed the functonality

// //this method say wehther the defined character is included in the string or not 
// console.log(myName2.includes("i")
// );// it will provide the value in true/false 

// console.log(myName2.split("i"));//split the character in the parts and define it in the 

//                                         //NUMBER METHOD//

//  let myStringNumber = "87";
//  console.log(Number(myStringNumber)); //convert the string number into actual number datatype
//  // few more method are there ....
// //  Refer the https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

//                                     // ARRAY //
                                
//     // defination :- a variable that can have multiple values assigend to it...
//                let theArray =["ali",78,true,67.76868,'khan'];
//     console.log(theArray);
//  //Accessing the element using the index number 
//   console.log(theArray[0]);
//   console.log(theArray[1]);
//   console.log(theArray[2]);
//   console.log(theArray[3]);
//   console.log(theArray[4]);

//   //length porperty
//   console.log(theArray.length);
//   // accessing the last element
//   console.log(theArray.length-1);


//                                         // "ARRAY METH0DS" //
// let newArray = [ 'ali', 'khan', 76 ,104.89, false];
 
// console.log(newArray.push("school")); //add the new element to the last of tha array.
// console.log(newArray.pop()); //remove the last element of the array 
// console.log(newArray.unshift("zohaib")); //add the new element to the start of the array 
// console.log(newArray.shift()); //remove the strat element of the array 
// delete(newArray[1]); // delete the mentioned array element
// console.log(newArray.slice(0,0,"junaid")); // delete and replace or replace without deletion of the element
// console.log(newArray.slice(2,4)); // break the array into two parts ....takes the starting index and the stopping index
// console.log(newArray.reverse()); //as name descibe it reverse the element of the array  
// console.log(newArray.join()); // it join all the element of the array into one vlaue 
// console.log(newArray.split(",")); // split the array element by the mentioned character

// // these new arrays are joined by the concat method...
//  let array1 = ["ali","khan"];
//  let array2 = ["ahmed","zubair"];
//  let newArray3 = array1.concat(array2);
// console.log(newArray3);


//                                             // LOOP //
//         /* FOR loops */ 
//         /* syntax
//         for(initialization,condition,incrementation/decementation); */
//         var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//         for (var i = 0; i <= 4; i++) { // the loop will run four(4) times
//              if (cityToCheck === cleanestCities[i]) {
//              alert("It's one of the cleanest cities");
//              }
//             } 
// Example:-
//  let myNum = 10;
//  for(let i=myNum;i>=1;i--){
//   console.log(i);
//  }

//  Example:-
// for(let i=0; i<=10;i++){
//   if(i==0){
//     console.log(i + " is even");
//   }
//   else if (i % 2===0){
//     console.log(i + " is even");
//   }
//   else {
//     console.log(i + " is odd");
//   }
// }

// // Example:-
// let classData=[['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// let average=0;
// for (let i=0; i<5; i++){
//   average += classData[i][1];
//   var avg = (average/ classData.length);
// }
// console.log(avg);
//  switch(avg){
//   case (avg < 60):
//     console.log("Grade F");
//     break;
//     case (avg < 70):
//       console.log("Grade D");
//       break;
//       case (avg < 80):
//         console.log("Grade C");
//         break;
//         case (avg < 90):
//           console.log("Grade B");
//           break;
//           case (avg <= 100):
//             console.log("Grade A");
//             break;
//             default:
//               console.log("Unsatisfied");
//  }
//  console.log("Average grade: " + (average) / classData.length);
 


//             //FLAG
//             //  a varible that starts with the default value and change its value udner certian condition
//             var matchFound = "no";
//  for (var i = 0; i <= 4; i++);
//  if (cityToCheck === cleanestCities[i]) {
//  matchFound = "yes";
// alert("It's one of the cleanest cities");
//  } 
//  if (matchFound === "no") {
//  alert("It's not on the list");
//  }
//             //BOOLEAN
//             //has two value TRUE/FALSE the loop will run even the we get the desired result...thats why we use the bresk keyword to stop the loop.
            
//             var matchFound = false;
//              for (var i = 0; i <= 4; i++);
//              if (cityToCheck === cleanestCities[i]) {
//              matchFound = true;
//              alert("It's one of the cleanest cities");
//             }
//              if (matchFound === false) {
//              alert("It's not on the list");
//              }
            
//             //ARRAY.length
//             // we use the it to limit the loop to run accodding to the number of the element in the array or variable assiged
//             var numElements = cleanestCities.length;
//             var numElements = cleanestCities.length;
//              var matchFound = false;
//              for (var i = 0; i < numElements; i++);
//              if (cityToCheck === cleanestCities[i]) {
//              matchFound = true;
//              alert("It's one of the cleanest cities");
//              }
//              if (matchFound === false) {
//              alert("It's not on the list");
//              }

//                                 //Nested for loop //
//                                 // a loop inside another loop
//              var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "]                
//              var  lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//              var fullNames = [];
//             for (var i = 0; i < firstNames.length; i++) { // outer loop
//              for (var j = 0; j < lastNames.length; j++) { //inner loop
//              fullNames.push(firstNames[i] + lastNames[j]);                    
//             } 
//         }
        
//     //Example
//     for(var i=0;i<3;i++){
//         for(var j=0; j<3;j++){
//             console.log(i);
//             console.log(j);
//             if(j==1){
//                 break;
//             }
//         }
//     }

//                         //MATHS  METHODS //
//     let number = 67.78;
//     Math.round(number); // round off the number to neaest integer...

//     Math.ceil(number);
//     Math.floor(number); // roubd off the number to nearest integer...

//     let newNum= PI;
//     Math.trunc(PI); // it remoove all the decimal number from the value..

//     Math.min(56,78,89); //it will return the minimun number out of it ...
//     Math.max(90,8,0); // it will return the maximum number out of it ...

//     let myNumber ;
//     Math.random(myNumber);
    
    // let mySurName = "Muhammad";
    // console.log(mySurName.charAt(Math.floor(Math.random()* mySurName.length)));

                                        // DATE AND TIME //
    
//  let myDate = new Date();
//  console.log(myDate); // just getting the present date through the date()....called as date object
//   console.log(myDate.toString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toLocaleString());
//   console.log(typeof myDate);

//   let myCreatedDate = new Date(2023,0,14); // the important thing over here is the months or the days inthe  JS start from the inde "0".
//   let myCreatedDate = new Date(2023,0,14,5,7);
// //   let myCreatedDate = new Date("2023-04-13");
// // let myCreatedDate = new Date(2023,0,14);
// //   console.log(myCreatedDate.toDateString());

//   let myTimeSetup = Math.floor(Date.now()/1000); // provide the time in milliseconds to round it  off we use the math.floor method 
//   console.log(myCreatedDate.getTime());
//   console.log(myTimeSetup);

                // Methods related to time //
    // let theDate = new Date();
    // console.log(theDate);

    // console.log(theDate.getDay());
    // console.log(theDate.getMonth());
    // console.log(theDate.getDate());
    // console.log(theDate.getFullYear());
    // console.log(theDate.getHours());
    // console.log(theDate.getMinutes());
    // console.log(theDate.getSeconds());
    // console.log(theDate.getMilliseconds());
    // console.log(theDate.getTime());

  // finding the date gap... //
    // let myTodayNewDate = new Date();
    // let myFutureDate = new Date("2050,5,12")
    //  let myDateGap = myFutureDate-myTodayNewDate ;
    //  console.log(Math.floor(myDateGap));

     // changing the elements of the date and time ..
      // let myDate = new Date();
      //  myDate.setFullYear(2022);
      //  myDate.setMinutes(54); // these set methods are use to change the elements...
      //  myDate.setMonth(0);
      //  console.log(myDate);

                          // FUNCTIONS //
     // a function is a block of code which is use to perform the specific task...
      // it consists of the keyword "function" functon-name(parameters){
      //  statements  }
      //  function call;

      // function findSum(num1, num2){ // function definition with parameters
      //         console.log(num1+num2); // statement
      //            }
      //       findSum(3,4); // function call

      //       //Example:
      //            function timeNow(){
      //             let date= new Date();
      //             let hrs = date.getHours();
      //             let mint = date.getMinutes();
      //           console.log("time : " + hrs + ":" + mint);
      //            }
      //             timeNow();
      //             timeNow(); // calling the function many time which reduce the repetative coding 
      //             timeNow()


                  // Example
            // function lisenceCheck(){
            //   let age = prompt("Enter your age!")
            // if (age>=18){
            //   alert("you are eligible for driving lisence ");
            // }
            // else if (age<18){
            //   alert("you are not eligible for driving lisence");
            // }
            // else {
            //   alert("invalid input");
            // }
            // }
            // lisenceCheck();

            // Example..... /* passing the parameters.
// function myAddition(num1,num2){
//   let sum = num1 + num2;
//   console.log("The addition of num1 and num2 = " + sum );
// }
//passing the arguments
// myAddition(56,78);
  
// PAssing the data back from the function 
//  function calcTotal(merchTotal){
//   let orderTotal;
//   if (merchTotal>= 100){
//     orderTotal=merchTotal;
//   }
//   else if (orderTotal<50){
//     orderTotal=merchTotal + 5;
//   }
//   else{
//     orderTotal=merchTotal + 5 + (0.3 + (merchTotal-50));
//   }
//   console.log(orderTotal);
//  }

//  calcTotal(34);
//  calcTotal(50);
    /* declaring the function in different names */
    //  let myFunction = function(){}; ...//function assigned to variable...
    //   function myNewFunction(myFucntion){}; ...//function used as parameter...

            // LOCAL AND GLOBAL VARIABLE
// let theGlobalVar;
// function myVariable(){
//   theGlobalVar= "Zohaib";
// console.log(`I am global variable ${theGlobalVar} .`);
// }
// myVariable();
// console.log(theGlobalVar); // this is global variable and its quality is,can be accessed from anywhere in the code... defined insdie the body. 


// function myVariable2(){
//   let theLocalVar ="Abbas";
//   console.log(`i am a local variable ${theLocalVar}.`);
// }
// myVariable2();
//  //console.log(theLocalVar); // this will show the error bcz it is local variable and only be accessed inside the function..


              // Switch Statements //
// syntax:-
// switch(condition){
//   case "value";
//   alert("staements");
//   break;
// }

// // Example:-
//  let dayOfWeek =prompt("Enter the day of Week");
//  switch(dayOfWeek){
//   case "saturday":
//     alert("Whoope");
//      break;
//     case "sunday":
//       alert("Whoope");
// break;
//       case "friday":
//         alert("Better a weekend");
//       break;
//       default:
//         alert("Aghhhhhhhh");
//  }


 // While Loop
  // let i= 0;
  // while(i<5){
  //   console.log("Zohiab");
  //   i++;
  // }

  // example:-
  //  let myNum = 10;
  //  while(myNum >= 1){
  //   console.log(myNum);
  //   myNum--;
  //  }


