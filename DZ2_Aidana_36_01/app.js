//1)

var it= prompt('Введите язык программирование').toLowerCase().toUpperCase()
 switch (it){
     case 'JavaScript':
         alert('Frontend')
         break
     case 'Python':
         alert('Backend')
         break
     case 'Java':
         alert ('Мобильное приложение Android')
         break
     case 'C#':
         alert ('Для создания различных приложений')
         break
     case 'Ruby':
         alert('Разработка игр с использованием фреймворка Gosu')
         break
     default:
         alert ('Повторите попытку!')
}


//2)
var student ={
    name:'Sara',
    age:20,
    major:'Frontend'

}
console.log(student)
student.grades = [4,5,4,4,5,5,5,]
student['age']=27
console.log(student)

//3)
for (i=0; i<=5; i++){
    console.log(i)

}


//4)
for (j=0; j<=10; j++){
    if (j % 2 === 0) {
    console.log(j)
    }

}