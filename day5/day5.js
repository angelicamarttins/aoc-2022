import { readInput } from '../utils/readInput.js'
import { prepareMoves, prepareResult, prepareStacks } from './day5.utils.js'

function firstPart(steps) {
  const stacks = prepareStacks(steps)
  const moves = prepareMoves(steps)

  moves.forEach((move) => {
    for (let i = 0; i < move[0]; i++) {
      const removedCrate = stacks[move[1]].pop()
      stacks[move[2]].push(removedCrate)
    }
  })

  return prepareResult(stacks)
}

console.log(
  firstPart(readInput('/home/amartins/github/aoc-2022/day5/input.txt'))
)

function secondPart(steps) {
  const stacks = prepareStacks(steps)
  const moves = prepareMoves(steps)

  moves.forEach((move) => {
    const removedCrate = stacks[move[1]].splice(-move[0])
    removedCrate.forEach((crate) => stacks[move[2]].push(crate))
  })

  return prepareResult(stacks)
}

console.log(
  secondPart(readInput('/home/amartins/github/aoc-2022/day5/input.txt'))
)
