interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

type Subjects = "Math" | "History";

class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}

const createEmployee = (salary: string | number): Director | Teacher => {
	if (typeof salary === "number" && salary < 500) return new Teacher();
	return new Director();
};

const isDirector = (employee: unknown): employee is Director => {
	return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher) => {
	if (isDirector(employee)) {
		console.log(employee.workDirectorTasks);
		return;
	}
	console.log(employee.workTeacherTasks);
};

const teachClass = (todayClass: Subjects) => {
	console.log(`Teaching ${todayClass}`);
};

