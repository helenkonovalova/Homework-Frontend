// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа больше 10.
let arr = [12, 5, 8, 130, 44]
let filteredArr = arr.filter(function (value, index) {
    return value > 10
})
console.log(arr);
console.log(filteredArr);

// 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]
let strArr = ["one", "three", "two"]
let strLength = strArr.map(function (value, index) {
    return value.length
    })
console.log(strLength);
    
let sortedArr = strLength.sort(function (n, c) {
    return n - c 
})
console.log(sortedArr);

// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']

let strArray = ['hello', 'world', 'javascript', 'code']
let sortedArray = strArray.sort(function (nextword, currentword) {
    return nextword.length - currentword.length
})
console.log(sortedArray);

// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1
let word = "javascript";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

word.split("").forEach(function(letter) {
  if (vowels.includes(letter)) {
    count++;
  }
});
console.log(count);

// 5. Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"

let str = "javascript"
let newStr = str.split('')
newStr.sort(function (nextsymbol, currentsymbol) {
    return nextsymbol.localeCompare(currentsymbol)
})
let sortStr = newStr.join("")
console.log(sortStr);

// let sortStr = str.split('').sort().join('') // нагуглила, что так тоже можно. Но расписала для понимания
// console.log(sortStr);



// 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой строке. Выведите результат в формате: "Символ X => Y".
// // "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1
let string = "hello"
string.split('').forEach(function (letter) {
    let count = 0
    string.split('').forEach(function(inLetter) {
        if (inLetter === letter) {
            count++;
        }
    });
    console.log(`Символ ${letter} => ${count}`);
}); 


// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
let numArr = [3, 1, 4, 1, 5, 9]
let sumOfEvens = numArr.filter(function (num) {
    if (num % 2 === 0) {
        return true
    }   
}).map(function(even) {
    return even ** 2  
}).reduce(function (acc, evenPower) {
    return acc + evenPower
},0)
console.log(sumOfEvens);



// 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false
function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
           return false
        }  
    }
    return true  
}
console.log(isSorted([1, 5, 9, 12, 36])); 
console.log(isSorted([1, 5, 12, 9, 36, -5]));

// 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
//    a: ['apple', 'apricot'], 
//    b: ['banana', 'blueberry'], 
//    c: ['cherry']
// }

let arrOfWords = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
let obj = {}
arrOfWords.forEach(function (word) {
    let firstLetter = word[0]
    if (obj[firstLetter]) {
        obj[firstLetter].push(word) 
    } else {
        obj[firstLetter] =[word]
    }
})
console.log(obj);







