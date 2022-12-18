import { readInput } from '../utils/readInput.js'

function startMarker(signal, numCharacter) {
  let startSubRoutine = 0
  let endSubRoutine = numCharacter
  let timesProcessed = numCharacter

  while (endSubRoutine < signal.length) {
    const subRoutine = signal.substring(startSubRoutine, endSubRoutine)

    const subRoutineChecked = subRoutine.split('').filter((letter) => {
      const regex = new RegExp(`${letter}`, 'g')
      return subRoutine.match(regex).length > 1
    })

    startSubRoutine++
    endSubRoutine++
    timesProcessed++

    if (subRoutineChecked.length === 0) endSubRoutine = signal.length
  }

  return timesProcessed - 1
}

console.log('Result of the first part of the challenge', 
  startMarker(readInput('/home/amartins/github/aoc-2022/day6/input.txt')[0], 4)
)
console.log('Result of the second part of the challenge',
  startMarker(readInput('/home/amartins/github/aoc-2022/day6/input.txt')[0], 14)
)
