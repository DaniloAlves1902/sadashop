window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.parentNode.querySelector('.quantity-input');
        let value = parseInt(input.value);

        if (this.textContent === '+' && value < 10) {
            input.value = value + 1;
        } else if (this.textContent === '-' && value > 1) {
            input.value = value - 1;
        }

        // Aqui você pode adicionar lógica para atualizar preços
        updateCartTotals();
    });
});

document.querySelectorAll('.remove-item').forEach(item => {
    item.addEventListener('click', function () {
        this.closest('.cart-item').classList.add('animate__animated', 'animate__fadeOutRight');
        setTimeout(() => {
            this.closest('.cart-item').remove();
            updateCartTotals();
            checkEmptyCart();
        }, 500);
    });
});

function updateCartTotals() {
    // Em uma aplicação real, aqui você calcularia os valores baseados nos itens
    console.log('Atualizando totais...');
}


function checkEmptyCart() {
    const cartItems = document.querySelectorAll('.cart-item');
    const cartContainer = document.querySelector('.cart-container');
    const emptyCart = document.querySelector('.empty-cart').parentNode;

    if (cartItems.length === 0) {
        cartContainer.style.display = 'none';
        emptyCart.style.display = 'block';
    }
}

document.querySelector('.btn-outline-danger').addEventListener('click', function () {
    document.querySelectorAll('.cart-item').forEach(item => {
        item.classList.add('animate__animated', 'animate__fadeOut');
    });

    setTimeout(() => {
        document.querySelectorAll('.cart-item').forEach(item => {
            item.remove();
        });
        checkEmptyCart();
    }, 500);
});