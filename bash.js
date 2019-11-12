const pwd = require ('./pwd.js')

const ls = require ('./ls.js')

const cat = require ('./cat.js')

// output a prompt
process.stdout.write('prompt > ')
// stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim()

  // process.stdout.write('You typed: ' + cmd)
  // process.stdout.write('\nprompt > ')
  //input should be a string containing the name of the command & filename
  const cmd = data.toString().trim().split(' ')
  if (cmd[0] === 'pwd') {
    pwd();
  }
  if(cmd[0] === 'ls'){
    ls();
  }
  if(cmd[0] === 'cat'){
    cat([...cmd.slice(1)])
  }

})
