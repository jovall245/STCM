// Car object: five attributes and one display() method.
class Car {
  constructor(make, model, year, color, horsepower) {
    this.make = make;             // Attribute 1
    this.model = model;           // Attribute 2
    this.year = year;             // Attribute 3
    this.color = color;           // Attribute 4
    this.horsepower = horsepower; // Attribute 5
  }

  display() {
    // Create a styled card using this object's five attributes.
    const card = document.createElement('article');
    card.className = 'car-card';
    const top = document.createElement('div');
    top.className = 'car-top';
    const symbol = document.createElement('span');
    symbol.className = 'car-symbol';
    symbol.textContent = '🚗';
    const heading = document.createElement('div');
    const name = document.createElement('h3');
    name.textContent = `${this.make} ${this.model}`;
    const subtitle = document.createElement('span');
    subtitle.textContent = 'Car Collection';
    heading.append(name, subtitle);
    top.append(symbol, heading);

    const details = document.createElement('dl');
    details.className = 'car-details';
    const attributes = [
      ['Make', this.make],
      ['Model', this.model],
      ['Year', this.year],
      ['Color', this.color],
      ['Horsepower', `${this.horsepower} hp`]
    ];
    attributes.forEach(([label, value]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      details.appendChild(row);
    });
    card.append(top, details);
    return card;
  }
}

// Array containing exactly five Car objects.
const cars = [
  new Car('Ford', 'Mustang GT', 2024, 'Red', 480),
  new Car('Chevrolet', 'Camaro SS', 2023, 'Black', 455),
  new Car('Toyota', 'Supra', 2024, 'Blue', 382),
  new Car('Nissan', 'Z', 2024, 'White', 400),
  new Car('Dodge', 'Challenger R/T', 2023, 'Gray', 375)
];

// Test the JavaScript in index.html by displaying all five objects.
const carContainer = document.getElementById('cars');
cars.forEach(car => carContainer.appendChild(car.display()));
document.getElementById('count').textContent = `${cars.length} cars`;
console.log('Car objects loaded:', cars.length);
