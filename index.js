
class Car {
    constructor(option){
        this.name = option.name
        this.company = option.company
        this.speed = option.speed
    }

    go(){
        console.log( "you are driving")
    }
    move(){
        console.log('yes Sir )')
    }

    pour(){
        console.log('You dont have enough petrol')
    }
}
const car = new Car({
    name: 'BMW-X7',
    company: 'BMW. co. Ltd',
    speed: 100
}) 

class Engine extends Car {
    constructor(option){
    super(option)
    this.shape = option.shape
    }

    move(){
        console.log('Ok Mr')
    }
    pour(){
        console.log('What coffe would u like to drink?')
    }
    get nameInfo(){
        return `${this.name} ID:293040 type: Alpha`
    }
    set companyInfo(companyInfo){
        this.company = companyInfo
    }
}

const engine = new Engine ({
    name: 'ACG Robots',
    company: 'Apple',
    speed: '10km/h',
    shape: 'humanlike'
})



  
