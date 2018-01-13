process.on('uncaughtException', e => {
  error(`Fatal error: ${e}`)
  exit(1)
})
