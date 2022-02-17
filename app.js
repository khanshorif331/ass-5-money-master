
// function incomeInput(num){
//     const income=document.getElementById('income-input');
//     const incomeValue = income.value;
//     income.value = incomeValue;
//     return incomeValue;
// }
// const result = incomeInput(30)

// console.log(result);



document.getElementById('calculate-btn').addEventListener('click',function(){
    // taking all the input values
    const income=document.getElementById('income-input');
    const incomeTotal = income.value;

    const foodInput=document.getElementById('food-input');
    const foodTotal = parseFloat(foodInput.value) ;

    const rentInput=document.getElementById('rent-input');
    const rentTotal = parseFloat(rentInput.value);

    const clothesInput=document.getElementById('clothes-input');
    const clothesTotal = parseFloat(clothesInput.value);

    const sum = foodTotal+rentTotal+clothesTotal;

    const totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText= sum;

    const balance = document.getElementById('balance');
    const currentBalance= incomeTotal-sum;
    balance.innerText = currentBalance;

    // console.log(totalExpense.innerText);
})