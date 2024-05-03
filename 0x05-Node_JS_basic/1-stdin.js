function userData() {
  process.stdin.setEncoding('utf8');

  process.stdout.write('Welcome to Holberton School, what is your name?\n');

  process.stdin.on('data', (data) => {
    process.stdout.write(`Your name is: ${data}`);
  });

  process.on('exit', ()=>{
    process.stdout.write('This important software is now closing\n');
  })
}
userData()
