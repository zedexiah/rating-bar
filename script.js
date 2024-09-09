document.addEventListener('DOMContentLoaded', () => {
    const ratingBar = document.querySelector('.rating-bar');
    const ratingFill = document.querySelector('.rating-fill');
    const ratingNumbers = document.querySelector('.rating-numbers');
    const ratingValue = document.getElementById('rating-value');
    const container = document.querySelector('.container');

    // Create rating numbers
    for (let i = 1; i <= 10; i++) {
        const number = document.createElement('span');
        number.classList.add('rating-number');
        number.textContent = i;
        number.addEventListener('click', () => setRating(i));
        ratingNumbers.appendChild(number);
    }

    function setRating(value) {
        ratingValue.textContent = value;
        ratingFill.style.width = `${value * 10}%`;
        
        // Update active class
        document.querySelectorAll('.rating-number').forEach((num, index) => {
            if (index < value) {
                num.classList.add('active');
            } else {
                num.classList.remove('active');
            }
        });

        // Show thank you message for ratings 5 and above
        if (value >= 5) {
            showThankYouMessage();
        } else {
            removeThankYouMessage();
        }
    }

    function showThankYouMessage() {
        // Remove existing message if any
        removeThankYouMessage();

        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you very much for rating my work!';
        thankYouMessage.classList.add('thank-you-message');
        container.appendChild(thankYouMessage);
    }

    function removeThankYouMessage() {
        const existingMessage = document.querySelector('.thank-you-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    // Allow clicking on the rating bar
    ratingBar.addEventListener('click', (e) => {
        const rect = ratingBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const rating = Math.ceil((x / width) * 10);
        setRating(rating);
    });
});
