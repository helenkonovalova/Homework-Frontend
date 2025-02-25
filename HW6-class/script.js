// 1 уровень сложности: 1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).

class Car {
    constructor(mark, model, year) {
        this.mark = mark
        this.model = model
        this.year = year
    }
    setAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year
    }
}

const car1 = new Car("Nissan", "Qashqai", 2016)
console.log(car1);
console.log(`Вашей машине ${car1.setAge()} лет`);

// Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение.

class Person {
    constructor(username, age, email) {
        this.name = username
        this.age = age
        this.email = email
    }
    change_email(newEmail) {
        if (newEmail.includes("@") && newEmail.includes(".")) {
            this.email = newEmail
            return
        }
        throw new Error("Недопустимые символы")
    }
}

const person1 = new Person("Anna", 25, "anna@gmail.com")
console.log(person1);
// person1.change_email("newannagmail.com")
person1.change_email("newanna@gmail.com")
console.log(person1);


// Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.
class Library {
    static books = []
    static addBook(book) {
        Library.books.push(book);
    }
    static listBooks() {
        this.books.forEach(function (book) {
            console.log(`Title: ${book.title}, Author: ${book.author}`);
        });
    }
}


Library.addBook({
    author: "Bulgakov",
    title: "Master and Margarita"
})
Library.addBook({
    author: "Tolstoj",
    title: "Anna Karenina"
})

Library.listBooks()



// Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.

class Rectangle {
    #width
    #height
    constructor(width, height) {
        if (width < 0) {
            throw new Error("Введите положительное число")
        }
        if (height < 0) {
            throw new Error("Введите положительное число")
        }
        this.#width = width
        this.#height = height
    }
    get width() {
        return this.#width
    }
    set width(value) {
        this.#width = value
    }
    get height() {
        return this.#height
    }
    set height(value) {
        this.#height = value
    }
    area() {
        return this.#width * this.#height;
    }

}

const rectangle1 = new Rectangle(10, 15)
// const rectangle2 = new Rectangle(10, -15)
console.log(rectangle1.area())

// Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.

class BankAccount {
    #balance
    static accounts = []
    constructor(username, balance) {
        this.username = username
        this.#balance = balance
        BankAccount.accounts.push(this)
    }
    get balance() {
        return this.#balance
    }
    deposit(amount) {
        this.#balance += amount
    }
    getMoney(amount) {
        if (amount < this.#balance) {
            this.#balance -= amount
            return
        }
        throw new Error("Недостаточно средств")
    }
    static totalBalance() {
        return BankAccount.accounts.reduce(function (acc, account) {
            return acc + account.#balance

        }, 0)
    }
}

const account1 = new BankAccount("John", 1000)
const account2 = new BankAccount("Anna", 2300)
console.log(account1);
console.log(account2);

account1.deposit(200)
account2.getMoney(500)
// account2.getMoney(3000)
console.log(account1); //1200
console.log(account2); // 1800
console.log(BankAccount.totalBalance());


