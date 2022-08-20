Для выполнения задания изучаем команды:

    indexOf() – команда для поиска символа в строке. Пример:

indexOfLetterO = "hello".indexOf('o'); // 4 - порядковый номер символа в строке
indexOfLetterA = "hello".indexOf('a'); // -1 - если символ в строке не найден

    Для получения текущей даты используем код new Date(); Для полученеия текущего года используем код new Date().getFullYear(); Пример:

currentDate = new Date(); // Thu Feb 10 2022 01:03:22 GMT+0200 (Восточная Европа, стандартное время)

currentYear = currentDate.getFullYear(); // 2022

_______________
Задание:

Запрашиваем у пользователя имя.
    Чистим введенное значение от пробелов в начале/конце строки. Например, "Алла Виктория" – допустимое, " Алла Виктория " – недопустимое.
    
    Если пользователь оставляет пустую строку или нажимает Отмена, то значением данного поля будет Ваше имя 😌.

Запрашиваем у пользователя фамилию.
    Чистим введенное значение от пробелов в начале/конце строки. Например, "Иванова Максимова" – допустимое, " Иванова Максимова " – недопустимое.
    
    Если пользователь оставляет пустую строку или нажимает Отмена, то значением данного поля будет Ваша фамилия 😌.

Запрашиваем у пользователя email.
    Чистим введенное значение от всех пробелов. Например, "anna@gmail.com" – допустимое, " anna @gma il.com " – недопустимое.

    Приводим введенное значение к нижнему регистру.

    Если в введенном значении отсутствует символ @, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ not exist)`;

    Если в введенном значении символ @ находится на первом месте, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ find in first place)`;

    Если в введенном значении символ @ находится на последнем месте, то в переменную email сохраняем текст: `not valid email <b>${email}</b> (symbol @ find in last place)`;

    Если пользователь оставляет пустую строку или нажимает Отмена, то в переменную email сохраняем текст: `email not defined`;

Запрашиваем у пользователя год рождения.
    Чистим введенное значение от всех пробелов. Например, "1990" – допустимое, " 19 90 " – недопустимое.

    Если пользователь оставляет пустую строку или нажимает Отмена, то значением данного поля будет Ваш год рождения 😌.

    В переменную age высчитываем актуальный возраст пользователя (new Date, getFullYear).
    
    Делаем вывод данных пользователя в body в виде маркированного списка. 

Пример вывода:
Full name: Anna Ivanova
Email: not valid email annaivanova.gmail.com (symbol @ not exist)
Age: 55

или
Full name: Anna Ivanova
Email: not valid email @annaivanovagmail.com (symbol @ find in first place)
Age: 55

или
Full name: Anna Ivanova
Email: not valid email annaivanova.gmail.com@ (symbol @ find in last place)
Age: 55

или
Full name: Anna Ivanova
Email: email not defined
Age: 55

или
Full name: Anna Ivanova
Email: annaivanova@gmail.com
Age: 55