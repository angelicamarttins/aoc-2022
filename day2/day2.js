import { readInput } from '../utils/readInput.js'

function getAndPrepareData() {
  const content = readInput('/home/amartins/github/aoc-2022/day2/input.txt')
  const splittedContent = content.map((play) => play.trim().split(' '))

  return splittedContent
}

function firstPart(plays) {
  let result = 0

  const combinations = {
    X: {
      value: 1,
      A: 3,
      B: 0,
      C: 6,
    },
    Y: {
      value: 2,
      A: 6,
      B: 3,
      C: 0,
    },
    Z: {
      value: 3,
      A: 0,
      B: 6,
      C: 3,
    },
  }

  plays.forEach((play) => {
    const myPlay = combinations[play[1]]
    const winDrawOrDefeat = myPlay[play[0]]

    result += winDrawOrDefeat + myPlay.value
  })

  return result
}

console.log(firstPart(getAndPrepareData()))

function secondPart(plays) {
  const combinations = {
    X: {
      A: 'Z',
      B: 'X',
      C: 'Y',
    },
    Y: {
      A: 'X',
      B: 'Y',
      C: 'Z',
    },
    Z: {
      A: 'Y',
      B: 'Z',
      C: 'X',
    },
  }

  const newPlays = plays.map((play) => {
    const winDrawOrDefeat = combinations[play[1]]
    const opponentsPlay = winDrawOrDefeat[play[0]]
    play.splice(-1, 1, opponentsPlay)

    return play
  })

  return firstPart(newPlays)
}

console.log(secondPart(getAndPrepareData()))
