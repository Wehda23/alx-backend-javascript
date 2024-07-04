/// <reference path="Teacher.ts" />
namespace Subjects {
    export interface SubjectInterface {
        teacher: Teacher
        setTeacher(teacher: Teacher): void;
    }

    export class Subject implements SubjectInterface{
        teacher: Teacher
        setTeacher(teacher: Teacher) {
            this.teacher = teacher
        }
    }
}