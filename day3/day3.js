import { readInput } from '../utils/readInput.js'

function sumItemValues(commonItem) {
  let result = 0

  const itemValue =
    commonItem.toUpperCase() === commonItem
      ? commonItem.charCodeAt(0) - 64 + 26
      : commonItem.charCodeAt(0) - 96

  result += itemValue

  return result
}

function firstPart(listItems) {
  let result = 0

  listItems.forEach((compartment) => {
    const firstCompartment = compartment.substring(0, compartment.length / 2)
    const secondCompartment = compartment.substring(compartment.length / 2)

    const commonItem = firstCompartment
      .split('')
      .find((item) => secondCompartment.includes(item))

    result += sumItemValues(commonItem)
  })

  return result
}

console.log(
  firstPart(readInput('/home/amartins/github/aoc-2022/day3/input.txt'))
)

function secondPart(listItems) {
  let index = 0
  let result = 0
  const compartments = []

  while (listItems.length > index) {
    compartments.push(listItems.slice(index, index + 3))
    index += 3
  }

  compartments.forEach((compartment) => {
    const firstCompartment = compartment[0]
    const secondCompartment = compartment[1]
    const thirdCompartment = compartment[2]

    const commonItem = firstCompartment
      .split('')
      .find(
        (item) =>
          secondCompartment.includes(item) && thirdCompartment.includes(item)
      )

    result += sumItemValues(commonItem)
  })

  return result
}

console.log(
  secondPart(readInput('/home/amartins/github/aoc-2022/day3/input.txt'))
)
