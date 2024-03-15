/// <reference path="Teacher.ts" />

namespace Subjects{
    export class Subject{
        _teacher : Teacher
        constructor(teacher : Teacher){
            this._teacher = teacher
        }

        set teacher(teacher: Teacher) {
            this._teacher = teacher;
        }
        get teacher(): Teacher | null {
            return this._teacher;
        }
    }
}