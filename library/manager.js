const Employee = require('./employee');

class Manager extends Employee {
    constructor (id, officeNumber) {
        super(id, name, email)
        this.officeNumber = officeNumber;
    }
    
    getofficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;