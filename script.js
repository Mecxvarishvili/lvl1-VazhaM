
let container = document.getElementById('container');
let thead = document.querySelector('#container thead tr');
let tbody = document.querySelector('#container tbody');
let button = document.getElementById('button')

class studentList {
    subjects = [];
    students = [];
    avg = [];
    constructor(students, subjects, avg) {
        this.students = students;
        this.subjects = subjects;

        this.generateTable();
        this.eventListener();
    }
    
    eventListener() {
        document.getElementById('button').addEventListener("click", this.generateGradePlus.bind(this));
        
    }

    generateTable() {
        this.generateHead();
        this.generateGrade();
    }

    generateHead() {
        let thead = document.querySelector('#container thead tr');
        let addthead = '';
    
        for (let i = 0; i < this.subjects.length; i++) {
            addthead += `<th>${this.subjects[i]}</th>`;
        }
        
        thead.innerHTML += addthead;
    }

    generateGrade() {
        let tbody = document.querySelector('#container tbody');
        let avg = [0, 0, 0, 0]
        let addaverage = '';

        for (let i = 0; i < students.length; i++) {
            for (let a = 0; a < this.students[i].score.length; a++) {
                avg[a] += this.students[i].score[a]
            }
        }
        
        for (let i = 0; i < avg.length; i++) {
            avg[i] /=this.students.length;
        }

        addaverage = `<tr>
        <td colspan= "2">AVERAGE</td>`;
        `</tr>`
        for (let i = 0; i < avg.length; i++) {
            addaverage +=`<td>${Math.round(avg[i])}</td>`
        }

        addaverage += `</tr>`
        this.avg = avg;
         
         /*student*/ 
         let addstudent = ''
         for (let i = 0; i < students.length; i++) {
            addstudent += `<tr>
                        <td>${students[i].name}</td>
                        <td>${students[i].lastname}</td>`;
                     for(let a = 0; a < subjects.length; a++) {
                        addstudent += `<td class="${this.avg[a] > students[i].score[a] ? 'red' : 'green'}">${students[i].score[a]}</td>`
                     }
            addstudent += `</tr>`
        }
        tbody.innerHTML += addstudent;
        tbody.innerHTML += addaverage;



    }

    generateGradePlus() {
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

        tbody.innerHTML += '';
        console.log()
    }
    
}

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

new studentList(students, subjects);