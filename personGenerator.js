// -------------- значения в HTML ---------------------------------------
// surnameOutput - ID строка генерации фамилии (в HTML значение - Генерация фамилии)
// firstNameOutput - ID строка генерации Имя (в HTML  значение - Иван)
// genderOutput - ID span генерация пола (в HTML  значение - Генерация пола)
// birthYearOutput - ID span Генерация года рождения (в HTML  значение - Генерация года рождения)
// --------------------------------------------------------------------------

// personGenerator - объект  
const personGenerator = {
    // строка с фамилиями
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    // строка с мужскими именами
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    // строка с женскими именами
    firstNameFeMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Татьяна",
            "id_2": "Елена",
            "id_3": "Анна",
            "id_4": "Светлана",
            "id_5": "Яна",
            "id_6": "Оксана",
            "id_7": "Ирина",
            "id_8": "Алёна",
            "id_9": "Екатерина",
            "id_10": "Мария"
        }
    }`,
    // строка с женскими Профессиями
    proffNameFeMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Няня",
            "id_2": "Медсестра",
            "id_3": "Учительница",
            "id_4": "Волшебница"

        }
    }`,

    // строка с мужскими Профессиями
    proffNameMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Строитель",
            "id_2": "Спасатель",
            "id_3": "Шахтер",
            "id_4": "Инженер"
        }
    }`,

    monthYearJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля"
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    // Константы в верхнем регистре - псевдоним для константы используются только как псевдонимы для «жёстко закодированных» значений
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // randomIntNumber - свойство объекта со значением стрелочной функции (return  не нужен т.к. есть только вычисления)
    // метод отвечающий за случайную генерацию
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),


    randomGender: function () {
        const gender = (this.randomIntNumber()) ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;
    },

    // метод randomValue преобразующий строки JSON в объект JS благодаря свойству parse
    randomValue: function (json) {
        // строка JSON помещается в объект obj
        const obj = JSON.parse(json);
        // производим выборку для аргумента max из значений свойства count 
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },
    //  рандомное назначение пола


    randomFirstName: function (gender) {

        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFeMaleJson); 
        }

        return this.randomValue(this.firstNameMaleJson);
        
    },


    randomSurname: function (gender) {
        
        // surnameJson - фамилия
        // происходит возврат объекта 
        let surname = this.randomValue(this.surnameJson);
        if (gender === this.GENDER_FEMALE) {
            return surname + 'a'; 
        }
        return surname;

    },

    randomProffName: function (gender) {

        if (gender == this.GENDER_FEMALE) {
            return this.randomValue(this.proffNameFeMaleJson); 
        }

        return this.randomValue(this.proffNameMaleJson);
    },

    randomPatronomic: function(gender) {
        // Вводим переменную со свободной выборкой из JSON с мужскими именами
        let nameString = this.randomValue(this.firstNameMaleJson);
        // Определяем последний символ имени
        let nameLastSymbol = nameString.slice(-1);
        // Определяем два последних символа имени
        let nameLastSymbolTwo = nameString.slice(-2);
    
        // console.log('nameLastSymbol : ' + nameLastSymbol);
        // console.log('nameLastSymbolTwo : ' + nameLastSymbolTwo);
        // Генерация мужского отчества
        if (gender == this.GENDER_MALE) 
        {

            if (nameLastSymbol == 'й') {
                let nameStringPatr = nameString.slice(0, -1);
                return patronomic = nameStringPatr + 'евич';
                
            }
            if (nameLastSymbol == 'а' || nameLastSymbol == 'ч') {
                let nameStringPatr = nameString.slice(0, -1);
                return patronomic = nameStringPatr + 'ович';
                
            }
            if (nameLastSymbolTwo == 'ил' || nameLastSymbolTwo == 'им' || nameLastSymbolTwo == 'ан' || nameLastSymbolTwo == 'др' || nameLastSymbolTwo == 'ем') {
                let nameStringPatr = nameString;
                return patronomic = nameStringPatr + 'ович';
            }
            else {
                return nameString + 'евич';
            }

        }
        // Если gender == this.GENDER_FEMALE женское имя
        else {
            if (nameLastSymbol == 'й') {
                let nameStringPatr = nameString.slice(0, -1);
                return patronomic = nameStringPatr + 'евна';
            }
            if (nameLastSymbolTwo == 'та') {
                let nameStringPatr = nameString.slice(0, -1);
                return patronomic = nameStringPatr + 'ична';
            }
            return nameString + 'овна';
        }  
        
        
    },

    randomMonthYear: function () {

        let monthYear = this.randomValue(this.monthYearJson);
        return monthYear;
        

    },


    // метод getPerson продолжает выполнение в файле init.js
    getPerson: function () {
        let gender = this.randomGender();
        let month = this.randomMonthYear();
        //console.log('monthYear ' +  monthYear);
        console.log('gender ' + gender);
        this.person = {};

        this.person.gender = gender;
        this.person.monthYear = month;
        this.person.firstName = this.randomFirstName(gender);
        this.person.surName = this.randomSurname(gender);
        this.person.birthYear = this.randomIntNumber(1974, 1999);
        this.person.proffName = this.randomProffName(gender);
        this.person.patronomic = this.randomPatronomic(gender);
        

        return this.person;
    }
};

//console.log("randomPatronomic - " + personGenerator.randomPatronomic());