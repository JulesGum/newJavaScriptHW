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
console.log(word1);

// - Дано масив: ['a', 'b', 'c'].За допомогою циклу while зібрати всі букви в слово.
let arr21 = ["a", "b", "c"];
let word2 = "";
i = 0;
while (i < arr21.length) {
  word2 = word2 + arr21[i];
  i++;
}
console.log(word2);

// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
let arr22 = ["a", "b", "c"];
let word3 = "";
for (const letter of arr22) {
  word3 = word3 + letter;
}
console.log(word3);

// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for in зібрати всі букви в слово.
let arr23 = ["a", "b", "c"];
let word4 = "";
for (const letter in arr23) {
  word4 = word4 + arr23[letter];
}
console.log(word4);

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr30 = ["a", "b", "c"];
for (let i = 1; i <= 3; i++) {
  arr30.push(i);
}
console.log(arr30);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arr31 = [1, 2, 3];
let arr32 = [];
for (i = 3; i > 0; i--) {
  arr32.push(i);
}
console.log(arr32);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arr33 = [1, 2, 3];
arr33.push(4, 5, 6);
console.log(arr33);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let arr34 = [1, 2, 3];
arr34.unshift(4, 5, 6);
console.log(arr34);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arr35 = ["js", "css", "jq"];
console.log(arr35.shift());

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let arr36 = ["js", "css", "jq"];
console.log(arr36.pop());

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
let arr37 = [1, 2, 3, 4, 5];
console.log(arr37.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
let arr38 = [1, 2, 3, 4, 5];
console.log(arr38.slice(0, 2));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let arr39 = [1, 2, 3, 4, 5];
let arr40 = arr39.splice(1, 2);
console.log(arr39);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr41 = [1, 2, 3, 4, 5];
let arr42 = arr41.splice(3, 0, "a", "b", "c");
console.log(arr41);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr43 = [1, 2, 3, 4, 5];
let arr44 = arr43.splice(1, 0, "a", "b");
let arr45 = arr43.splice(6, 0, "c");
let arr46 = arr43.splice(8, 0, "e");
console.log(arr43);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr50 = [5, 6, 56, 85, -3, 78, 1, 0, 6, 85];
for (let i = 0; i < arr50.length; i++) {
  if (arr50[i] % 2 === 0) {
    console.log(arr50[i]);
  }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
