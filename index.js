const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((acc, batch) => acc + batch, 0);

// Your reducer function or other logic goes here

module.exports = {
  totalBatteries, // Export the totalBatteries variable
  // Other exports if needed
};