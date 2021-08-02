//Series duration of my life
const seriesDurations = [{
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
},
{
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
},
{
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
},
];

//adding my favorite series
seriesDurations.push({
title: "The Office",
days: 3,
hours: 13,
minutes: 0,
})

function logOutSeriesText() {
const lifeTime = 80 * 365 * 24 * 60 //80years*days*hours*min
let seriesSpan = 0
seriesDurations.forEach(series => {
    const seriesDuration = (((series.days * 24 * 60) + (series.hours * 60) + series.minutes) / lifeTime) * 100
    console.log(`${series.title} took ${seriesDuration.toFixed(3)}% of my life`)
    seriesSpan += seriesDuration
})
console.log(`In total that is ${seriesSpan.toFixed(3)}% of my life`)
}

logOutSeriesText();