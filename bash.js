// // output a prompt
// process.stdout.write('prompt > ')

// // stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim()

//   process.stdout.write('You typed: ' + cmd)
//   process.stdout.write('\nprompt > ')
// })

const exportsFromPwd = require ('./pwd.js')

exportsFromPwd()


const exportsFromLs = require ('./ls.js')
console.log(exportsFromLs)
// exportsFromLs ()

// const fs = require ('fs')

// fs()
