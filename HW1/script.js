// 1 - в задаче повыше учесть еще и регистр букв.
// Anna !== annA (надо исправить чтобы регистр не вляил на результат)
let word = "Anna"
let reversedWord = ''
for (let i = word.length -1; i >=0; i--) {
    reversedWord += word[i]
}
if (word.toLowerCase() === reversedWord.toLowerCase()){
    console.log("Палиндром");
} else {
    console.log("Не палиндром"); 
}

// Средняя задача
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.

let str = "1,2,3,4,5"
let num = str.split(',')
let sum = 0
for (let i = 0; i < num.length; i++) {
   sum = sum + +num[i] //sum += +num[i]
}
console.log(sum); //15

// Простая задача
// Дана массив их строк. Программа должна подсчитать количество слов, которые содержат больше 5 символов.

let arr = ["Дан массив из строк программа должна подсчитать количество слов"]
let countWords = 0
for (let i = 0; i < arr.length; i++) {
    let newArr = arr[i].split(' ')
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j].length > 5) {
            countWords++
        }
    } 
}
console.log(countWords); //5 

// Простая задача
// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let evenNum = []
for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
        evenNum.push(numArr[i])
    }
}
console.log(evenNum);

// Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, которая переворачивает каждое слово в строке и выводит полученный результат.

let string = "Дана строка из нескольких слов, разделенных пробелами"
let newString = string.split(' ')
let resultString = []
for (let i = 0; i < newString.length; i++) {
    let reversedString = newString[i].split('').reverse().join('') 
    resultString.push(reversedString)
}
console.log(resultString);

// Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.

let randomArr = []
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.round(Math.random()*100)) 
}
console.log(randomArr);
let max = randomArr[0]
let min = randomArr[0]
for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] > max) {
        max = randomArr[i]
    } 
    if (randomArr[i] < min) {
        min = randomArr[i]
    }  
}
let diference = max - min
console.log(diference);

// Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.

let array = [10, 15, 3, 7, 20, 8, 25]
//let result = []
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === 25) {
        //result.push(array[i], array[j])
        //console.log(result);
        console.log(`${array[i]}, ${array[j]}`); // НЕ пойму как сделать, чтобы остановился цикл при нахождении нужного числа  
    } else {
        console.log('Таких чисел нет');
        }   
    }
}

// Средняя задача
// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]

let mixStr = "a1b2c3d4"
// let newMixStr = mixStr.split('')
let numbers = []
let letters = []
for (let i = 0; i < mixStr.length; i++) {
   if (isNaN(mixStr[i])) {
    letters.push(mixStr[i])

   } else {
    numbers.push(+mixStr[i])
   } 
}
console.log(numbers, letters);

// Сложная задача
// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.

let arrOfStr= ["abcd", "def", "ghib", "jklaf", "asdgdfhfgh"]
let resultStr = []
for (let i = 0; i < arrOfStr.length; i++) {
    for (let j = i + 1; j < arrOfStr.length; j++) {
            if (arrOfStr[i].length == arrOfStr[j].length) {
                resultStr.push(arrOfStr[i], arrOfStr[j])    
        } 
    }  
}
console.log(resultStr);
let unitedResultStr = resultStr.join("-")
console.log(unitedResultStr);



    















