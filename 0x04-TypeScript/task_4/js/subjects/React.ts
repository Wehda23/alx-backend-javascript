/// <reference path='Subject.ts' />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export interface ReactInterface {
        getRequirements(): string;
        getAvailableTeacher(): string;
    }

    export class React extends Subject implements ReactInterface {
        getRequirements(): string {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher(): string {
            if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0){
                return "No available teacher";
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}