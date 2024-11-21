document.addEventListener("DOMContentLoaded", function() {
    // Змінні для кошика
    const cartItems = [];
    const cartModal = document.getElementById("cart-modal");
    const cartButton = document.getElementById("cart-button");
    const closeCart = document.getElementById("close-cart");
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");
    const discountCodeInput = document.getElementById("discount-code");
    const applyDiscountButton = document.getElementById("apply-discount");
    const discountMessage = document.getElementById("discount-message");

    let discount = 0;  // Змінна для знижки (відсотки)

    // Функція для додавання товару в кошик
    window.addToCart = function(productName, productPrice, productImage) {
        if (typeof productName === 'string' && typeof productPrice === 'number' && typeof productImage === 'string') {
            cartItems.push({ name: productName, price: productPrice, image: productImage });
            document.getElementById("cart-count").innerText = cartItems.length;
            updateCart();
        } else {
            console.error('Invalid product data:', productName, productPrice, productImage);
        }
    }

    // Функція для видалення товару з кошика
    function removeFromCart(index) {
        cartItems.splice(index, 1);
        document.getElementById("cart-count").innerText = cartItems.length;
        updateCart();
    }

    // Оновлення списку товарів у модальному вікні кошика
    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                ${item.name} - ${item.price} грн
                <button class="remove-button" data-index="${index}">Видалити</button>
            `;
            total += item.price;
            cartList.appendChild(listItem);
        });

        // Обчислення знижки (якщо знижка більше за 0)
        let discountAmount = 0;
        if (discount > 0) {
            discountAmount = (total * discount) / 100;  // Відсоток від загальної суми
        }
        
        let totalWithDiscount = total - discountAmount;  // Загальна сума з урахуванням знижки
        cartTotal.innerText = totalWithDiscount.toFixed(2);  // Виводимо суму з 2 знаками після коми
    }

    // Відкриття кошика
    cartButton.addEventListener("click", function() {
        cartModal.style.display = "block";
    });

    // Закриття кошика
    closeCart.addEventListener("click", function() {
        cartModal.style.display = "none";
    });

    // Закриття при кліку за межами модального вікна
    window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    }

    // Обробка кліку на кнопку видалення товару
    cartList.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-button")) {
            const index = event.target.getAttribute("data-index");
            removeFromCart(index);
        }
    });

    // Обробка кліку на кнопку оплати
    checkoutButton.addEventListener("click", function() {
        alert("Оплата успішна!");
        // Тут можна додати логіку для обробки оплати
    });

    // Обробка введення коду знижки
    applyDiscountButton.addEventListener("click", function() {
        const discountCode = discountCodeInput.value.trim();

        // Логіка для перевірки правильності коду знижки
        if (discountCode === "Diassont") {
            discount = 10; // 10% знижка
            discountMessage.innerText = "Знижка застосована: 10%";
            discountMessage.style.color = "green";
        } else if (discountCode === "-winl-") {
            discount = 10; // 10% знижка
            discountMessage.innerText = "Знижка застосована: 10%";
            discountMessage.style.color = "green";
        } else if (discountCode === "BlackFriday") {
            discount = 20; // 20% знижка
            discountMessage.innerText = "Знижка застосована: 20%";
            discountMessage.style.color = "black";
        } else {
            discount = 0;
            discountMessage.innerText = "Невірний код знижки.";
            discountMessage.style.color = "red";
        }

        // Оновлення кошика після застосування знижки
        updateCart();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Вибираємо всі зображення всередині карток товарів
    const productImages = document.querySelectorAll('.product-image');
  
    // Додаємо обробник події для збільшення при наведенні
    productImages.forEach(image => {
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // збільшує розмір зображення на 10%
        image.style.transition = 'transform 0.3s ease-in-out'; // плавна анімація
      });
  
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // повертає до початкового розміру
      });
    });
  });
