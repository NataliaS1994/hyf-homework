//When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function getArrivalTime (travelInformation) {
    const approxTime = 432 / 50;
    let hours = Math.floor(approxTime);
    let minutes = Math.floor((approxTime % 1) * 60);

    return `Travel time is ${hours} hours and ${minutes} minutes.`
}

const travelTime = getArrivalTime(travelInformation);

console.log((travelTime)); // 8 hours and 38 minutes


getArrivalTime(); 