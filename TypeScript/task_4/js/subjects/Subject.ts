namespace Subjects {
	export class Subject {
		constructor(protected teacher: Teacher) {}
		set setTeacher(teacher: Teacher) {
			this.teacher = teacher;
		}
	}
}

