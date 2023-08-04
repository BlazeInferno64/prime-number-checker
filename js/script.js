const field = document.querySelector(".field");
const maxLength = field.getAttribute("maxlength");

const forms = document.querySelector("#form");

const output = document.querySelector("#result");
const factorsOutput = document.querySelector("#fact");

const checkBtn = document.querySelector(".btn");


const closeBtn = document.querySelector(".close");

const popupBox = document.querySelector(".alert");

const popupBoxText = document.querySelector("#p");

const charactersLimit = document.querySelector(".txt");


closeBtn.addEventListener("click",(e) => {
    popupBox.style.bottom = '-100%';
})


forms.addEventListener("submit",(e) => {
    e.preventDefault();
});

forms.addEventListener("input",(e) => {
    if(field.value.length <= 0){
        checkBtn.classList.add("none")
    }
    else{
        checkBtn.classList.remove("none")
    }
})

const limit = 7;
charactersLimit.textContent = `0 / ${limit} digits left`;

field.addEventListener('input',(e) => {
    charactersLimit.classList.remove("hide");
    const textLength = field.value.length;
    charactersLimit.textContent = `${maxLength - textLength}  / ${limit} digits left`;
    
    if(textLength > limit){
        field.classList.remove("none");
        field.classList.add("red");
        
        //  Preventing the user from checking...
        checkBtn.classList.add("no");

        popupBox.style.bottom = '8%';
        popupBoxText.classList.add("yellow");
        popupBoxText.classList.remove("green");
        popupBoxText.innerText = 'Number is too large!';
    }
    else if(textLength <= limit){
        if(textLength <= 1){
            field.addEventListener("keydown",(e) => {
                if(e.keyCode === 8){
                    charactersLimit.classList.add("hide");
                }
            })
        }
        field.classList.remove("none")
        field.classList.remove("red");

        checkBtn.classList.remove("no");

        popupBox.style.bottom = '-100%';
        popupBoxText.classList.add("yellow");
        popupBoxText.classList.remove("green");
       // popupBoxText.innerText = 'Number is okay!';
    }
    
    /* checkBtn.style.opacity = '1';
        checkBtn.style.pointerEvents = 'none';
        popupBox.style.bottom = '8%';
        popupBoxText.classList.add("yellow");
        popupBoxText.classList.remove("green");
        popupBoxText.innerText = 'Number is too large!';*/

})

checkBtn.addEventListener("click",(e) => {
    if(field.value.length < 0){
        popupBox.style.bottom = '20%';
        popupBoxText.innerText = 'Enter a number first!';
        popupBoxText.classList.add("yellow");
        popupBoxText.classList.remove("green");
    }
    else{
        checkPrime();
        showFactors(field.value);
        console.log(e);
    }
})

function checkPrime(prime){
    //console.log(prime);
    const number = field.value;
    let isPrime = true;

    // Check if number is equal to 1
    if(number === 1){
        output.innerText = `<span class="yellow"><b>${number}</b> <b>is neither a prime nor a composite number</b></span>`;
    }
    //check if the number is greater than 1
    else if(number > 1){
        //looping through 2 to number -1
        for(let i = 2; i < number; i++){
            if(number%i==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            popupBox.style.bottom = '8%';
            popupBoxText.innerText = 'Done!';
            popupBoxText.classList.remove("yellow");
            popupBoxText.classList.add("green");
            output.innerHTML = `<span class="yellow"><b>${number}</b> is a <b>prime number</b></span>`;
        }
        else{
            popupBox.style.bottom = '8%';
            popupBoxText.innerText = 'Done!';
            popupBoxText.classList.add("yellow");
            popupBoxText.classList.remove("green");
            output.innerHTML = `<span class="yellow"><b>${number}</b> is not a <b>prime number</b><lolo/span>`;
        }
    }
    else{
        popupBox.style.bottom = '8%';
        popupBoxText.innerText = 'Done!';
        popupBoxText.classList.add("yellow");
        popupBoxText.classList.remove("green");
        output.innerHTML = `<span class="yellow"><b>${number}</b> is not a <b>prime number</b><lolo/span>`;
    }
}

function showFactors(n){
    let factors = [];

    for (let i =1; i <= n / 2; i++){
        if(n % i === 0){
            factors.push(i)
        }
    }

    factors.push(n)
    factorsOutput.innerHTML = `<span class="green">Factors of</span> <span class="yellow"><b>${n}</b></span> <span class="green">are</span> <span class="yellow"><b>${factors}</b></span>`;
    return factors;
}
