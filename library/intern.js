const Employee = require('./employee');

class Intern extends Employee {
    constructor (id, school) {
        super(id, name, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;