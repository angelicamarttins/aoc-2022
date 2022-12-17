function prepareMoves(steps) {
  const moves = steps.slice(10)

  return moves.map((move) => {
    const moveString = move.match(/\d/g)
    moveString.length === 4
      ? moveString.splice(0, 2, moveString[0] + moveString[1])
      : null

    const moveNumber = moveString.map((mv) => Number(mv))

    return moveNumber
  })
}

function prepareResult(stacks) {
  const result = []

  for (const stack in stacks) {
    result.push(stacks[stack].at(-1))
  }

  return result.join('')
}

function prepareStacks(steps) {
  const initialStacks = steps.slice(0, 8)
  const splittedStacks = initialStacks.map((stack) => stack.split(' '))

  let blankSpace = 0
  let arrayNumber = 0

  const separatedStacks = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
  }

  splittedStacks.forEach((stack) => {
    stack.forEach((stk) => {
      if (!stk) {
        blankSpace += 1
      }

      if (stk || blankSpace === 4) {
        arrayNumber < 9 ? (arrayNumber += 1) : (arrayNumber = 1)
        stk
          ? separatedStacks[arrayNumber].push(stk.match(/[A-Z]/g).pop())
          : null
        blankSpace = 0
      }
    })
  })

  for (const stack in separatedStacks) {
    separatedStacks[stack].reverse()
  }

  return separatedStacks
}

export { prepareMoves, prepareResult, prepareStacks }
