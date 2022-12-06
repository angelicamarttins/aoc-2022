const { readFileSync } = require('fs')

const calories = (list) => {
  const content = readFileSync(list, 'utf-8')
  const lines = content.split('\n\n')

  const sumOfEachLine = lines.map((line) => {
    const newLine = line.split('\n').map((line) => Number(line))
    return newLine.reduce((acc, cur) => acc + cur)
  })

  const sortedCalories = sumOfEachLine.sort((a, b) => a - b)
  const sumOfCalories = sortedCalories.slice(-3).reduce((acc, cur) => acc + cur)

  return { majorCalorie: Math.max(...sortedCalories), sumOfCalories }
}

console.log(calories('/home/amartins/github/aoc-2022/day1/input.txt'))
