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