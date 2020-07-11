import lunr from 'lunr'
import data from './data.js'

const searchResult = data.searchResult

const idx = lunr(function () {
  this.ref('id')
  this.field('text')
  this.field('topics')

  searchResult.forEach(function (doc) {
    this.add(doc)
  }, this)
})

const search = (q, t, fileSystemHost) => {
  const queryArgs = []
  if (q !== '') {
    queryArgs.push(`text:${q}`)
  }
  if (t !== '') {
    const topics = t.split(',')
    topics.forEach(t => {
      queryArgs.push(`topics:${t.replace(' ', '\\ ')}`)
    })
  }
  const queryText = queryArgs.join(' ')
  const matched = idx.search(queryText)
  const matchedDocuments = matched.map(m => {
    const imageId = parseInt(m.ref) % 14
    const imagePath = `${fileSystemHost}/img/${imageId}.jpg`
    return {
      ...searchResult.find(d => {
        return parseInt(m.ref) === parseInt(d.id)
      }),
      image: imagePath
    }
  })
  return matchedDocuments
}

export default search
