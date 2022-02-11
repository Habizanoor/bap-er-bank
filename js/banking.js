// deposit 
document.getElementById('deposite-btn').addEventListener('click',function(){
    // get the amount deposited 
    const depositInput = document.getElementById('deposite-input');
    const depositAmount = depositInput.value;
    // console.log("new",depositAmount); 

    const newDepositTotal = document.getElementById('deposite-total-amount');
    const previouseDepositAmount = newDepositTotal.innerText;
    console.log("old",previouseDepositAmount);
    const total = parseFloat(previouseDepositAmount) + parseFloat(depositAmount);
    console.log("total",total);
    newDepositTotal.innerText = total;
    // update accountBalance 
    const TotalMoney =  document.getElementById('total-balance');
    const newEnteredMoney = TotalMoney.innerText;
    const newMoney = parseFloat(newEnteredMoney) + total;
    TotalMoney.innerText = newMoney;

    
    // clear input field 
    
    depositInput.value = '';
    

    

    
})
// withdrow 
document.getElementById('withdrow-btn').addEventListener('click',function(){
    const withdrowInput = document.getElementById('withdrow-input');
    const currentWithdrow = withdrowInput.value;
    // console.log(currentWithdrow);
    const withdrowMoney = document.getElementById('withdrow-total-amount');
    const previousWithdrow = withdrowMoney.innerText;
    const totalWithdrow = parseFloat(previousWithdrow) + parseFloat(currentWithdrow);
    // console.log(withdrowTotalAmount);
    withdrowMoney.innerText = totalWithdrow;
    // total balance 
    const balanceTotal = document.getElementById('total-balance');
    const moneyLeft = balanceTotal.innerText;
    const moneyLeftNow = moneyLeft - currentWithdrow;
    balanceTotal.innerText = moneyLeftNow;

    // clear the input field 
    withdrowInput.value = '';
    
});