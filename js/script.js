<<<<<<< HEAD
const billAmount = document.querySelector("body > div.main > div.box > div.bil-split-section > div.bill-amount > div > input[type=number]");
const customTip = document.querySelector("#tip");
const noOfPeople = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > div > input[type=number]");
const resetBtn = document.querySelector("#btn");
const textBox = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > div");
const errorMsg = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > span.error");

const calculatedTipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

const fivePercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.five");
const tenPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.ten");
const fifteenPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.fifteen");
const twentyFivePercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.twentyfive");
const fiftyPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.fifty");

let resultTip;
let calculatedTip;
let resultTotal;
let FinalTotal;

const calculate = (perc, element) => {
    element ? element.classList.add('active-class') : null;
    if(noOfPeople.value == NaN || noOfPeople.value == null || noOfPeople.value == ''){
        errorMsg.style.display = 'inline-block';
        textBox.classList.add('active-error');
    }
    else if(billAmount.value !== "" && billAmount.value !== null && noOfPeople.value !== "" && noOfPeople.value !== null){
        errorMsg.style.display = 'none';
        textBox.classList.remove('active-error');
        calculatedTip = (((billAmount.value) * perc) / 100);
        resultTip = calculatedTip / (noOfPeople.value);

        resultTotal = Number((billAmount.value) / (noOfPeople.value));
        FinalTotal = resultTotal + resultTip;
    }
    resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
    if(resultTotal !== NaN || resultTotal !== Infinity || FinalTotal !== NaN || FinalTotal !== Infinity || resultTotal == '' || FinalTotal == ''){
        calculatedTipAmount.innerText = '$ ' + resultTip.toFixed(2);
        total.innerText = '$ ' + FinalTotal.toFixed(2);
    }

    // Logs in console
    console.log('CalculatedTip: ', calculatedTip);
    console.log('ResultTip: ', resultTip);
    
    console.log('resultTotal: ',resultTotal);
    console.log('FinalTotal: ',FinalTotal);

    console.log('BillAmount: ', billAmount.value);
    console.log('CustomTip: ' ,customTip.value);
    console.log('NoOfPeople: ' ,noOfPeople.value);
    console.log('CalculatedTipAmount: ' ,calculatedTipAmount.innerText);
    console.log('Total: ' ,total.innerText);
    console.log('==================================')
}

fivePercent.addEventListener('click', () => {
    calculate(5, fivePercent);
});
tenPercent.addEventListener('click', () => {
    calculate(10, tenPercent);
});
fifteenPercent.addEventListener('click', () => {
    calculate(15, fifteenPercent);
});
twentyFivePercent.addEventListener('click', () => {
    calculate(25, twentyFivePercent);
});
fiftyPercent.addEventListener('click', () => {
    calculate(50, fiftyPercent);
});
customTip.addEventListener('keyup', (e) => {
    calculate(Number(customTip.value, null));
    console.log(Number(customTip.value));
});

let btnDivs = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div").children;

resetBtn.addEventListener('click', () => {
    for(let i=0; i<=4; i++){ 
        btnDivs[i].classList.remove('active-class');
    }
    resetBtn.style.backgroundColor = 'hsla(172, 67%, 45%, 0.2)';
    billAmount.value = null;
    customTip.value = null;
    noOfPeople.value = null;
    calculatedTipAmount.innerText = '$ 0.00';
    total.innerText = '$ 0.00';
});
=======
const billAmount = document.querySelector("body > div.main > div.box > div.bil-split-section > div.bill-amount > div > input[type=number]");
const customTip = document.querySelector("#tip");
const noOfPeople = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > div > input[type=number]");
const resetBtn = document.querySelector("#btn");
const textBox = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > div");
const errorMsg = document.querySelector("body > div.main > div.box > div.bil-split-section > div.no-of-people-section > span.error");

const calculatedTipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

const fivePercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.five");
const tenPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.ten");
const fifteenPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.fifteen");
const twentyFivePercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.twentyfive");
const fiftyPercent = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div > div.fifty");

let resultTip;
let calculatedTip;
let resultTotal;
let FinalTotal;

const calculate = (perc, element) => {
    element ? element.classList.add('active-class') : null;
    if(noOfPeople.value == NaN || noOfPeople.value == null || noOfPeople.value == ''){
        errorMsg.style.display = 'inline-block';
        textBox.classList.add('active-error');
    }
    else if(billAmount.value !== "" && billAmount.value !== null && noOfPeople.value !== "" && noOfPeople.value !== null){
        errorMsg.style.display = 'none';
        textBox.classList.remove('active-error');
        calculatedTip = (((billAmount.value) * perc) / 100);
        resultTip = calculatedTip / (noOfPeople.value);

        resultTotal = Number((billAmount.value) / (noOfPeople.value));
        FinalTotal = resultTotal + resultTip;
    }
    resetBtn.style.backgroundColor = 'hsl(172, 67%, 45%)';
    if(resultTotal !== NaN || resultTotal !== Infinity || FinalTotal !== NaN || FinalTotal !== Infinity || resultTotal == '' || FinalTotal == ''){
        calculatedTipAmount.innerText = '$ ' + resultTip.toFixed(2);
        total.innerText = '$ ' + FinalTotal.toFixed(2);
    }

    // Logs in console
    console.log('CalculatedTip: ', calculatedTip);
    console.log('ResultTip: ', resultTip);
    
    console.log('resultTotal: ',resultTotal);
    console.log('FinalTotal: ',FinalTotal);

    console.log('BillAmount: ', billAmount.value);
    console.log('CustomTip: ' ,customTip.value);
    console.log('NoOfPeople: ' ,noOfPeople.value);
    console.log('CalculatedTipAmount: ' ,calculatedTipAmount.innerText);
    console.log('Total: ' ,total.innerText);
    console.log('==================================')
}

fivePercent.addEventListener('click', () => {
    calculate(5, fivePercent);
});
tenPercent.addEventListener('click', () => {
    calculate(10, tenPercent);
});
fifteenPercent.addEventListener('click', () => {
    calculate(15, fifteenPercent);
});
twentyFivePercent.addEventListener('click', () => {
    calculate(25, twentyFivePercent);
});
fiftyPercent.addEventListener('click', () => {
    calculate(50, fiftyPercent);
});
customTip.addEventListener('keyup', (e) => {
    calculate(Number(customTip.value, null));
    console.log(Number(customTip.value));
});

let btnDivs = document.querySelector("body > div.main > div.box > div.bil-split-section > div.tip-section > div").children;

resetBtn.addEventListener('click', () => {
    for(let i=0; i<=4; i++){ 
        btnDivs[i].classList.remove('active-class');
    }
    resetBtn.style.backgroundColor = 'hsla(172, 67%, 45%, 0.2)';
    billAmount.value = null;
    customTip.value = null;
    noOfPeople.value = null;
    calculatedTipAmount.innerText = '$ 0.00';
    total.innerText = '$ 0.00';
});
>>>>>>> cf4517010ec70197254f87d86197cec37338168f
