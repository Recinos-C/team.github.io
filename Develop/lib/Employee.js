// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, position){
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
    }
    displayinfo(){
        console.log(`Employee info is: ${this.name} ${this.id} ${this.email}`)
    }
}

module.exports = Employee