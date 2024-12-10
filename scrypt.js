

function calculatePrice() {
    const regionSelect = document.getElementById("regionSelect");
    const serviceSelect = document.getElementById("serviceSelect");
    const weightInput = document.getElementById("weightInput");
    const result = document.getElementById("result");

    const region = regionSelect.value;
    const service = serviceSelect.value;
    const weight = parseFloat(weightInput.value);

    const priceData = {
        ВКО: {
            Эконом: [1000, 1200],
            Стандарт: [1500, 1700],
            Экспресс: [2000, 2200]
        },
        Алматинская: {
            Стандарт: [1250, 1450],
            Экспресс: [1900, 2100]
        }
    };

    const basePrice = priceData[region][service][0]; // Базовая цена
    const discountWeight = 10;

    if (weight > discountWeight) {
        // Применяем скидку 10% для веса более 10 кг.
        const discountedPrice = basePrice - (basePrice * 0.1);
        const totalPrice = discountedPrice * weight;
        result.innerHTML = `Цена услуги: ${totalPrice} тенге (со скидкой 10%)`;
    } else {
        const totalPrice = basePrice * weight;
        result.innerHTML = `Цена услуги: ${totalPrice} тенге`;
    }
}



function showMessage() {
    alert("Привет, это сообщение!");
}

// Устанавливаем количество повторений цикла
const numberOfRepetitions = 1;

// Цикл для вызова функции showMessage заданное количество раз
for (let i = 0; i < numberOfRepetitions; i++) {
    showMessage();
}





