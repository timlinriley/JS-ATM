// Create user object
   let user = {
        name: "Riley",
        pin: 1234,
        balance: 500
   }

function clearDisplay () {
    let display1 = document.querySelector('.displayBox').innerHTML = "";
    display1.remove;
}

 // use keypad element to enter pin
 const addToDisplayBox = (number) => {
    let display = document.querySelector('.displayBox')
    display.append(number)
    console.log(addToDisplayBox)
   }

function onEnter () {
    
    let display2 = document.querySelector('.displayBox').innerHTML = 'Success';
     display2.append
     }
// // Check if pin matches pin stored in user database
// const checkPin = () =>{
//     if (??? === user.pin){
//         pinAccepted()
//     } // if no match enter pin again
//     else {
//         alert("Pin is incorrect. Please try again")
//     }
//  }
//  // if pin entered successfully display buttons:
     function pinAccepted () {
      let buttons = document.querySelector('.withdraw');
     if (buttons.style.display === 'none'){
        buttons.style.display === 'block';
     } else {
        buttons.style.display = "none";
     }
     }
     const but = document.querySelector('.buttonE');
     but.addEventListener("click", pinAccepted)
// // if check balance display user current balance
//     //check balance
 function checkBalance () {
    let display = document.querySelector('.displayBox').innerHTML = `Your available balance is:<br> $ ${user.balance}`;
    display.append
 }

//  // Withdraw   
//  // if withdraw only allow withdrawal <= user balance.
//      // if requested more than userbalance display 'insufficient funds'
//      // if withdrawn amount <= user balance display 'dispensing funds'
//      // only allow withdrawal amount divisible by 20
//      // 
// function withdraw () {
//     if (amountrequested <= user.balance){
//         amount requested -= user.balance;
//         let display4 = document.querySelector('.displayBox').innerHTML = `Cash is being dispensed. New balance is ${user.balance}`;
//      display4.append
//     } else if (amountrequested > user.balance){
//     let display4 = document.querySelector('.displayBox').innerHTML = 'Insufficient Funds!';
//      display4.append
//    } else if (amountrequested % 20 !== 0){
//     let display4 = document.querySelector('.displayBox').innerHTML = 'Must enter an amount in multiples of $20';
//      display4.append
//    }
// }

// const pressEnter = (enter) => {
//     let enter = document.querySelector('.displayBox')
//     display.append('The pin is correct')
// }
// const onEnter = document.getElementsByClassName('.buttonE');
// onEnter.addEventListener('click', pressEnter);


//   let buttonE = document.getElementById('buttonE');
//   buttonE.innerHTML = "Success!";
//  function onEnter () {
//     let display = document.querySelector('.displayBox').innerHTML = 'Success';
//      display.append
//      }
