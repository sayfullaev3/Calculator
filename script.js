let num_one = +prompt("Введите первое число:");
let operator = prompt("Введите оператор (+, -, *, /):");
let num_two = +prompt("Введите второе число:");
let result;

switch (operator) {
    case '+':
        result = num_one + num_two;
        break;
    case '-':
        result = num_one - num_two;
        break;
    case '*':
        result = num_one * num_two;
        break;
    case '/':
        result = num_one / num_two
    default:
        result = "Ошибка: Неподдерживаемый оператор!";
}

alert(`${num_one} ${operator} ${num_two} = ${result}`);