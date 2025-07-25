// Script for navigation bar
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        const productEl = this.closest('.pro');

        const product = {
            id: productEl.dataset.id,
            brand: productEl.dataset.brand,
            title: productEl.dataset.title,
            price: productEl.dataset.price,
            img: productEl.dataset.img
        };

        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));

        alert("Product added to cart!");
        let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        document.addEventListener("DOMContentLoaded", () => {
            const cartButtons = document.querySelectorAll(".add-to-cart");
        
            cartButtons.forEach(button => {
                button.addEventListener("click", (e) => {
                    e.preventDefault();
                    const product = e.target.closest(".pro");
                    const productId = product.getAttribute("data-id");
                    const brand = product.getAttribute("data-brand");
                    const title = product.getAttribute("data-title");
                    const price = product.getAttribute("data-price");
                    const img = product.getAttribute("data-img");
        
                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                    cart.push({ id: productId, brand, title, price, img, quantity: 1 });
                    localStorage.setItem("cart", JSON.stringify(cart));
        
                    alert("Product added to cart!");
                });
            });
        });
        

    });
});
