import { readInput } from '../utils/readInput.js'

function sectionsParts(section) {
  const separatedSections = section.split(',')

  const startFirstSection = Number(separatedSections[0].split('-')[0])
  const endFirstSection = Number(separatedSections[0].split('-')[1])

  const startSecondSection = Number(separatedSections[1].split('-')[0])
  const endSecondSection = Number(separatedSections[1].split('-')[1])

  return {
    endFirstSection,
    endSecondSection,
    startFirstSection,
    startSecondSection,
  }
}

function firstPart(pairsList) {
  const result = pairsList.filter((section) => {
    const {
      endFirstSection,
      endSecondSection,
      startFirstSection,
      startSecondSection,
    } = sectionsParts(section)

    const firstContainsSecond =
      startFirstSection <= startSecondSection &&
      endFirstSection >= endSecondSection

    const secondContainsFirst =
      startSecondSection <= startFirstSection &&
      endSecondSection >= endFirstSection

    return firstContainsSecond || secondContainsFirst
  })

  return result.length
}

console.log(
  firstPart(readInput('/home/amartins/github/aoc-2022/day4/input.txt'))
)

function secondPart(pairsList) {
  const result = pairsList.filter((section) => {
    const {
      endFirstSection,
      endSecondSection,
      startFirstSection,
      startSecondSection,
    } = sectionsParts(section)

    const firstContainsSecond =
      startFirstSection <= startSecondSection &&
      endFirstSection >= endSecondSection

    const secondContainsFirst =
      startSecondSection <= startFirstSection &&
      endSecondSection >= endFirstSection

    const firstStartOverlapsSecond =
      startFirstSection >= startSecondSection &&
      startSecondSection >= endFirstSection
    const firstEndOverlapsSecond =
      startFirstSection >= endSecondSection &&
      endSecondSection >= endFirstSection

    const secondStartOverlapsFirst =
      startFirstSection <= startSecondSection &&
      startSecondSection <= endFirstSection
    const secondEndOverlapsFirst =
      startFirstSection <= endSecondSection &&
      endSecondSection <= endFirstSection

    return (
      firstContainsSecond ||
      firstStartOverlapsSecond ||
      firstEndOverlapsSecond ||
      secondContainsFirst ||
      secondStartOverlapsFirst ||
      secondEndOverlapsFirst
    )
  })

  return result.length
}

console.log(
  secondPart(readInput('/home/amartins/github/aoc-2022/day4/input.txt'))
)
