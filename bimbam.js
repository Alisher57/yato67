


    var userAge;//окно

    while (true) {
        userAge = prompt("Пожалуйста, введите ваш возраст:");
    
        if (userAge === null) {
         
            break;
        }
    
        if (userAge >= 18) {
          
            break;
        } else {
            alert("Доступ запрещен. Вы не достигли 18 лет.");
        }
        }
      
    
    
    
    
    var previousResult = 0;

    function multiplyByTenPercent() {
        var num = parseFloat(document.getElementById("number1").value);
    
        if (!isNaN(num)) {
            var result;
            
            if (num > 50000) {
                result = num * 0.15; 
            } else if (num >= 20000) {
                result = num * 0.2; 
            } else {
                result = num * 0.25; 
            }
    
            previousResult += result;
            document.getElementById("result").textContent = "Результат: " + previousResult;
        } else {
            alert("Пожалуйста, введите корректное число.");
        }
        
    }

    function buttonHover() {
        alert("Навели мышь на кнопку 'комиссия'.");
    }
    
    
    
    
    var popularDestinations = ["Горный туризм", "Пляжный отдых", "Экскурсии в исторические места"];
    popularDestinations.push("Круизы");
    for (var i = 0; i < popularDestinations.length; i++) {
        console.log(popularDestinations[i]);
    }

    var travelOffer = {
        service: "Качественный сервис",
        adventures: "Незабываемые приключение",
        yearsOfService: 10,
        yearsOfService2: 20,
        yearsOfService3: 30
    };
    
    var yearsOfServiceArray = []; 
    
    yearsOfServiceArray.push(travelOffer.yearsOfService); 
    
    console.log(yearsOfServiceArray); 
    
   
    
    

    
console.log("Предложение от туристической компании:");
console.log("Сервис:", travelOffer.service);
console.log("Приключения:", travelOffer.adventures);
console.log("Обслуживание с клиентами (лет):", travelOffer.yearsOfService);


travelOffer.service = "Превосходный сервис"; 


travelOffer.rating = "5 звезд"; 


console.log("Обновленное предложение от туристической компании:");
console.log("Сервис:", travelOffer.service);
console.log("Приключения:", travelOffer.adventures);
console.log("Обслуживание с клиентами (лет):", travelOffer.yearsOfService);
console.log("Рейтинг:", travelOffer.rating);


delete travelOffer.adventures; 

console.log("Свойство adventures после удаления:", travelOffer.adventures);
//переборщик//
for (var key in travelOffer) {
    if (travelOffer.hasOwnProperty(key)) {
        console.log("Свойство:", key, "Значение:", travelOffer[key]);
    }
}




var canvas = document.getElementById("myCanvas");
var zxc = canvas.getContext("2d");
var plane = new Image();
plane.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKuGcVdmPgmlmOSKpd5DPRU2ZtyY_glzxvw&usqp=CAU';

var planeX = 0; // начальная позиция самолета по оси X
var planeY = 0; // начальная позиция самолета по оси Y

function animatePlane() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистите холст

    // Рисуйте самолет на новых координатах
    ctx.drawImage(plane, planeX, planeY);

    // Увеличьте или уменьшите координаты для движения самолета
    planeX += 2; // Например, двигайте самолет вправо
    planeY += 1; // И вниз

    // Проверьте, если самолет вышел за пределы холста, и перезапустите его с начальных координат
    if (planeX > canvas.width) {
        planeX = -plane.width;
    }
    if (planeY > canvas.height) {
        planeY = -plane.height;
    }
}

// Установите интервал для вызова функции анимации
setInterval(animatePlane, 30);
*/
var userAge;//окно

while (true) {
    userAge = prompt("Пожалуйста, введите ваш возраст:");

    if (userAge === null) {
     
        break;
    }

    if (userAge >= 18) {
      
        break;
    } else {
        alert("Доступ запрещен. Вы не достигли 18 лет.");
    }
    }
  




var previousResult = 0;

function multiplyByTenPercent() {
    var num = parseFloat(document.getElementById("number1").value);

    if (!isNaN(num)) {
        var result;
        
        if (num > 50000) {
            result = num * 0.15; 
        } else if (num >= 20000) {
            result = num * 0.2; 
        } else {
            result = num * 0.25; 
        }

        previousResult += result;
        document.getElementById("result").textContent = "Результат: " + previousResult;
    } else {
        alert("Пожалуйста, введите корректное число.");
    }
    
}

/*function buttonHover() {
    alert("Навели мышь на кнопку 'комиссия'.");
}*/




var popularDestinations = ["Горный туризм", "Пляжный отдых", "Экскурсии в исторические места"];
popularDestinations.push("Круизы");
for (var i = 0; i < popularDestinations.length; i++) {
    console.log(popularDestinations[i]);
}

var travelOffer = {
    service: "Качественный сервис",
    adventures: "Незабываемые приключение",
    yearsOfService: 10,
    yearsOfService2: 20,
    yearsOfService3: 30
};

var yearsOfServiceArray = []; 

yearsOfServiceArray.push(travelOffer.yearsOfService); 

console.log(yearsOfServiceArray); 






console.log("Предложение от туристической компании:");
console.log("Сервис:", travelOffer.service);
console.log("Приключения:", travelOffer.adventures);
console.log("Обслуживание с клиентами (лет):", travelOffer.yearsOfService);


travelOffer.service = "Превосходный сервис"; 


travelOffer.rating = "5 звезд"; 


console.log("Обновленное предложение от туристической компании:");
console.log("Сервис:", travelOffer.service);
console.log("Приключения:", travelOffer.adventures);
console.log("Обслуживание с клиентами (лет):", travelOffer.yearsOfService);
console.log("Рейтинг:", travelOffer.rating);


delete travelOffer.adventures; 

console.log("Свойство adventures после удаления:", travelOffer.adventures);
//переборщик//
for (var key in travelOffer) {
if (travelOffer.hasOwnProperty(key)) {
    console.log("Свойство:", key, "Значение:", travelOffer[key]);
}
}

var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        var traveler = new Image();
        traveler.src = 'https://cdn-icons-png.flaticon.com/512/2070/2070691.png';
        var mountains = new Image();
        mountains.src = 'https://img.freepik.com/premium-vector/snow-capped-mountain-peak-and-valley_202271-2437.jpg';
        var sun = new Image();
        sun.src = 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-beautiful-sun-image_1378398.jpg';
        var travelerX = 0;
        var isJumping = false;
        var jumpHeight = 50;

        function drawScene() {
            // Рисуем фон - горы и солнце
            ctx.drawImage(mountains, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(sun, 50, 50, 100, 100);

            // Рисуем путешественника
            ctx.drawImage(traveler, travelerX, isJumping ? 200 - jumpHeight : 200, 50, 50);
        }

        function animateTraveler() {
            // Если путешественник достиг цели, начинаем прыгать
            if (travelerX >= canvas.width - 50) {
                isJumping = true;
            }

            // Если путешественник прыгает, увеличиваем высоту прыжка
            if (isJumping) {
                jumpHeight -= 2;
                if (jumpHeight <= 0) {
                    isJumping = false;
                    jumpHeight = 50;
                }
            } else {
                // Смещаем путешественника вправо
                travelerX += 2;
            }

            // Очищаем холст и рисуем сцену заново
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawScene();
        }

        function startAnimation() {
            var animationInterval = setInterval(animateTraveler, 30);

            // Добавьте код для остановки анимации, например, после определенного времени
            setTimeout(function () {
                clearInterval(animationInterval);
            }, 10000);
        }

        // Отображаем начальный пейзаж
        drawScene();












/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var traveler = new Image();
traveler.src = 'https://cdn-icons-png.flaticon.com/512/2070/2070691.png';
var mountains = new Image();
mountains.src = 'https://img.freepik.com/premium-vector/snow-capped-mountain-peak-and-valley_202271-2437.jpg';
var sun = new Image();
sun.src = 'https://png.pngtree.com/element_our/20190602/ourlarge/pngtree-beautiful-sun-image_1378398.jpg';
var travelerX = 0;

function drawScene() {
    // Рисуем фон - горы и солнце
    ctx.drawImage(mountains, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(sun, 50, 50, 100, 100);

    // Рисуем путешественника
    ctx.drawImage(traveler, travelerX, 250, 50, 50);
}

function animateTraveler() {
    // Смещаем путешественника вправо
    travelerX += 2;

    if (travelerX > canvas.width) {
        travelerX = -50;
    }

    // Очищаем холст и рисуем сцену заново
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScene();
}

function startAnimation() {
    var animationInterval = setInterval(animateTraveler, 30);

    // Добавьте код для остановки анимации, например, после определенного времени
    setTimeout(function () {
        clearInterval(animationInterval);
    }, 5000);
}

// Отображаем начальный пейзаж
drawScene();
*/

var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
var currentSceneIndex = 0;
var scenes = [
    drawBeachScene,
    drawMountainScene,
    drawCruiseScene,
];

var cursorImage = new Image();
cursorImage.src = 'path_to_cursor_image.png'; // Замените на путь к изображению курсора
var cursorX = 0;
var cursorY = 0;

function drawBeachScene() {
    // Рисуем пляж (песок и море)
    ctx.fillStyle = "#F3DA65"; // цвет песка
    ctx.fillRect(0, 200, 400, 200);

    ctx.fillStyle = "#00A1DE"; // цвет моря
    ctx.fillRect(0, 0, 400, 200);
}

function drawMountainScene() {
    // Рисуем горы (серый фон)
    ctx.fillStyle = "#B4A7D6"; // серый цвет гор
    ctx.fillRect(0, 0, 400, 400);
}

function drawCruiseScene() {
    // Рисуем круиз (море и корабль)
    ctx.fillStyle = "#00A1DE"; // цвет моря
    ctx.fillRect(0, 0, 400, 200);

    // Рисуем корабль
    ctx.fillStyle = "#FFFFFF"; // цвет корабля
    ctx.fillRect(150, 150, 100, 50);
}

function changeScenery() {
    currentSceneIndex = (currentSceneIndex + 1) % scenes.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scenes[currentSceneIndex]();
}

function updateCursor(event) {
    cursorX = event.clientX - canvas.getBoundingClientRect().left;
    cursorY = event.clientY - canvas.getBoundingClientRect().top;
}

function drawCursor() {
    ctx.drawImage(cursorImage, cursorX - cursorImage.width / 2, cursorY - cursorImage.height / 2);
}

// Обработчики событий для обновления курсора
canvas.addEventListener("mousemove", updateCursor);
canvas.addEventListener("mouseout", () => {
    cursorX = -100; // Скрываем курсор за пределами холста при уходе с него
    cursorY = -100;
});

// Каждые 3 секунды меняйте сцену между пляжем, горами и круизом
setInterval(changeScenery, 3000);

// Рисуем начальный пейзаж и анимированный курсор
scenes[currentSceneIndex]();
requestAnimationFrame(drawCursor); // Запускаем анимацию курсора