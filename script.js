
// Завдання 1



// var hamletLine = 'To be, or not to be, that is the question...';


// function typeText(text, index) {
//     if (index < text.length) {
//         document.write(text.charAt(index));
//         setTimeout(function () {
//             typeText(text, index + 1);
//         }, Math.random() * (300 - 200) + 200);
//     } else {
//         document.write('<br>William Shakespeare, from «Hamlet»');
//     }
// }
// typeText(hamletLine,0);



// Завдання 2




// document.addEventListener('DOMContentLoaded', function () {
//     function updateTimer() {
//         var currentDate = new Date();
//         var nextYear = new Date(currentDate.getFullYear() + 1, 0, 1);
//         var timeLeft = nextYear - currentDate;
//         var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         document.getElementById('days').textContent = (days < 10 ? '0' : '') + days;
//         document.getElementById('hours').textContent = (hours < 10 ? '0' : '') + hours;
//         document.getElementById('minutes').textContent = (minutes < 10 ? '0' : '') + minutes;
//         document.getElementById('seconds').textContent = (seconds < 10 ? '0' : '') + seconds;
//     }

//     setInterval(updateTimer, 1000);

//     updateTimer();
// });



// Завдання 3




// var list = {
//     values: ['apple','ice cream','kiwi','potato','sour cream','tomato'],
//     printList: function () {
//         var sortedValues = this.values.slice().sort();
        
//         document.write('<ol>');
//         for (var i = 0; i < sortedValues.length; i++) {
//             document.write('<li>' + sortedValues[i] + '</li>');
//         }
//         document.write('</ol>');
//     },
//     add: function (product) {
//         this.values.push(product);
//     }
// };

// document.write('<h3>Початковий список продуктів:</h3>');
// list.printList();

// list.add('pumpkin');

// document.write('<h3>Список продуктів після додавання груші:</h3>');
// list.printList();

// list.values = ['C#','HTML','JavaScript','PHP'];

// document.write('<h3>Оновлений список продуктів:</h3>');
// list.printList();

