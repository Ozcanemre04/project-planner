let naame = document.querySelector('.name')
let description = document.querySelector('.description')
let date = document.querySelector('.date')
let add = document.querySelector('.add')
let remaining=document.querySelector('.remaining')
let container = document.querySelector('.container')


function addHtml(todo){
let sectionchild =document.createElement('section')
sectionchild.classList.add('sectionchild')
container.appendChild(sectionchild)

let div =document.createElement('div')
div.classList.add('div')
sectionchild.appendChild(div)

let all=document.createElement('div')
all.classList.add('all')
div.appendChild(all)

let h2 =document.createElement('h2')
h2.innerText=todo.name
all.appendChild(h2)

let checkbox =document.createElement('div')
checkbox.classList.add('checkbox')
all.appendChild(checkbox)

let first = document.createElement('div')
first.classList.add('.first')
checkbox.appendChild(first)

let second = document.createElement('div')
second.classList.add('.second')
checkbox.appendChild(second)

let label1 = document.createElement('label')
label1.setAttribute('for','doing')
label1.innerText='doing:'
first.appendChild(label1)

let doingcb= document.createElement('input')
doingcb.type="checkbox"
doingcb.checked=todo.doing
doingcb.setAttribute("name","doing")
doingcb.classList.add('doing')
first.appendChild(doingcb)

let label2 = document.createElement('label')
label2.setAttribute('for',"done")
label2.innerText='done:'
second.appendChild(label2)

let donecb= document.createElement('input')
donecb.type="checkbox"
donecb.checked=todo.done
donecb.setAttribute("name","done")
donecb.classList.add('done')
second.appendChild(donecb)

let h3=document.createElement('h3')
h3.innerText=todo.desc
div.appendChild(h3)

let h4=document.createElement('h4');
h4.innerText=todo.date
div.appendChild(h4)

let h5=document.createElement('h5');
h5.innerText=todo.remainingDate
div.appendChild(h5)

let deletetodo=document.createElement('button')
deletetodo.classList.add('delete')
deletetodo.innerText="delete"
sectionchild.appendChild(deletetodo)


}




function createtodo(){
    let todoname=naame.value;
    let tododesc=description.value;
    let tododate=date.valueAsNumber;
    let now = Date.now();
    console.log(now);
    
    
    let total=tododate-now;
    let day = Math.ceil(total/3600/24/1000)

    const todo={
        name:todoname,
        desc:tododesc,
        date:date.value,
        doing:false,
        done:false,
        remainingDate:day
    }
addHtml(todo)
}



add.addEventListener('click',createtodo)