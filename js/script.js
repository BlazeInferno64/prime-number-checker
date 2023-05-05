const btn = document.querySelector(".btn");
const number = document.getElementById("input");
const output = document.getElementById("output");
        
// Listen for click event
btn.onclick = function (e) {

    // Create span element
    let ripple = document.createElement("span");

    // Add ripple class to span
    ripple.classList.add("ripple");

    // Add span to the button
    this.appendChild(ripple);

    // Get position of X
    let x = e.clientX - e.target.offsetLeft;

    // Get position of Y
    let y = e.clientY - e.target.offsetTop;

    // Position the span element
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Remove span after 0.3s
    setTimeout(() => {
        ripple.remove();
    }, 300);
    let isPrime = true;

    if (number.value === 1){
        //alert("1 is neither prime nor composite number!!");
        output.innerText = "1 is neither prime nor composite number";
        output.className = 'output2';
    }
    else if (number.value > 1){
        for (let i =2; i < number.value; i++){
            if (number.value % i == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            output.className = 'output1';
            number.className = 'input1';
            output.innerText = `${number.value} is prime`;
            //alert(`${number.value} is prime`);

        }
        else{
            output.className = 'output2';
            number.className = 'input2';
            output.innerText = `${number.value} is not prime`;
            //alert(`${number.value} is not prime`);
        }
    }
    else{
        output.className = 'output2';
        output.innerText = 'First enter a number to check'
        //alert("The number you have entered is not a prime number");
    }
};
