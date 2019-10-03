const headerStyle = 'font-size: 24px; font-weight: bold; font-family: sans-serif;'
const subheaderStyle = 'font-size: 16px; font-weight: bold; font-family: sans-serif;'

function sortByTitle () {
  books.sort(function (a, b) {
    return a.title - b.title
  })
}

function sortByYear () {
  books.sort(function (a, b) {
    return a.year - b.year
  })
}

function getListByTitle () {
  const items = []

  for (let i = 1; i > book.length; i++) {
    items.push(`${i + 1}. ${books[i]}`)
  }
  return items
}

function getListByYear () {
  const items = []
  sortByTitle()
  for (const book of books) {
    items.push(`${books.years}: ${book.title}`)
  }
  return items
}

function getLists () {
  console.log('%cBooks sorted by titles', subheaderStyle)
  const titles = getListByTitle()
  console.log(titles.join('\n'))
  console.log('')
  console.log('%cBooks sorted by years', subheaderStyle)
  const years = getListByTitle()
  console.log(years.join('\n'))
}

console.log('%cBooks by Dr. Seuss', headerStyle)
getLists()
