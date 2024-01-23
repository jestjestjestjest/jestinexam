//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,`Toyota`, `Corolla` , `Sedan` ,50 ,10],
        [2,`Honda`,` Civic` , `Sedan` ,55 ,8],
        [3,`Ford`, `Mustang` , `SportsCar` ,80 ,5],
        [4,`Jeep`, `Wrangler` , `SUV` ,70 ,7],
        [5,`Nissan`, `Altima` , `Sedan` ,45 ,12]];
//1/ print all car brands 
console.log(`--------all car brands-------`);
carBooking .forEach(car => {
    console.log(car[1]);
});
//2/ print total number of cars available
console.log(`--------total number of cars available-------`);
tncars=carBooking.map(car=>car[5]).reduce((car1,car2)=>car1+car2)
console.log(tncars);

//3/print sedan car details
console.log(`--------sedan car details-------`);
carBooking.filter(car=>car[3]=="Sedan").forEach(car =>console.log(car))

//4/ print cars with price per day grater than 60 
console.log(`--------cars with price per day grater than 60-------`);

carBooking.filter(car=>car[4]>60).forEach(car=>console.log(car[1]))
//5/ print details of ` jeep wrangler`
console.log(`--------details of  jeep wrangler-------`);
jeepwrangler=carBooking.find(car=>car[1]==`Jeep`)
console.log(jeepwrangler);

//6/sort cars based on decending order of the price per day .
console.log(`--------cars decending order of price per day-------`);
dsort=carBooking.sort((a,b)=>b[4]-a[4]).forEach(car =>console.log(car[1]))
//7/sort cars based on ascending order of available cars.
console.log(`--------cars ascending order of available cars-------`);
asort=carBooking.sort((a,b)=>a[5]-b[5]).forEach(car =>console.log(car[1]))

//8/find the car with the most available cars.
console.log(`--------the most available car-------`);

ma=carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(ma[1]);
//9/calculate  the revenue if all cars are rented for a day 
//10/ count the number of sedan cars 
console.log(`--------total number of sedan cars cars-------`);

sdncars=carBooking.filter(car=>car[3]=="Sedan").map(car=>car[5]).reduce((car1,car2)=>car1+car2)
console.log(sdncars);

//11/print all unique car brands 
console.log(`--------all unique car brands-------`);
carBooking .forEach(car => {
    console.log(car[1]);
});

//12/find the total number of available cars for all types
console.log(`--------total number of available cars for all types-------`);

sdncars=carBooking.filter(car=>car[3]=="Sedan").map(car=>car[5]).reduce((car1,car2)=>car1+car2)
console.log(`sedan=${sdncars}`);
sportscars=carBooking.filter(car=>car[3]=="SportsCar").map(car=>car[5]).reduce((car1,car2)=>car1+car2)
console.log(`sportscars=${sportscars}`);
SUV=carBooking.filter(car=>car[3]=="SUV").map(car=>car[5]).reduce((car1,car2)=>car1+car2)
console.log(`SUV=${SUV}`);

//13/find the cars with the fewest available car
console.log(`--------fewest available car-------`);

fewavbl=carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(fewavbl[1]);
//14/ check if there is any car with a price per day exactly 55
console.log(`--------car with a price per day exactly 55-------`);

range=carBooking.some(car=>car[4]==55)
console.log(range?`yes`:`no`);