var month = prompt('Введите месяц')
var season;

if (month.toLowerCase() === 'декабрь' ||month.toLowerCase () === 'январь'  || month.toLowerCase() === 'февраль'){
    season = ('зима')
}else if (month.toLowerCase() === 'март'|| month.toLowerCase() === 'апрель' || month.toLowerCase() === 'май'){
    season = ('весна')
}else if (month.toLowerCase() === 'июнь' || month.toLowerCase() === 'июль'|| month.toLowerCase() === 'август'){
    season = ('лето')
}else if (month.toLowerCase() === 'сентябрь' ||month.toLowerCase() === 'октябрь'|| month.toLowerCase() === 'ноябрь'){
    season = ('осень')
}else {
    alert('Повторите попытку')
}
alert('сезон - ' + season)




var calck1 = Number(prompt('Введите число'))
var calck2 = Number(prompt('введите число'))
var calck3 = prompt('Введите математический оператор')
var result;

if (calck3 === '+'){
    alert(result = calck1 + calck2)
}else if (calck3 === '-'){
    alert( result = calck1 - calck2)
}else if (calck3 === '/'){
    alert( result =  calck1 / calck2)
}else if (calck3 === '*'){
    alert( result = calck1 * calck2)
}else {
    alert('Повторите попытку!')
}

