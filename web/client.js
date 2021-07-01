const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'l8sp9jff',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
