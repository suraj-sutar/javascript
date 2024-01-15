console.log(
    `-----------------------------------------Step 1-----------------------------------------`
);
console.log("");
class Vehicle {
    constructor(color, year, make, model, mileage) {
        this.color = color;
        this.year = year;
        this.model = model;
        this.make = make;
        this.mileage = mileage;
    }
}
const Vehicle1 = new Vehicle("White", 2020, "Toyota", "Innova", "16/23 Km/L");

const Vehicle2 = new Vehicle("Silver", 2021, "Honda", "Civic", "16/23 Km/L");

const Vehicle3 = new Vehicle("Red", 2020, "Ford", "Mustang", "3/10 Km/L");

const Vehicle4 = new Vehicle(
    "Black",
    2020,
    "Chevrolet",
    "Malibu",
    "16/23 Km/L"
);

const Vehicle5 = new Vehicle("White", 2020, "Nissan", "Altima", "16/23 Km/L");

const arrayVehicle = [Vehicle1, Vehicle2, Vehicle3, Vehicle4, Vehicle5];

console.log(`Traverse All Created Object: `);
for (const element of arrayVehicle) {
    console.log("");
    console.log(element);
}

console.log(
    `-----------------------------------------Step 2-----------------------------------------`
);
console.log("");

class College {
    constructor(name, location, tuitionFees, library) {
        this.name = name;
        this.location = location;
        this.tuitionFees = tuitionFees;
        this.library = library;
    }

    display() {
        console.log(
            `University Name: ${this.name}, Location: ${this.location}, Tuition Fees: ${this.tuitionFees}, Library Available Or Nor ${this.library}`
        );
    }
}
const clg1 = new College("Pune University", "pune", 80000, "Available");
const clg2 = new College("Mumbai University", "Mumbai", 95000, "Available");
const clg3 = new College(
    "Kolhapur University",
    "Kolhapur",
    85000,
    "Not Available"
);
const clg4 = new College("Nagpur University", "Nagpur", 90000, "Available");

console.log(`First Object Details:`);
clg1.display();
console.log(`Seconf Object Details:`);
clg2.display();
console.log(`Third Object Details:`);
clg3.display();
console.log(`Fourth Object Details:`);
clg4.display();

console.log("");
console.log(
    `-----------------------------------------Step 3-----------------------------------------`
);
console.log("");

function treverseObject(value) {
    for (const key in value) {
        if (Object.hasOwnProperty.call(value, key)) {
            const element = value[key];
            console.log(key + " --> " + value[key]);
        }
    }
}
console.log(`Traverse Object 1: `);
treverseObject(clg1);
console.log("");
console.log(`Traverse Object 2: `);
treverseObject(clg2);
console.log("");
console.log(`Traverse Object 3: `);
treverseObject(clg3);
console.log("");
console.log(`Traverse Object 4: `);
treverseObject(clg4);