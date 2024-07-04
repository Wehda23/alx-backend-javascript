interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectoryTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {return 'Working from home'}
    getCoffeeBreak(): string {return 'Getting a coffee break'}
    workDirectoryTasks(): string {return 'Getting to director tasks'}
}

class Teacher implements TeacherInterface {
    workFromHome(): string {return 'Cannot work from home'}
    getCoffeeBreak(): string {return 'Cannot have a break'}
    workTeacherTasks(): string {return 'Getting to work'}
}


interface createEmployeeInterface {
    (salary: string | number): Director | Teacher
}

const createEmployee: createEmployeeInterface = (salary: string | number): Director | Teacher => {
    if (Number(salary) < 500){
        return new Teacher();
    }

    return new Director();
}


const teacher: Director | Teacher = createEmployee("499")
const director: Director | Teacher = createEmployee(501)

console.log(teacher.workFromHome())
console.log(director.workFromHome())
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

interface isDirectorInterface {
    (employee: Director | Teacher): boolean
}

const isDirector: isDirectorInterface = (employee: Director | Teacher): boolean => {
    return employee instanceof Director;
}

interface executeWorkInterface {
    (employee: Director | Teacher): string
}

const executeWork: executeWorkInterface = (employee: Director | Teacher): string => {
    if (isDirector(employee)) {
        return (employee as Director).workDirectoryTasks()
    }
    return (employee as Teacher).workTeacherTasks()
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

type Subjects = "Math" | "History"

interface TeachClassInterface {
    (subject: Subjects): string
}

const teachClass: TeachClassInterface = (subject: Subjects): string => {
    return `Teaching ${subject}`
}

console.log(teachClass('Math'));
console.log(teachClass('History'));


