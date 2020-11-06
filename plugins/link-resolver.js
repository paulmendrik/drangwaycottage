export default function(doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'cottage') {
    return '/cottage'
  }

  if (doc.type === 'gallery') {
    return '/gallery'
  }

  return "/not-found";

}
