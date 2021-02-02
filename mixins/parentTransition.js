export default {
  transition(to, from) {
    if (from !== undefined && from.path === '/') {
      return { name: 'slide', mode: 'in-out' }
    }
    return { name: 'slide', mode: 'out-in' }
  },
}
