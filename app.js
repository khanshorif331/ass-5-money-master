// common function to get the sum of expenses

function sumOfExpenses(){
    const foodInput=document.getElementById('food-input');
    const foodTotal = parseFloat(foodInput.value) ;

    const rentInput=document.getElementById('rent-input');
    const rentTotal = parseFloat(rentInput.value);

    const clothesInput=document.getElementById('clothes-input');
    const clothesTotal = parseFloat(clothesInput.value);

    const sum = foodTotal+rentTotal+clothesTotal;
    return sum;
}


// a function to get the persentage amount
function percentage(percent, incomeTotal) {
    return ((percent/ 100) * incomeTotal).toFixed(2)
}



// event handler on calculate button

document.getElementById('calculate-btn').addEventListener('click',function(){
    const income=document.getElementById('income-input');
    const incomeTotal = income.value;
    // calling the function
    const totalCost = sumOfExpenses();

    const totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText= totalCost;

    const balance = document.getElementById('balance');
    const currentBalance= incomeTotal-totalCost;
    balance.innerText = currentBalance;
})



// event handler on save button 


document.getElementById('save-btn').addEventListener('click',function(){
    const income=document.getElementById('income-input');
    const incomeTotal = income.value;
    
    const saveInput =document.getElementById('save-input');
    const savePercentage=parseFloat(saveInput.value);

    // calling persentage function
    const savingAmount = percentage(savePercentage,incomeTotal);

    const saveAmount = document.getElementById('saving-amount');
    saveAmount.innerText=savingAmount;

    // calling sum function
    const totalCost = sumOfExpenses();

    const remainingBalance = incomeTotal -totalCost -savingAmount;

    const remainingBalanceText=document.getElementById('remaining-balance');
    remainingBalanceText.innerText=remainingBalance;
})
