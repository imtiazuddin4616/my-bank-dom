
let depositInput = document.getElementById('deposit-input');
let withdrawInput = document.getElementById('withdraw-input');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
let allDeposit = [];
let allWithdraw=[];
let WithdrawHistory;
let depositHistory;
let newBalance;
let newWithdrawAmount;



depositBtn.addEventListener('click', function(){
  let currentDeposit = parseFloat(document.getElementById('deposit-total').innerText)

  depositAmount = parseFloat(depositInput.value);
  newBalance = currentDeposit + depositAmount; 
  document.getElementById('deposit-total').innerText = newBalance;
  document.getElementById('balance-total').innerText = newBalance;
  let date = new Date();
  allDeposit.push(depositAmount)

  const p = document.createElement('p')
  p.classList.add('text-sm')
  allDeposit.forEach(function(singleDeposit, index){
    p.innerText = `${index + 1}---  ${singleDeposit} Tk ${date.toDateString()} time:  ${date.toLocaleTimeString()}`
    document.getElementById('dipositHistory').appendChild(p)
  })
  
})


withdrawBtn.addEventListener('click', function(){
  let withdrawAmout = parseFloat(withdrawInput.value);
  if(newBalance < withdrawAmout){
    alert(`Your balance is too low.
You cannot withdray more amount than your Main balance`)
  }else{
    newBalance -= withdrawAmout
    document.getElementById('balance-total').innerText = newBalance
    let previousWithdrawAmount =  parseFloat(document.getElementById('withdraw-total').innerText);
    let currentWithdrawAmount = previousWithdrawAmount + withdrawAmout
    document.getElementById('withdraw-total').innerText = currentWithdrawAmount
    let date = new Date();
    allWithdraw.push(withdrawAmout)
    const p = document.createElement('p')
    allWithdraw.forEach(function(singleWithdraw, index){
      p.innerText = `${index + 1}---  ${singleWithdraw} Tk ${date.toDateString()} time:  ${date.toLocaleTimeString()}`
      document.getElementById('withdrawHistory').appendChild(p)
    })
  document.getElementById('withdrawHistory').innerHTML=`Withdraw ammount: ${withdrawAmout} Tk ${d}`;
    
  }
})