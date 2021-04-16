
let container = document.getElementById('container');
let thead = document.querySelector('#container thead tr');
let tbody = document.querySelector('#container tbody');
let button = document.getElementById('button')

let subjects = ['HTML', 'CSS', 'JavaScript', 'Math'];
let students = [
    {
        name: 'Giorgi',
        lastname: 'Gafrindashvili',
        score: [71, 39, 59, 91]
    },
    {
        name: 'Luka',
        lastname: 'Macharashvili',
        score: [49, 21, 37, 70]
    },
    {
        name: 'Avto',
        lastname: 'Alavidze',
        score: [76, 84, 10, 18]
    },
    {
        name: 'Valeri',
        lastname: 'Meforia',
        score: [86, 57, 67, 64]
    },
    {
        name: 'Otari',
        lastname: 'Kobaxidze',
        score: [52, 85, 39, 82]
    },
];

//average

let avg = [0, 0, 0, 0]

for (let i = 0; i < students.length; i++) {
    for (let a = 0; a < students[i].score.length; a++) {
        avg[a] += students[i].score[a]
    }
}

for (let i = 0; i < avg.length; i++) {
    avg[i] /=students.length;
}



//thead

let addthead = '';

for (let i = 0; i < subjects.length; i++) {
    addthead += `<th>${subjects[i]}</th>`;
}

thead.innerHTML += addthead;



let addstudent = ''

for (let i = 0; i < students.length; i++) {
    addstudent += `<tr>
                <td>${students[i].name}</td>
                <td>${students[i].lastname}</td>`
             for(let a = 0; a < subjects.length; a++) {
                 addstudent += `<td class="${avg[a] > students[i].score[a] ? 'red' : 'green'}">${students[i].score[a]}</td>`
             }
    addstudent += `</tr>`
}
tbody.innerHTML += addstudent;

addaverage = `<tr>
        <td colspan= "2">AVERAGE</td>`;
        `</tr>`
        for (let i = 0; i < avg.length; i++) {
            addaverage +=`<td>${avg[i]}</td>`
        }
    addaverage += `</tr>`

tbody.innerHTML += addaverage;

button.addEventListener("click", addgrade)

function addgrade() {

    let fn = document.getElementById('fn').value
    let ln = document.getElementById('ln').value
    let html = document.getElementById('html').value
    let css = document.getElementById('css').value
    let js = document.getElementById('js').value
    let math = document.getElementById('math').value

    
    let addstudents = {
            name: fn,
            lastname: ln,
            score: [parseInt(html), parseInt(css), parseInt(js), parseInt(math),]
    }

    students.push(addstudents);
    
    let avg = [0, 0, 0, 0]

    for (let i = 0; i < students.length; i++) {
        for (let a = 0; a < students[i].score.length; a++) {
            avg[a] += students[i].score[a]
        }
    }
    
    for (let i = 0; i < avg.length; i++) {
        avg[i] /=students.length;
    }
    

    addstudent = ''
    for (let i = 0; i < students.length; i++) {
        addstudent += `<tr>
                    <td>${students[i].name}</td>
                    <td>${students[i].lastname}</td>`
                 for(let a = 0; a < subjects.length; a++) {
                     addstudent += `<td class="${avg[a] > students[i].score[a] ? 'red' : 'green'}">${students[i].score[a]}</td>`
                 }
        addstudent += `</tr>`
    }
    tbody.innerHTML = addstudent;
    
    addaverage = `<tr>
            <td colspan= "2">AVERAGE</td>`;
            `</tr>`
            for (let i = 0; i < avg.length; i++) {
                addaverage +=`<td>${Math.round(avg[i])}</td>`
            }
        addaverage += `</tr>`
    
    tbody.innerHTML += addaverage;
    document.contact-form.reset();
}

