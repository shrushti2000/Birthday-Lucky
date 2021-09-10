const dateOfBirth=document.querySelector("#date-of-birth")
const luckyNumber=document.querySelector("#lucky-number")
const checkNumberButton=document.querySelector("#check-number")
const outputBox=document.querySelector("#outputBox");
function checkNumberLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    console.log(sum)
    compareValues(sum,luckyNumber.value)
}

checkNumberButton.addEventListener("click",checkNumberLucky )

function calculateSum(dob){
 dob=dob.replaceAll("-","");
 let sum=0;
for(let i=0;i<dob.length;i++){
    sum=sum+ Number(dob.charAt(i))
}
return sum;
}

function compareValues(sum,luckyNumber){
    if(sum % luckyNumber==0){
        outputBox.innerHTML="Your Birthday is lucky"
    }else{
        outputBox.innerHTML="Your Birthday is not lucky" 
    }
}