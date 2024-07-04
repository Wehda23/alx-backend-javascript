/// <reference path='Subject.ts' />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export interface CppInterface {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }

    export class Cpp extends Subject implements CppInterface{
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0){
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}