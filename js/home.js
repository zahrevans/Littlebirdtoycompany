// Remove the first carousel if it exists
document.addEventListener("DOMContentLoaded", function () {
    // Remove the first carousel/main if present
    const oldCarousel = document.getElementById("carousel");
    if (oldCarousel) oldCarousel.parentElement.remove();

    // Find the row to insert new carousels
    const row = document.querySelector(".row.justify-content-center");
    if (!row) return;

    // For each product, create a carousel using color1
    products.forEach((product, idx) => {
        // Create column
        const col = document.createElement("div");
        col.className = "col-md-4 col-12 border p-3 mb-2 text-center";

        // Carousel HTML (showing only color1 image)
        col.innerHTML = `
            <div class="product-carousel" id="product-carousel-${idx}">
                <img src="toys/${product.colors.color1}" alt="${product.product}" class="img-fluid mb-2" />
                <div class="fw-bold">${product.product.charAt(0).toUpperCase() + product.product.slice(1)}</div>
            </div>
        `;

        row.appendChild(col);
    });
});