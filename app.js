const dateofBirth = document.querySelector("#date-of-birth");
const luckyNum = document.querySelector("#lucky-Num");
const checkBtn = document.querySelector("#check-btn");
const txtArea = document.querySelector("#txt-area");


function sumofDob(dob)
{
  var sum = 0;
  for(var i = 0; i< dob.length; i++)
  {
   sum += Number(dob.charAt(i));
  }
  return sum;
}

checkBtn.addEventListener("click", function  checkPost()
{
  var dob = dateofBirth.value;
  const num = luckyNum.value;
   dob =dob.replaceAll("-","");
 //console.log(sumofDob(dob));
  if(sumofDob(dob)% num)
  {
    txtArea.innerText="Your Birthday is not lucky, Sorry";
  }else{
    txtArea.innerText="Your birthday is lucky, Yayyy";
  }

});