// Product data array with color variants
const products = [
    {
        name: "Wooden Train",
        price: 24.99,
        description: "Handcrafted birch train with wheels.",
        variants: {
            Regular: "toys/train1.jpg",
            Blue: "toys/train1blue.png",
            BlueYellow: "toys/train1bluey.png",
            Green: "toys/train1green.png",
            Yellow: "toys/train1yelb.png"
        }
    },
    {
        name: "Boat",
        price: 19.99,
        description: "Smooth-sailing boat perfect for water play.",
        variants: {
            Regular: "toys/boat1.png",
            Red: "toys/boat1blred.png",
            Blue: "toys/boat1blue.png",
            Green: "toys/boat1green.png",
            Yellow: "toys/boat1yelb.png"
        }
    },
    {
        name: "Car",
        price: 17.49,
        description: "Durable and fun car made for toddlers.",
        variants: {
            Regular: "toys/car1.png",
            Blue: "toys/car1bluey.png",
            Green: "toys/car1greenbl.png",
            Red: "toys/car1red.png",
            Yellow: "toys/car1yelp.png"
        }
    },
    {
        name: "Plane",
        price: 19.99,
        description: "Zoom into the sky with this wooden airplane.",
        variants: {
            Regular: "toys/plane1.jpg",
            Blue: "toys/plane1blue.png",
            BlueYellow: "toys/plane1bluey.png",
            Green: "toys/plane1green.png",
            Yellow: "toys/plane1yelp.png"
        }
    },
    {
        name: "Block",
        price: 14.99,
        description: "Stackable fun for growing minds.",
        variants: {
            Regular: "toys/block1.png",
            Blue: "toys/block1bluey.png"
        }
    }
];

// Review array
const reviews = [
    {
        name: "Samantha",
        review: "Beautiful craftsmanship!",
        rating: 5
    },
    {
        name: "James",
        review: "Great quality and fast shipping.",
        rating: 4
    },
    {
        name: "Olivia",
        review: "My kids love these toys.",
        rating: 5
    }
];

// Display products 
const productGallery = document.getElementById("product-gallery");

products.forEach(function (product, index) {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const variantEntries = Object.entries(product.variants);
    const defaultImage = variantEntries[0][1];
    const variantOptions = variantEntries
        .map(([color, path]) => `<option value="${path}">${color}</option>`)
        .join("");

    col.innerHTML = `
    <div class="card h-100 text-center justify-content-center">
      <img src="${defaultImage}" class="card-img-top" id="product-img-${index}" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${product.price}</p>
        <select class="variant-select" onchange="changeVariant(this, ${index})">
          ${variantOptions}
        </select>
        <button class="btn btn-primary mt-2" onclick="showModal(${index})">Learn More</button>
      </div>
    </div>
  `;

    productGallery.appendChild(col);
});

// Display reviews 
const reviewSection = document.getElementById("review-section");

reviews.forEach(function (review) {
    const col = document.createElement("div");
    col.className = "col-md-4";

    let stars = "★".repeat(review.rating);

    col.innerHTML = `
    <div class="card p-3 h-100 text-center">
      <h5>${review.name}</h5>
      <p>"${review.review}"</p>
      <p style="color: gold;">${stars}</p>
    </div>
  `;

    reviewSection.appendChild(col);
});

// Change variant image
function changeVariant(selectElement, index) {
    const newImagePath = selectElement.value;
    const img = document.getElementById(`product-img-${index}`);
    img.src = newImagePath;
}

// Show modal with selected variant
function showModal(index) {
    const product = products[index];
    const selectedVariant = document.querySelectorAll(".variant-select")[index].value;

    document.getElementById("modalTitle").textContent = product.name;
    document.getElementById("modalImage").src = selectedVariant;
    document.getElementById("modalImage").alt = product.name;
    document.getElementById("modalDescription").textContent = product.description;
    document.getElementById("modalPrice").textContent = product.price.toFixed(2);

    const modal = new bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
}
