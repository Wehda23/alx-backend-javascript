



interface Teacher {
    firstName: String;
    lastName: String;
    fullTimeEmployee: boolean;
    yearOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3);

interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

interface TeacherPrinter {
    (firstName: string, lastName: string): string;
}

const printTeacher: TeacherPrinter = (firstName: string, lastName: string): string =>  {
    return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))

interface StudentNames{
    firstName: string;
    lastName: string;
}
class StudentClass implements StudentNames {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const newStudent: StudentClass = new StudentClass("John", "Doe");

console.log(printTeacher(newStudent.firstName, newStudent.lastName))