const Employee = require('./employee');

class Manager extends Employee {
    constructor (id, officeNumber, name, email) {
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