function solve(currSpeed, currArea) {
    let difference = 0;
    let speedLimit = 0;
    let status = "";

    if (currArea === "motorway"){
       speedLimit = 130;
       if (currSpeed <= speedLimit){
        console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);
       } else {
        difference = currSpeed - speedLimit
        if (currSpeed > speedLimit && currSpeed <= speedLimit + 20){
            status = "speeding";

           } else if (currSpeed > speedLimit + 20 && currSpeed <= speedLimit + 40) {
            status = "excessive speeding";

           } else if (currSpeed > speedLimit + 40){
            status = "reckless driving";
           }

           console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
           
       } 

    } else if (currArea === "interstate") {
        speedLimit = 90;
        if (currSpeed <= speedLimit){
         console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);
        } else {
         difference = currSpeed - speedLimit
         if (currSpeed > speedLimit && currSpeed <= speedLimit + 20){
             status = "speeding";
 
            } else if (currSpeed > speedLimit + 20 && currSpeed <= speedLimit + 40) {
             status = "excessive speeding";
 
            } else if (currSpeed > speedLimit + 40){
             status = "reckless driving";
            }
 
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            
        } 
    } else if (currArea === "city") {
        speedLimit = 50;
        if (currSpeed <= speedLimit){
         console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);
        } else {
         difference = currSpeed - speedLimit
         if (currSpeed > speedLimit && currSpeed <= speedLimit + 20){
             status = "speeding";
 
            } else if (currSpeed > speedLimit + 20 && currSpeed <= speedLimit + 40) {
             status = "excessive speeding";
 
            } else if (currSpeed > speedLimit + 40){
             status = "reckless driving";
            }
 
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            
        }
    } else if (currArea === "residential") {
        speedLimit = 20;
        if (currSpeed <= speedLimit){
         console.log(`Driving ${currSpeed} km/h in a ${speedLimit} zone`);
        } else {
         difference = currSpeed - speedLimit
         if (currSpeed > speedLimit && currSpeed <= speedLimit + 20){
             status = "speeding";
 
            } else if (currSpeed > speedLimit + 20 && currSpeed <= speedLimit + 40) {
             status = "excessive speeding";
 
            } else if (currSpeed > speedLimit + 40){
             status = "reckless driving";
            }
 
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            
        }
    }

}

solve(200, 'motorway')