const products = [
    {
        product: "block",
        colors: {
            color1: "block1.jpg",
            color2: "block1bluey.jpg",
            color3: null,
            color4: null,
            color5: null
        }
    },
    {
        product: "boat",
        colors: {
            color1: "boat1.jpg",
            color2: "boat1blred.jpg",
            color3: "boat1blue.jpg",
            color4: "boat1green.jpg",
            color5: "boat1yelb.jpg"
        }
    },
    {
        product: "car",
        colors: {
            color1: "car1.jpg",
            color2: "car1bluey.jpg",
            color3: "car1greenbl.jpg",
            color4: "car1red.jpg",
            color5: "car1yelb.jpg"
        }
    },
    {
        product: "plane",
        colors: {
            color1: "plane1.jpg",
            color2: "plane1bluey.jpg",
            color3: "plane1blue.jpg",
            color4: "plane1green.jpg",
            color5: "plane1yelb.jpg"
        }
    },
    {
        product: "train",
        colors: {
            color1: "train1.jpg",
            color2: "train1blred.jpg",
            color3: "train1blue.jpg",
            color4: "train1green.jpg",
            color5: "train1yelb.jpg"
        }
    }
];

// Carousel Navigation Logic
let currentPosition = 1;
const totalItems = 5;

function updateCarousel(position) {
    // Ensure position stays within bounds
    if (position < 1) position = totalItems;
    if (position > totalItems) position = 1;

    currentPosition = position;

    // Check the corresponding radio button
    document.getElementById(`pos${position}`).checked = true;
}

// Previous button event listener
document.getElementById('prevBtn').addEventListener('click', function () {
    updateCarousel(currentPosition - 1);
});

// Next button event listener
document.getElementById('nextBtn').addEventListener('click', function () {
    updateCarousel(currentPosition + 1);
});

// Update current position when radio buttons are clicked
document.querySelectorAll('input[name="position"]').forEach((radio, index) => {
    radio.addEventListener('change', function () {
        if (this.checked) {
            currentPosition = index + 1;
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function (event) {
    // Only navigate if modal is not open
    if (!document.body.classList.contains('modal-active')) {
        if (event.key === 'ArrowLeft') {
            updateCarousel(currentPosition - 1);
        } else if (event.key === 'ArrowRight') {
            updateCarousel(currentPosition + 1);
        }
    }
});

// Add click event listeners to carousel cards
document.querySelectorAll('.carousel-card').forEach(card => {
    card.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        const product = products[index];

        if (product) {
            // Update modal title
            document.getElementById('modal-title').textContent = product.product.charAt(0).toUpperCase() + product.product.slice(1);

            // Set initial image to first color (assuming toys folder)
            const firstColor = Object.values(product.colors).find(color => color !== null);
            document.getElementById('modal-image').src = `toys/${firstColor}`;
            document.getElementById('modal-image').alt = product.product;

            // Generate color selector thumbnails
            const colorContainer = document.getElementById('color-options');
            colorContainer.innerHTML = '';

            Object.entries(product.colors).forEach(([colorKey, colorValue], colorIndex) => {
                if (colorValue !== null) {
                    const colorOption = document.createElement('div');
                    colorOption.className = 'color-option' + (colorIndex === 0 ? ' selected' : '');
                    colorOption.innerHTML = `<img src="toys/${colorValue}" alt="${product.product} ${colorKey}" />`;

                    // Add click event to change main image
                    colorOption.addEventListener('click', function () {
                        // Remove selected class from all options
                        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                        // Add selected class to clicked option
                        this.classList.add('selected');
                        // Update main modal image
                        document.getElementById('modal-image').src = `toys/${colorValue}`;
                    });

                    colorContainer.appendChild(colorOption);
                }
            });

            // Show modal
            document.getElementById('modal-container').className = 'four';
            document.body.classList.add('modal-active');
        }
    });
});

// Close modal function
function closeModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.add('out');
    document.body.classList.remove('modal-active');

    setTimeout(() => {
        modal.className = '';
    }, 500);
}

// Close modal when clicking close button
document.getElementById('modal-close-btn').addEventListener('click', closeModal);

// Close modal when clicking on background
document.getElementById('modal-container').addEventListener('click', function (e) {
    if (e.target === this || e.target.classList.contains('modal-background')) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// View Details Button - you can add your page navigation here
document.getElementById('view-details-btn').addEventListener('click', function () {
    // Add your navigation logic here
    // Example: window.location.href = 'product-details.html';
    console.log('Navigate to details page');
});
