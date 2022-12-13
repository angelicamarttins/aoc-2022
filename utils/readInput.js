import { readFileSync } from 'fs'

function readInput(input) {
  const content = readFileSync(input, 'utf-8')
  const splittedContent = content.split('\n')
  return splittedContent
}

export { readInput }
