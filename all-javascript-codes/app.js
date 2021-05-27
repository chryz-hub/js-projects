
let button = document.getElementById('btn');
let input = document.getElementById('myInput');
let container = document.getElementById("myUl");

button.addEventListener('click', function () {

      if (input.value === '') {
          alert('you need to write something');
      } else {
          let li = document.createElement('li');
    li.innerText = input.value;
    container.appendChild(li);
    li.addEventListener('click', function() {
        if (li.classList == '') {
            li.classList.add('checked')
        } else  {
            li.classList.remove('checked')
        }
    })
    li.addEventListener('dblclick', function() {
        li.classList.remove('checked');
        li.remove();
    })
      }

    input.value = '';


})

class app{
    constructor(name, purpose, Technology) {
        this.name = name;
        this.purpose = purpose;
        this.Technology = Technology;
    }
    printApp() {
        console.log(this);
    }
}
function printAppChar(app) {
     document.write(`${app.name} ${app.purpose} with the use of ${app.Technology}`);
}
const App1 = new app(
    'BiVault',
    'helps keeps your passwords and personal info safe',
    'Blockchain Technology'
);
printAppChar(App1);
App1.printApp();