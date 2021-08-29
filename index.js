//These are triggers

//adding event listener to keyboard
document.addEventListener("keydown",function(){
  var keyPressed=event;
  keyPressed=keyPressed.key;


  //handling events according to the key pressed then  calling function already created for clicks
  switch (keyPressed) {
    case "0":
      storeNumbers(0);
      display(0);

    break;
    case "1":
      storeNumbers(1);
      display(1);

    break;
    case "2":
      storeNumbers(2);
      display(2);

    break;
    case "3":
      storeNumbers(3);
      display(3);

    break;
    case "4":
      storeNumbers(4);
      display(4);

    break;
    case "5":
      storeNumbers(5);
      display(5);

    break;
    case "6":
      storeNumbers(6);
      display(6);

    break;
    case "7":
      storeNumbers(7);
      display(7);

    break;
    case "8":
      storeNumbers(8);
      display(8);

    break;
    case "9":
      storeNumbers(9);
      display(9);

    break;
    case "+":
      storeOperator("+");
      display("+");

    break;
    case "-":
      storeOperator("-");
      display("-");
      console.log("- pressed")
    break;
    case "*":
      storeOperator("*");
      display("*");
      console.log("* pressed");
    break;
    case "/":
      storeOperator("/");
      display("/");
      console.log("/ pressed");
    break;
    case "%":
      storeOperator("%");
      display("%");
      console.log("% pressed");
    break;
    case "=":
      extractNumOpt();
      console.log("= pressed");
    break;
    case "Shift":
      console.log("Shift pressed");
    break;
    case "Enter":
      extractNumOpt();
      console.log("Enter pressed");
    break;
    case "Escape":
      clearAll();
      console.log("Esc pressed");
    break;
    case "Backspace":
      clearAll();
    break;
    default:alert("Please press a valid keyboard shourtcut");

  }
})




//adding event listener to number number buttons
for(i=0;i<10;i++){
  //array declared here so each time its an empty array
  var arrayNumberOpt=[ ];//to store number
  var dispStr="";//to store strings for screen display
  document.querySelectorAll(".numbtn")[i].addEventListener("click",catchInputNum);
}


//adding event listener to operators buttons
for(i=0;i<5;i++){
  document.querySelectorAll(".opbtn")[i].addEventListener("click",catchInputOperator);
}
//adding event listener to cls buttons
document.querySelector(".clsbtn").addEventListener("click",clearAll);


//cls button FUNCTION
function clearAll(){
  document.querySelector("#screen_value").innerHTML="0";
  arrayNumberOpt=[];
  dispStr="";
  num1=0;
  num2=0;
  //flush out all data from arrays and variables
}





//adding event listener to equal button
document.querySelector(".equalbtn").addEventListener("click",function(){
  extractNumOpt();
});

//storing screen value
var screenValue=document.querySelector("#screen_value").innerHTML;



//All Functions are defined here

//to catch number clicked
function catchInputNum(){
  var inputNum=this.innerHTML;
  storeNumbers(inputNum);
  display(inputNum);
}

//to catch operetotr clicked
function catchInputOperator(){
  var inputOperator=this.innerHTML;
  storeOperator(inputOperator);
  display(inputOperator);

}

//to store input numbers into an array
function storeNumbers(inputNum){
  arrayNumberOpt.push(inputNum);
  console.log(arrayNumberOpt)
}
//to store input operator into an array
function storeOperator(inputOperator){
  arrayNumberOpt.push(inputOperator);
  console.log(arrayNumberOpt);
}


//to display clicked number or operator on screenValue
function display(input){
  dispStr=dispStr+input;
  console.log(dispStr);
  displayInScreen(dispStr);
}

//to put the display value in screen
function displayInScreen(dispStr){
  document.querySelector("#screen_value").innerHTML=dispStr;
}


//extracting numbers and opertors entered by user
function extractNumOpt(){
n=arrayNumberOpt.length;
//
var num1=0;//declared here
var num2=0;//declared here to be 0 at first

//
for(i=0;i<n;i++){///iterating through each element in array
//
//
//
  //verifying addition
  if(arrayNumberOpt[i]==="+"){//found operator
    var plusIndex=i;//storing operator index value in that array
    for(j=0;j<i;j++){//extracting first no. i.e before operator
      num1=(num1*10)+Number(arrayNumberOpt[j]);//finding num 1 before operator
    }
    j=i+1;
    for(j;j<n;j++){//extracting 2nd no. i.e after operator
      num2=(num2*10)+Number(arrayNumberOpt[j]);//finding num 2 after operator
    }
    //calling to get final answers
    add(num1,num2);

  }
  //verifying subtraction
  else if (arrayNumberOpt[i]==="-") {
    var minusIndex=i;
    for(j=0;j<i;j++){
      num1=(num1*10)+Number(arrayNumberOpt[j]);
    }
    j=i+1;
    for(j;j<n;j++){
      num2=(num2*10)+Number(arrayNumberOpt[j]);
    }
    sub(num1,num2);
  }

  //verifying multiplication
  else if(arrayNumberOpt[i]==="*"){
    var mulIndex=i;
    for(j=0;j<i;j++){
      num1=(num1*10)+Number(arrayNumberOpt[j]);
    }
    j=i+1;
    for(j;j<n;j++){
      num2=(num2*10)+Number(arrayNumberOpt[j]);
    }
    mul(num1,num2);
  }

  //verifying division
  else if(arrayNumberOpt[i]==="/"){
    var divIndex=i;
    for(j=0;j<i;j++){
      num1=(num1*10)+Number(arrayNumberOpt[j]);
    }
    j=i+1;
    for(j;j<n;j++){
      num2=(num2*10)+Number(arrayNumberOpt[j]);
    }
    div(num1,num2);
  }

  //verifying modulo
  else if(arrayNumberOpt[i]==="%"){
    var modIndex=i;
    for(j=0;j<i;j++){
      num1=(num1*10)+Number(arrayNumberOpt[j]);
    }
    j=i+1;
    for(j;j<n;j++){
      num2=(num2*10)+Number(arrayNumberOpt[j]);
    }
    mod(num1,num2);
  }
  else{
  }
}

console.log("Add Index is "+ plusIndex+" 1st no. is "+num1+" 2nd no. is "+num2);
console.log("Sub Index is "+ minusIndex+" 1st no. is "+num1+" 2nd no. is "+num2);
console.log("Mul Index is "+ mulIndex+" 1st no. is "+num1+" 2nd no. is "+num2);
console.log("div Index is "+ divIndex+" 1st no. is "+num1+" 2nd no. is "+num2);
console.log("mod Index is "+ modIndex+" 1st no. is "+num1+" 2nd no. is "+num2);
}


//mathematical calculations


//addition
function add(num1,num2){
  var answer=num1 + num2;
  //now displaying on screen
  document.querySelector("#screen_value").innerHTML=answer;

}

//multiplication
function mul(num1,num2){
  var answer=num1*num2;
  //now displaying on screen
  document.querySelector("#screen_value").innerHTML=answer;


}

//subtraction
function sub(num1,num2){
    var answer=num1-num2;
    //now displaying on screen
    document.querySelector("#screen_value").innerHTML=answer;


}

//division
function div(num1,num2){
  var answer=num1/num2;
  //now displaying on screen
  document.querySelector("#screen_value").innerHTML=answer;

}

//modulo
function mod(num1,num2){
  var answer=num1%num2;
  //now displaying on screen
  document.querySelector("#screen_value").innerHTML=answer;

}
