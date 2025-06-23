const products = [
    {
        product: "block",
        colors: {
            color1: "block1.png",
            color2: "block1bluey.png",
            color3: null,
            color4: null,
            color5: null
        }
    },
    {
        product: "boat",
        colors: {
            color1: "boat1.png",
            color2: "boat1blred.png",
            color3: "boat1blue.png",
            color4: "boat1green.png",
            color5: "boat1yelb.png"
        }
    },
    {
        product: "car",
        colors: {
            color1: "car1.png",
            color2: "car1bluey.png",
            color3: "car1greenbl.png",
            color4: "car1red.png",
            color5: "car1yelb.png"
        }
    },
    {
        product: "plane",
        colors: {
            color1: "plane1bluey.png", // Placeholder for plane1.png
            color2: "plane1bluey.png",
            color3: "plane1blue.png",
            color4: "plane1green.png",
            color5: "plane1yelb.png"
        }
    },
    {
        product: "train",
        colors: {
            color1: "train1blred.png", // Placeholder for train1.png
            color2: "train1blred.png",
            color3: "train1blue.png",
            color4: "train1green.png",
            color5: "train1yelb.png"
        }
    }
];

// Carousel Navigation Logic
let currentPosition = 1;
const totalItems = 5;

function updateCarousel(position) {
    if (position < 1) position = totalItems;
    if (position > totalItems) position = 1;
    currentPosition = position;

    // Check the corresponding radio button
    document.getElementById('pos' + position).checked = true;

    // Update carousel CSS variable
    document.querySelector('#carousel').style.setProperty('--position', position);
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
            updateCarousel(currentPosition);
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function (event) {
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

            // Set initial image to first color
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
                        document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
                        this.classList.add('selected');
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

// View Details Button
document.getElementById('view-details-btn').addEventListener('click', function () {
    console.log('Navigate to details page');
});