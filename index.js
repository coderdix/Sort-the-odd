function sortArray(array) {
  // Return empty array if array is empty
  if (array == 0) return array
  
  // Define vars & extract odd / even sets 
  let emptyArray = [], oddArray, output,
      oddNumbers = array.filter(num => num % 2 !== 0),
      evenNumbers = array.filter(num => num % 2 === 0),
      evenPositions = array.map(getPosition)
  
  // Sort odd numbers & output to new array 
  oddNumbers.sort((a,b) => a-b)
  oddArray = emptyArray.concat(oddNumbers)
  
  // Cb fn to get position of even numbers 
  function getPosition(number, index, array) {
    let positions = array.indexOf(evenNumbers[index], index)
    return positions
  }
  evenPositions = evenPositions.slice(0, evenNumbers.length)
  
  // Add even numbers to the sorted array of odd numbers 
  output = oddArray.map(addEvenNumbers)
  function addEvenNumbers(number, index, array) {
    array.splice(evenPositions[index], 0, evenNumbers[index])
    return array.filter(value => value !== undefined)
  }
  
  // Add zero back to its position within the array
  let zeroPosition = array.indexOf(0)
  if (zeroPosition === -1) return output[output.length - 1]
  output[0].splice(zeroPosition, 0, 0)

  // Output the final value 
  return output[output.length - 1]
}

sortArray([1, 92, 30, 80, 92, 1, 5, 2, 58, 40, 86, 7, 56, 68, 11, 27, 72, 49, 26, 75, 24, 77, 87, 93, 56, 97, 84, 94, 76, 40])