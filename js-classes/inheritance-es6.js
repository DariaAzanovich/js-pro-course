//------------------------- ES6 ------------------------
class Car {
  constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.fuelCapacity = fuelCapacity;
    this.fuelConsumption = fuelConsumption;      
  }

  getFullName() {
    return `Full car name: ${this.name} ${this.model}`; 
  }

  getAge() {
    let currentYear = new Date().getFullYear();
    return `Car age: ${currentYear - this.year}`;
  }
  changeColor(color) {
    if(this.color === color) {
      return `Авто уже покрашено в цвет '${color}'`;
    } else {
      this.color = color;
      return `Цвет машины изменён на ${color}`;
    }
  }

  calculateWay(kilometers, fuel) {
    if(fuel < 10) {
      alert('Количество топлива меньше 10!');
    }

    let travelTime = kilometers / this.maxSpeed,
        neededFuel = (kilometers / 100) * this.fuelConsumption,
        refueling = fuel - neededFuel;

    if(refueling < 0) {
      alert(`Нужна дозаправка на ${Math.abs(refueling)} литров!`);
    }

    return `Среднее время в пути: ${travelTime}`;
  }
}

class BMW extends Car {
  constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, seatHeated = false) {
    super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
    
    this.seatHeated = seatHeated;
    this.climatControl = true;
  }  
  

  isSeatHeated() {
    if(this.seatHeated) {
      this.seatHeated = !this.seatHeated;
      return 'Обогрев сидений выключен';
    } else {
      this.seatHeated = !this.seatHeated;
      return 'Обогрев сидений включен';
    }
  };

}

class Lexus extends Car {
  constructor(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, panoramicRoof = true) {
    super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);
    
    this.panoramicRoof = panoramicRoof;
  }  

  isRoofOpen() {
    if(this.panoramicRoof) {
      return 'Крыша открыта';
    } else {
      return 'Крыша закрыта';
    }
  }

}

class Audi extends Car {
  constructor(name, model, year, color,  maxSpeed, capacity, fuelCapacity, fuelConsumption) {
    super(name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption);

    this.capacity = capacity;
  }  

  catsSpecialPlaceCapacity(catsAmount) {
    let unplacedCats = this.capacity - catsAmount;
    
    if(unplacedCats < 0) {
      alert(`Для ${Math.abs(unplacedCats)} котик(a/ов) не будет специального места :(`);
    } else {
      alert('Все котики влезут в специальное место :3');
    }

    return Math.abs(unplacedCats);
  };

}
