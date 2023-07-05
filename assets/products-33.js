const productsAddBtn = document.querySelectorAll('.related-products__formButton');
const checkoutButton = document.querySelector('.related-products__checkout');

productsAddBtn.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("test 33 is ok");
        const variantIDdrawer = el.parentNode.parentNode.querySelector('.productIdSelect--js').value;
        addToCart(variantIDdrawer, el);
    });
});

async function addToCart(variantIDdrawer, button) {
    const formData = {
        items: [
            {
                id: variantIDdrawer,
                quantity: 1,
            },
        ],
    };

    const addToCartPromise = await fetch(
        window.Shopify.routes.root + 'cart/add.js',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }
    );

    if (!addToCartPromise.ok) {
        console.error('Error:', error);
    }

    button.textContent = 'THANKS!..';

    checkoutButton.click();
}