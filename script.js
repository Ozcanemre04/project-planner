let naame = document.querySelector('.named')
let description = document.querySelector('.description')
let date = document.querySelector('.date')
let add = document.querySelector('.add')
let remaining = document.querySelector('.remaining')
let container = document.querySelector('.container')
let select = document.querySelector('#select')

let sortt = document.querySelector('.sort')




function addHtml(todo) {

    for (let i = 0; i < todo.length; i++) {

        let sectionchild = document.createElement('section')
        sectionchild.classList.add('sectionchild')
        container.appendChild(sectionchild)

        let div = document.createElement('div')
        div.classList.add('div')
        sectionchild.appendChild(div)

        let all = document.createElement('div')
        all.classList.add('all')
        div.appendChild(all)


        let label1 = document.createElement('label')
        label1.setAttribute('for', 'doing')
        label1.innerText = 'doing:'
        all.appendChild(label1)

        let doingcb = document.createElement('input')
        doingcb.type = "checkbox"
        
        doingcb.checked = todo[i].doing
        doingcb.setAttribute("name", "doing")
        doingcb.classList.add('doing')
        all.appendChild(doingcb)

        let label2 = document.createElement('label')
        label2.setAttribute('for', "done")
        label2.innerText = 'done:'
        all.appendChild(label2)

        let donecb = document.createElement('input')
        donecb.type = "checkbox"
        donecb.checked = todo[i].done
        donecb.setAttribute("name", "done")
        donecb.classList.add('done')
        all.appendChild(donecb)

        let h2 = document.createElement('h2')
        h2.innerText = todo[i].name
        all.appendChild(h2)
        h2.className = "name"

        let h3 = document.createElement('h3')
        h3.innerText = todo[i].desc
        div.appendChild(h3)

        let h4 = document.createElement('h4');
        h4.innerText = todo[i].date
        div.appendChild(h4)

        let h5 = document.createElement('h5');
        h5.innerText = todo[i].remainingDate;
        h5.classList.add('remainingdate')
        div.appendChild(h5)

        let deletetodo = document.createElement('button')
        deletetodo.classList.add('delete')
        deletetodo.innerText = "delete"
        sectionchild.appendChild(deletetodo)
//click event
        doingcb.addEventListener('click', () => {
            if (doingcb.checked) {
                doingcb.classList.toggle('active')
                donecb.checked=false
                donecb.classList.remove('clicked')

                
            }
            else{
                doingcb.classList.remove('active')

            }
        })

        donecb.addEventListener('click', () => {
            if (donecb.checked) {
                donecb.classList.toggle('clicked')
                doingcb.checked=false
                doingcb.classList.remove('active')
            }

            else{
                donecb.classList.remove('clicked')
            }
        })

        deletetodo.addEventListener('click',(e)=>{
            let parent=e.target.parentElement
            parent.remove()

        })

//select event
        select.addEventListener('change', () => {
                if (select.value === "doing") {

                    if (doingcb.classList.contains("active")) {

                        sectionchild.style.display = "block"


                    } else {
                        sectionchild.style.display = "none"
                    }
                }


                if (select.value === "all") {
                    sectionchild.style.display = "block"
                }

                if (select.value === "done") {

                    if (donecb.classList.contains("clicked")) {

                        sectionchild.style.display = "block"

                    } else {
                        sectionchild.style.display = "none"
                    }
                }



            

            if (select.value === "todo") {

                if (!donecb.classList.contains("clicked") & !doingcb.classList.contains('active')) {

                    sectionchild.style.display = "block"

                } else {
                    sectionchild.style.display = "none"
                }
            }




        })

}}





let todo;

function createtodo() {
    let todoname = naame.value;
    let tododesc = description.value;
    let tododate = date.valueAsNumber;
    let now = Date.now();



    let total = tododate - now;
    let day = Math.ceil(total / 3600 / 24 / 1000)
    todo = [{
        name: todoname,
        desc: tododesc,
        date: date.value,

        doing: false,
        done: false,

        remainingDate: "in "+day+ " days"
    },]


    addHtml(todo)
}
sortt.addEventListener('click',sortedbydate)
function sortedbydate(arr){

    let sorted = arr.sort(function (a, b) {     
        return a.date-(b.date); });  
         createtodo(sorted)   
}






add.addEventListener('click', createtodo)



