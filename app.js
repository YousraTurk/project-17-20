// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multidimensional_array =[
//     [],
//     [],
//     []
// ] ;
// console.log(multidimensional_array);

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var multidimensional_array = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// for(var a=0; a<3; a++){
//     for(var b=0; b<4; b++){
//         document.write(multidimensional_array[a][b]);

//     }
//     document.write("<br>");

    

// }

// 3. Write a program to print   from 1 to 10.


// for(var a=1; a<=10; a++){
//     document.write(a+"<br>");

// }

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user

// var multiplication_table = prompt("Enter a number to show its multiplication table");
// var length_multiplication_table = prompt("Enter lenght multiplication table");


// // document.write("Multiplication table of " + multiplication_table + " Lenght " + length_multiplication_table + "<br>");

// for( var i=1; i<=length_multiplication_table; i++){

//     document.write(multiplication_table + " x " + i +" = " + (multiplication_table*i)   +"<br>");

// }

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits = ["apple","banana","mango","orange"];
// for(var a=0; a<4; a++){
//     document.write(fruits[a] + "<br>");
 
// }
// for(var i=0; i<4; i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var series = [
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
// [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
// [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
// ["2k","4k","6k","8k","10k","12k","14k","16k","18k","20k"]
// ];
// var series_1 = ["Counting","Reverse Counting","Even","Odd","Series"]
// for(var i=0; i<5; i++){
//     document.write(series_1[i]+"<br>"+"<br>"+series[i]+ " <br> "+ " <br> ");

// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var to_check = prompt("Welcome to my Bakery. what do you want to order sir/mam");
// var matchFound = "no";

// for(var i=0; i<5; i++){
//    if(to_check===a[i]){
//       matchFound="yes";
//       document.write(to_check + " is available at index " + i + " in our bakery ");

//    }
// }
// if(matchFound= "no"){
//    document.write( " We are sorry " + to_check +   " is not available in our bakery ");
// }

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12].
     
// var a = [24,53,78,91,12];
// document.write(" Array items " + a + "<br>");
// document.write(" The largest number is "+Math.max(...a));

// 9. Write a program to identify the smallest number in the 
// given array.
// var A = [24, 53, 78, 91, 12];
// document.write(" Array items " + A + "<br>");
// document.write(" The largest number is "+Math.min(...A));

// Write a program to print multiples of 5 ranging 1 to 
// 100


//  for( var i=1; i<=20; i++){
//     document.write(5*i + " , ");

//  }