enum EmployeeType { 
    SoftwareDeveloper = 'SoftwareDeveloper',
    DataScientist = 'DataScientist',
    Intern = 'Intern',
    Manager = 'Manager'
}

interface NewHire {
    name: string,
    job: EmployeeType,
    salary: number
}

abstract class Employee {
    public name: string;
    public pmtPerYear: number;
    public  pmtPerPaycheck: number;

    assignAnnualPay(annualPay: number): void {
        this.pmtPerPaycheck = annualPay / this.pmtPerYear;
    }

    setName(name: string): void {
        this.name = name;
    }

    pay(): void {};
}

export class SoftwareDeveloper extends Employee {
    constructor() {
        super()
        this.pmtPerYear = 52;
    }

    public pay(): void {
        console.log(`Paying out $${this.pmtPerPaycheck} to Software Developer`);
    }
}

export class DataScientist extends Employee {
    constructor() {
        super()
        this.pmtPerYear = 24;
    }

    public pay(): void {
        console.log(`Paying out $${this.pmtPerPaycheck} to Data Scientist`);
    }
}

export class Intern extends Employee {
    constructor() {
        super()
        this.pmtPerYear = 26;
    }

    public pay(): void {
        console.log(`Paying out $${this.pmtPerPaycheck} to Intern`);
    }
}

export class Manager extends Employee {
    public employees: Employee[];

    constructor() {
        super()
        this.pmtPerYear = 52;
    }

    public pay(): void {
        console.log(`Paying out $${this.pmtPerPaycheck} to Software Developer`);
    }

    public getEmployees(): void {
        console.log(`${this.name} manages the following employees: ${this.employees.map(employee => employee.name).join(',')}`)
    }
}


export class EmployeeFactory {
    public static createEmployee(type: EmployeeType): Employee {
        if (type === EmployeeType.SoftwareDeveloper) {
            return new SoftwareDeveloper();
        } 
        else if (type === EmployeeType.DataScientist) {
            return new DataScientist();
        } 
        else if (type === EmployeeType.Intern) {
            return new Intern();
        } 
        else if (type === EmployeeType.Manager) {
            return new Manager();
        }
        else {
            throw new Error(`Employee type of ${type} was unexpected.`)
        }
    }
}

function hireEmployees(newHires: NewHire[]): Employee[] {
    let employees: Employee[] = [];

    newHires.forEach((newHire) => {
        let employee = EmployeeFactory.createEmployee(newHire.job);
        employee.setName(newHire.name);
        employee.assignAnnualPay(newHire.salary);
        
        employees.push(employee);
    })

    return employees;
}

function runFactoryDemo() : void {
    let newHires: NewHire[] = [
        { name: 'Michael', job: EmployeeType.Manager, salary: 150000 },
        { name: 'Pam', job: EmployeeType.SoftwareDeveloper, salary: 120000 },
        { name: 'Jim', job: EmployeeType.SoftwareDeveloper, salary: 100000 },
        { name: 'Kelly', job: EmployeeType.DataScientist, salary: 140000 },
        { name: 'Ryan', job: EmployeeType.Intern, salary: 40000 },
    ];

    let employees: Employee[] = hireEmployees(newHires)

    console.log('*** Showing Current Employees ***')
    employees.forEach((employee) => {
        console.log(employee)
        console.log()
    });
}

runFactoryDemo();