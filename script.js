var container = document.getElementById("main");
var message = document.getElementById("msg");
function game() {
  var randomNumber = Math.ceil(Math.random() * 4);
  if (randomNumber === 1) {
  container.innerHTML = `  <div class="card animate__animated animate__flipInY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYKHZl7nz9-kLIJzOWDOpOShFPlB4q-_jGQ&s" alt=""></div> `;
  displayFinalWinner("Okey! let's play again");
  } else if (randomNumber === 2) {
    console.log(randomNumber);
    container.innerHTML = ` <div class="card animate__animated animate__flipInY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8oVdhD1bejBW3SKbjDo1jml5LkFvyyLmQg&s" alt=""></div>`;
    displayFinalWinner("Congratulations! You won the game!");
    
  
  } else if (randomNumber === 3) {
    console.log(randomNumber);
    container.innerHTML = `<div class="card animate__animated animate__flipInY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmr7E4JyVkltVOeF3-a8-YD605oZXQZ2GMZXnIeKuFPGHHnYcftbG6RmpszR5jj7oRdE&usqp=CAU" alt=""></div>`;
    displayFinalWinner("Oops! You lost the game!");
    
  } else if(randomNumber===4){
    console.log(randomNumber);
    container.innerHTML=`<div class="card animate__animated animate__flipInY"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNHlCAhNnlQ4pCIluYMG_9EPMnBMPrVovkg&s" alt=""></div>`;
    displayFinalWinner("Okey! let's play again");
  }else{}
  }
function reset(params) {
  document.getElementById("main").innerHTML=`<div class="card animate__animated animate__flip"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNHlCAhNnlQ4pCIluYMG_9EPMnBMPrVovkg&s" alt=""></div>`
  message.innerHTML= '';
}
var displayFinalWinner = (messageText) => {
  message.style.display = "block";
  message.innerHTML = messageText;
};


