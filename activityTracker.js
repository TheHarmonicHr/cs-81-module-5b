// Prediction: Most Enjoyable activity -> journaling or therapy
// Prediction: Dominant category -> Physical activity
// Prediction: My morning activities have lower enjoymeny than noon.
// I wonder if this is because of lack of caffeine or lack of sleep.

const myWeek = [
  {
    day: "Monday",
    activity: "jogging",
    category: "physical",
    hoursSpent: 1.5,
    enjoyment: 6,
    timeOfDay: "morning"
  },
  {
    day: "Tuesday",
    activity: "calisthenics",
    category: "physical",
    hoursSpent: 1.5,
    enjoyment: 7,
    timeOfDay: "noon"
  },
  {
    day: "Wednesday",
    activity: "therapy",
    category: "mental",
    hoursSpent: 1.0,
    enjoyment: 8,
    timeOfDay: "noon"
  },
  {
    day: "Thursday",
    activity: "running",
    category: "physical",
    hoursSpent: 0.5,
    enjoyment: 6,
    timeOfDay: "morning"
  },
  {
    day: "Friday",
    activity: "journaling",
    category: "mental",
    hoursSpent: 0.5,
    enjoyment: 8,
    timeOfDay: "evening"
  },
  {
    day: "Saturday",
    activity: "gaming",
    category: "mental",
    hoursSpent: 1.0,
    enjoyment: 8,
    timeOfDay: "evening"
  },
  {
    day: "Sunday",
    activity: "walking",
    category: "physical",
    hoursSpent: 1.5,
    enjoyment: 8,
    timeOfDay: "noon"
  }
];

function totalPhysicalHours(week) {
  return week
    .filter(entry => entry.category === "physical")
    .reduce((sum, entry) => sum + entry.hoursSpent, 0);
}

function averageEveningEnjoyment(week) {
  const eveningActivities = week.filter(entry => entry.timeOfDay === "evening");
  const totalEnjoyment = eveningActivities.reduce((sum, entry) => sum + entry.enjoyment, 0);
  return (eveningActivities.length > 0) ? (totalEnjoyment / eveningActivities.length).toFixed(1) : 0;
}

console.log("Average enjoyment for evening activities:", averageEveningEnjoyment(myWeek));
console.log("Total hours spent on physical activities:", totalPhysicalHours(myWeek));

// Custom Higher-Order Function
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

// Example usage:
const restful = filterByCondition(entry => entry.hoursSpent < 1 && entry.enjoyment >= 8);
console.log("Custom filtered activities (restful):", restful.map(entry => entry.activity));
