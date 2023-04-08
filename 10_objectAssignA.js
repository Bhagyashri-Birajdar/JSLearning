const personalDetails ={
    fullName : "Bhagyashri Birajdar",
    Education : "ME",
    age : 32,
    hometown : "Solapur"
    }
const collegeDetails = {
        collegeName: "WIT",
        location : "Solapur",
        university : "Solapur University",
        grade : "A+"
    }

    console.log("=====Merging personal Details and college Details objects=====");
    const mergedObjects =Object.assign(personalDetails,collegeDetails);
    console.log(mergedObjects);

    let arrayOfFriends = ["Lata", "Darshana", "Priyanka", "Madhuri", "Sarika" ];
    Object.freeze(arrayOfFriends);

    console.log("======Iterating friend names using for of loop=====");
    for (const iterator of arrayOfFriends) {
        console.log(iterator);
        
    }