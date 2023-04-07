
console.log("==========Class vehicle containing data members and constructor==========");

class Vehicle {
    VahicleName
    Model
    fuel
    color
    price
    
    constructor(VName, Vmodel, Vfuel, Vcolor,Vprice ){
        this.VahicleName = VName;
        this.Model = Vmodel;
        this.fuel = Vfuel;
        this.color = Vcolor;
        this.price = Vprice;
    }
    }
    const Renault = new Vehicle ("Renault ", "Kwid","Petrol","Black",6.75) ;
    console.log(Renault);
    const Maruti = new Vehicle ("Maruti ", "Alto K10","CNG/Petrol","Red",5.95) ;
    console.log(Maruti);
    const Tata = new Vehicle ("Tata ", "Tiago","Diesel","Blue",8.25) ;
    console.log(Tata);
    const Mahindra = new Vehicle ("Mahindra ", "Scorpio-N","Diesel/Petrol","Deep Forest",12.95) ;
    console.log(Mahindra);
    const Toyota = new Vehicle ("Toyota ", "Fortuner","Petrol","Black",35.95) ;
    console.log(Toyota);

    console.log("==========Creating objects from class vehicle and traversing it==========");
    let renault = {
        VahicleName : "Renault",
        Model : "Kwid",
        fuel: "Petrol",
        color : "Black",
        price: 6.75,
    };
    let maruti = {
        VahicleName : "Maruti",
        Model : "AltoK10",
        fuel: "CNG/Petrol",
        color : "Red",
        price: 5.95,
    };
    let tata = {
        VahicleName : "Tata",
        Model : "Tiago",
        fuel: "Diesel",
        color : "Blue",
        price: 8.25,
    };
    let mahindra = {
        VahicleName : "Mahindra",
        Model : "Scorpio-N",
        fuel: "Diesel/Petrol",
        color : "Deep Forest",
        price: 12.95,
    };
    let toyota = {
        VahicleName : "Toyota ",
        Model : "Fortuner",
        fuel: "petrol",
        color : "Black",
        price: 13.95,
    };

    
    const arrayOfVehicles =[renault, maruti, tata, mahindra, toyota];
    for (let index = 0; index < arrayOfVehicles.length; index++) {
        const element = arrayOfVehicles[index];
        
            }
            for (const element of arrayOfVehicles) {
                console.log(`Vehicles Details: VahicleName: ${element.VahicleName},  Model: ${element.Model},  fuel: ${element.fuel},  color: ${element.color},   price: ${element.price}`);
             }



 console.log("==========Class college containing data members and constructor==========");

 class college{
     collegeName
     location
     university
     gradebyNAAC
     constructor(collegeName,location, university, gradebyNAAC){
        this.collegeName = collegeName;
        this.location = location;
        this.university = university;
        this.gradebyNAAC = gradebyNAAC;
     }
 }
  const VPCOE = new college("VPCOE","Baramati","Pune university","A+");
 console.log(VPCOE);
 const WIT = new college("WIT","Solapur","Solapur university","A++");
 console.log(WIT);
 const IIT = new college("IIT","Bombay","Mumbai university","A+++");
 console.log(IIT);
 const VIT = new college("VIT","Pune","Pune university","A+");
 console.log(VIT);

 console.log("==========Traversing object using function and for in loop==========");
 let vpcoe ={
    collegeName :"VPCOE",
     location : "Baramati",
     university :"Pune university",
     gradebyNAAC :"A+"
 }
 let wit = {
    collegeName : "WIT",
    location : "Solapur",
    university : "Solapur university",
    gradebyNAAC : "A++"
}

    let iit = {
    collegeName :  "IIT",
     location : "Bombay",
     university : "Mumbai university",
     gradebyNAAC : "A+++"
    }
    let vit = {
    collegeName: "VIT",
     location : "Pune",
     university : "Pune university",
     gradebyNAAC : "A+"
    }

    function traverseObject(object)
    {
        console.log(`===College details:===`);
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key}: ${element}`);
    }
}
    }
    traverseObject(vpcoe);
    traverseObject(wit);
    traverseObject(iit);
    traverseObject(vit);

  