function Car(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.color = color;
  this.maxSpeed = maxSpeed;
  this.fuelCapacity = fuelCapacity;
  this.fuelConsumption = fuelConsumption;

  this.getFullName = function() {
    return `Full car name: ${this.name} ${this.model}`; 
  }

  this.getAge = function() {
    let currentYear = new Date().getFullYear();
    return `Car age: ${currentYear - this.year}`;
  }
  this.changeColor = function(color) {
    if(this.color === color) {
      return `Авто уже покрашено в цвет '${color}'`;
    } else {
      this.color = color;
      return `Цвет машины изменён на ${color}`;
    }
  }

  this.calculateWay = function(kilometers, fuel) {
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


function BMW(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, seatHeated = false) {
  Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);

  this.climatControl = true;
  this.seatHeated = seatHeated;

  BMW.prototype.isSeatHeated = function() {
    if(this.seatHeated) {
      this.seatHeated = !this.seatHeated;
      return 'Обогрев сидений выключен';
    } else {
      this.seatHeated = !this.seatHeated;
      return 'Обогрев сидений включен';
    }
  };

}

function Lexus(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, panoramicRoof = true) {
  Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);

  this.panoramicRoof = panoramicRoof;

  Lexus.prototype.isRoofOpen = function() {
    if(this.panoramicRoof) {
      return 'Крыша открыта';
    } else {
      return 'Крыша закрыта';
    }
  };

}

function Audi(name, model, year, color,  maxSpeed, fuelCapacity = 60, fuelConsumption = 10, capacity = 3) {
  Car.apply(this, [name, model, year, color,  maxSpeed, fuelCapacity, fuelConsumption]);

  this.capacity = capacity;

  Audi.prototype.catsSpecialPlaceCapacity = function(catsAmount) {
    let unplacedCats = this.capacity - catsAmount;
    
    if(unplacedCats < 0) {
        alert(`Для ${Math.abs(unplacedCats)} котик(a/ов) не будет специального места :(`);
    } else {
        alert('Все котики влезут в специальное место :3');
    }

    return unplacedCats;
  };

}
