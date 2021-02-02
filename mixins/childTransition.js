export default {
  transition(to, from) {
    if (!from) {
      return 'slide-right'
    }
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    return toDepth < fromDepth ? 'slide-right' : 'slide-left'
  },
}
