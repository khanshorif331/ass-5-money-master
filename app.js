
// function incomeInput(num){
//     const income=document.getElementById('income-input');
//     const incomeValue = income.value;
//     income.value = incomeValue;
//     return incomeValue;
// }
// const result = incomeInput(30)

// console.log(result);



document.getElementById('calculate-btn').addEventListener('click',function(){
    const income=document.getElementById('income-input');
    const incomeTotal = income.value;

    const foodInput=document.getElementById('food-input');
    const foodTotal = foodInput.value;

    const rentInput=document.getElementById('rent-input');
    const rentTotal = rentInput.value;

    const clothesInput=document.getElementById('clothes-input');
    const clothesTotal = clothesInput.value;

    console.log(incomeTotal,foodTotal,rentTotal,clothesTotal);
})