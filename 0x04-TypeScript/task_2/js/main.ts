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