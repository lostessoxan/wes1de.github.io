let typeOfSite = prompt(
	'Какой тип сайта вы предпочитаете?\n0. - Визитка\n1. - Корпоративный сайт\n2. - Интернет Магазин'
)

let typeOfDesign = prompt(
	'Какой дизайн сайта вы хотите?\n0. - Уникальный\n1. - Шаблонный'
)

let typeOfLayout = prompt(
	'Выберете тип вёрстки: ?\n0. - Адаптивная\n1. - Кроссбраузерная\n2. - Неадаптивная\n3. - Адаптивно-Кроссбраузерная'
)

console.log('Шабаш Пикачу')

let moneyNameObject = {
	design0: 'Уникальный',
	design1: 'Шаблонный',

	type0: 'Визитка',
	type1: 'Корпоративный сайт',
	type2: 'Интернет Магазин',

	layout0: 'Адаптивная',
	layout1: 'Кроссбраузерная',
	layout2: 'Неадаптивная',
	layout3: 'Адаптивно-Кроссбраузерная',
}

let moneyObject = {
	design0: 3000,
	design1: 2000,
	type0: 5000,
	type1: 7000,
	type2: 10000,
	layout0: 2000,
	layout1: 2000,
	layout2: 1000,
	layout3: 4000,
}

let timeObject = {
	design0: 10,
	design1: 5,
	type0: 4,
	type1: 4,
	type2: 7,
	layout0: 2,
	layout1: 2,
	layout2: 1,
	layout3: 3,
}

//  -------------------- Стоимость

let sumObject = {}
let timeSumObject = {}

if (typeOfSite == 0) {
	console.log(moneyObject['type0'])
	sumObject['costType'] = moneyObject.type0
} else if (typeOfSite == 1) {
	console.log(moneyObject['type1'])
	sumObject['costType'] = moneyObject.type1
} else if (typeOfSite == 2) {
	console.log(moneyObject['type2'])
	sumObject['costType'] = moneyObject.type2
}

if (typeOfDesign == 0) {
	console.log(moneyObject.design0)
	sumObject['costDesign'] = moneyObject.design0
} else if (typeOfDesign == 1) {
	console.log(moneyObject.design1)
	sumObject['costDesign'] = moneyObject.design1
}

if (typeOfLayout == 0) {
	console.log(moneyObject.layout0)
	sumObject['costLayout'] = moneyObject.layout0
} else if (typeOfLayout == 1) {
	console.log(moneyObject.layout1)
	sumObject['costLayout'] = moneyObject.layout1
} else if (typeOfLayout == 2) {
	console.log(moneyObject.layout2)
	sumObject['costLayout'] = moneyObject.layout2
} else if (typeOfLayout == 3) {
	console.log(moneyObject.layout3)
	sumObject['costLayout'] = moneyObject.layout3
}

//  -------------------- Сроки

if (typeOfSite == 0) {
	console.log(timeObject.type0)
	timeSumObject['timeType'] = timeObject.type0
} else if (typeOfSite == 1) {
	console.log(timeObject.type1)
	timeSumObject['timeType'] = timeObject.type1
} else if (typeOfSite == 2) {
	console.log(timeObject.type2)
	timeSumObject['timeType'] = timeObject.type2
}

if (typeOfDesign == 0) {
	console.log(timeObject.design0)
	timeSumObject['timeDesign'] = timeObject.design0
} else if (typeOfDesign == 1) {
	console.log(timeObject.design1)
	timeSumObject['timeDesign'] = timeObject.design1
}

if (typeOfLayout == 0) {
	console.log(timeObject.layout0)
	timeSumObject['timeLayout'] = timeObject.layout0
} else if (typeOfLayout == 1) {
	console.log(timeObject.layout1)
	timeSumObject['timeLayout'] = timeObject.layout1
} else if (typeOfLayout == 2) {
	console.log(timeObject.layout2)
	timeSumObject['timeLayout'] = timeObject.layout2
} else if (typeOfLayout == 3) {
	console.log(timeObject.layout3)
	timeSumObject['timeLayout'] = timeObject.layout3
}

//  -------------------- Расчёт

console.log(sumObject)
console.log(timeSumObject)

alert(
	'Стоимость вашего сайта состовляет: ' +
		(sumObject.costType + sumObject.costDesign + sumObject.costLayout) +
		'\nСроки создания сайта: ' +
		(timeSumObject.timeType +
			timeSumObject.timeDesign +
			timeSumObject.timeLayout) +
		' Дней'
)
