const pwd = () => {
  // console.log('works')

//   // output a prompt
// process.stdout.write('prompt > ')

// // stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim()

//   process.stdout.write('You typed: ' + cmd)
//   process.stdout.write('\nprompt > ')
// })
process.stdout.write(process.cwd())
process.stdout.write('\nprompt > ')
}


module.exports = pwd
