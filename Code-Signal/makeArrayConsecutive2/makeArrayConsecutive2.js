//notes
//use two variables for min and max
//go through array and compare numbers for min and max against each value in the array
//go through array again to tally about many values are in the range
//subtract that by the difference of min and max



//pseudocode
//prepare two placeholders for the minimum and maximum size values of the statues (done)
//iterate through the group of statues to determine the minimum and maximum values (done)
// go through group again to tally how many statue sizes are within the range (done)
//subtract that tally by the difference of min and max to get how many statues are left

function makeArrayConsecutive2(statues) {
  if (statues.length === 1) return 0

  let min = statues[0];
  let max = statues[0];

  for (let i = 0; i < statues.length; i++) {
    let currentValue = statues[i]

    if (min >= currentValue) {
      min = currentValue
    }
    if (max <= currentValue) {
      max = currentValue
    }
  }

  let tally = 0;

  for (let i = 0; i < statues.length; i++) {
    if (statues[i] > min && statues[i] < max) {
      tally++
    }
  }
  console.log('tally', tally)

  const statuesNeeded = (max - min) - tally - 1
  console.log('statues', statuesNeeded)

  return statuesNeeded

}
