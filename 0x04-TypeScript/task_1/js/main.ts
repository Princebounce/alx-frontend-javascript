// Task_1: Let's build a Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Task_2: Extending the Teacher interface
interface Director extends Teacher {
  numberOfReports: number;
}

// Task_3: Printing teachers
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

// Task_4: Writing a class
interface ClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements ClassInterface {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}

  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
}

