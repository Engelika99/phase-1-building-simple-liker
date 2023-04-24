// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like-glyph');
const error = document.querySelector('#modal');
const errorMessage = document.querySelector('#modal-message');

error.classList.add('hidden');

function clickLike(event) {
  const hearts = event.target;
  mimicServerCall()
    .then(() => {
      hearts.classList.toggle('activated-heart');
      if (hearts.classList.contains('activated-heart')) {
        hearts.innerText = '♥';
      } else {
        hearts.innerText = '♡';
      }
    })
    .catch(() => {
      errorMessage.innerText = "Sorry! Please try again.";
      error.classList.remove('hidden');
      setTimeout(() => {
        error.classList.add('hidden');
      }, 3000);
    });
}

for (const button of likes) {
  button.addEventListener('click', clickLike);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
