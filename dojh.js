// Функция для генерации случайных цифр
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для заполнения таблицы случайными значениями
function fillTableWithRandomData() {
    const table = document.getElementById('myTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const weightCell = rows[i].getElementsByTagName('td')[2];
        const priceCell = rows[i].getElementsByTagName('td')[3];

        // Генерация случайных значений для веса (кг) и цены (тенге)
        const randomWeight = getRandomNumber(1, 20);
        const randomPrice = getRandomNumber(1000, 2500);

        weightCell.textContent = randomWeight;
        priceCell.textContent = randomPrice;
    }
}

// Задержка в 15 секунд перед заполнением и сортировкой
setTimeout(function () {
    fillTableWithRandomData();

    // Сортировка таблицы по весу (кг)
    const table = document.getElementById('myTable');
    const rows = Array.from(table.getElementsByTagName('tr')).slice(1);

    rows.sort((a, b) => {
        const weightA = parseInt(a.getElementsByTagName('td')[2].textContent);
        const weightB = parseInt(b.getElementsByTagName('td')[2].textContent);

        return weightA - weightB;
    });

    for (const row of rows) {
        table.appendChild(row);
    }
}, 15000); // 15 секунд задержка
