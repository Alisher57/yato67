fetch('deliveries.xml')
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Вызов функции заполнения таблицы
        populateTable(xmlDoc);
    })
    .catch(error => console.error('Ошибка загрузки XML:', error));
function populateTable(xmlDoc) {
    tableBody.innerHTML = "";
    const deliveries = xmlDoc.getElementsByTagName("delivery");
    const types = new Set();

    for (let delivery of deliveries) {
        const name = delivery.getElementsByTagName("name")[0].textContent;
        const city = delivery.getElementsByTagName("city")[0].textContent;
        const type = delivery.getElementsByTagName("type")[0].textContent;
        const cost = delivery.getElementsByTagName("cost")[0].textContent;
        const time = delivery.getElementsByTagName("time")[0].textContent;

        types.add(type);

        if (typeFilter.value && typeFilter.value !== type) continue;

        const row = `<tr>
            <td>${name}</td>
            <td>${city}</td>
            <td>${type}</td>
            <td>${cost}</td>
            <td>${time}</td>
        </tr>`;

        tableBody.innerHTML += row;
    }

    if (typeFilter.children.length === 1) {
        types.forEach(type => {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            typeFilter.appendChild(option);
        });
    }
}
