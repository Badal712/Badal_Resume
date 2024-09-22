//for language progress bar
window.onload = function () {
    let bar = document.querySelectorAll('.bar');
    bar.forEach((progress) => {
        let value = progress.getAttribute('data-value');
        progress.style.width = `${value}%`;
        let count = 0;
        let progressAnimation = setInterval (() => {
            count++;
            progress.setAttribute('data-text',`${count}%`);
            if (count >= value) {
                clearInterval(progressAnimation);
            };
        }, 15);
    });
};


// Show popup for "Lecturer" when "Read more" is clicked
document.querySelector('.view-more').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';  // Show the Lecturer popup window
});

// Close popup for "Lecturer" when "×" is clicked
document.querySelector('.close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';  // Hide the Lecturer popup window
});

// Show popup for "Lab Assistant" when "Read more" is clicked
document.querySelector('.read-more').addEventListener('click', function() {
  document.getElementById('popup1').style.display = 'flex';  // Show the Lab Assistant popup window
});

// Close popup for "Lab Assistant" when "×" is clicked
document.querySelector('.close-popup1').addEventListener('click', function() {
  document.getElementById('popup1').style.display = 'none';  // Hide the Lab Assistant popup window
});



//Circular Progress Bar for HTML % increased
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 80){
    clearInterval();
  }
  else{
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 26);


//Circular Progress Bar for CSS % increased
let number2 = document.getElementById("number2");
let counter1 = 0;
setInterval(() => {
  if (counter1 == 75){
    clearInterval();
  }
  else{
    counter1 += 1;
    number2.innerHTML = counter1 + "%";
  }
}, 27);


//Circular Progress Bar for JavaScript % increased
let number3 = document.getElementById("number3");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 60){
    clearInterval();
  }
  else{
    counter2 += 1;
    number3.innerHTML = counter2 + "%";
  }
}, 33);


//Circular Progress Bar for MongoDB % increased
let number4 = document.getElementById("number4");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 60){
    clearInterval();
  }
  else{
    counter3 += 1;
    number4.innerHTML = counter3 + "%";
  }
}, 33);


//Circular Progress Bar for MongoDB % increased
let number5 = document.getElementById("number5");
let counter4 = 0;
setInterval(() => {
  if (counter4 == 50){
    clearInterval();
  }
  else{
    counter4 += 1;
    number5.innerHTML = counter4 + "%";
  }
}, 40);