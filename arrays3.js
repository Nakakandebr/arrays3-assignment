
 // Write a function that accepts an array of strings and console.logs each element using a for loop
 function stringArray(arr){
   
    for(let i=0;i<arr.length;i++){
         console.log(word[i]);
        
     }

 }
 let word =["mat","cat"];
 stringArray(word);


  // Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
  function numArray(arr2){
      arr2.forEach(element => {
          console.log(element*2)
      });
  }
  let num =[3,5,7,9,2,5]
  numArray(num)

 //Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

 function multiplyArray(arr2) {
     const firstFour = arr2.slice(0, 4).map(number => number * 8);
     const lastTwo = arr2.slice(-2).map(number => number + 5);
     const multArray = [...firstFour, ...lastTwo];
     console.log(multArray);
   }
   const myArray = [1, 2, 3, 4, 5, 6];
   multiplyArray(myArray);

 // Write a function that takes in the following
 //  array and use a while loop to iterate and break
 //   when the item is equal to the fourth index // let arrNum = [1,2,3,4,5,6,7,8,9];
 let arrNum = [1,2,3,4,5,6,7,8,9];
 let i=0;
 function number4(arraynum){
    
    while(i<arraynum.length){
        console.log({"arraynum" :arraynum[i]})
         if(i===4){
             break;
        }
         i++;
     }
     
  }
  number4(arrNum)
  
 


    
    


 //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
 function fruitz(arr4){
      for(let i=0;i<arr4.length;i++){
    if(i===2){  
        continue;
     }
     console.log({"arr4" :arr4[i]});
      }
 }
       let fruits= ['apple','plum','banana','strawberries','kiwi'];
        fruitz(fruits);
