//--створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let arr1 = [23, -5, 1.2592, 789, -3652];
console.log(arr1);

let arr2 = ["Hello", "Jules", "true", "3.14", "-7"];
console.log(arr2);

let arr3 = ["World", 23, -6, true, false];
console.log(arr3);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = 23;
arr4[1] = "Hello";
arr4[7] = true;
console.log(arr4);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
  document.write("<div>Hello world</div>" + "<br>");
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
  document.write(`<div> Goog afternoon : ${i} </div>` + "<br>");
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

i = 0;
while (i < 20) {
  document.write("<h1> Goog morning </h1>");
  i++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

i = 0;
while (i < 20) {
  document.write(`<h1> Goog evening : ${i} </h1>`);
  i++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [45, 78, -56, -96, 4, 70, -34, 7567, 3, 7];

for (let i = 0; i < arr5.length; i++) {
  console.log(arr5[i]);
}

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = [
  "Summer",
  "Mom",
  "Flowers",
  "Sea",
  "Teacher",
  "Tree",
  "Glasses",
  "Water",
  "Sun",
  "Arms",
];
for (let i = 0; i < arr6.length; i++) {
  console.log(arr6[i]);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr7 = [
  23,
  "Spring",
  true,
  NaN,
  null,
  undefined,
  ["dad", "son"],
  -5,
  "$",
  false,
];
for (let i = 0; i < arr7.length; i++) {
  console.log(arr7[i]);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr8 = [
  "Summer",
  25,
  true,
  "false",
  "Teacher",
  false,
  "Glasses",
  "Water",
  89,
  true,
];
for (let i = 0; i < arr8.length; i++) {
  if (typeof arr8[i] === "boolean") {
    console.log(arr8[i]);
  }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr9 = [
  "Summer",
  25,
  true,
  "false",
  "Teacher",
  false,
  "Glasses",
  "75",
  89,
  true,
];
for (let i = 0; i < arr9.length; i++) {
  if (typeof arr9[i] === "number") {
    console.log(arr9[i]);
  }
}

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr10 = [
  "Summer",
  25,
  true,
  "false",
  "Teacher",
  false,
  "Glasses",
  "75",
  89,
  true,
];

for (let i = 0; i < arr10.length; i++) {
  if (typeof arr10[i] === "string") {
    console.log(arr10[i]);
  }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//Вивести в консоль всі його елементи в циклі.

let arr11 = [];
arr11[0] = 25;
arr11[1] = "Teacher";
arr11[2] = true;
arr11[3] = "Summer";
arr11[4] = -6;
arr11[5] = NaN;
arr11[6] = false;
arr11[7] = 5236;
arr11[8] = "false";
arr11[9] = "winter";

for (let i = 0; i < arr11.length; i++) {
  console.log(arr11[i]);
}

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
  console.log("step:", i);
  document.write(`step: ${i} <br>`);
}

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
  console.log("step:", i);
  document.write(`step: ${i} <br>`);
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 200; i += 2) {
  console.log("step:", i);
  document.write(`step: ${i} <br>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//// в домашці такий варіант
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log("step:", i);
    document.write(`step: ${i} <br>`);
  }
}
///чи можу я використовувати такий, оскільки результат однаковий?
for (let i = 0; i < 100; i += 2) {
  console.log("step:", i);
  document.write(`step: ${i} <br>`);
}

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i += 2) {
  console.log("step:", i);
  document.write(`step: ${i} <br>`);
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини(2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i <= 120; i+=1) {
//     if ( i === 120)
//  }

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arr20 = ["a", "b", "c"];
let word1 = "";
for (let i = 0; i < arr20.length; i++) {
  word1 = word1 + arr20[i];
}
document.write(word1);

// - Дано масив: ['a', 'b', 'c'].За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
