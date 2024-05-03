const { spawn } = require('child_process');

// Function to check if input is being piped
const isPipedInput = () => {
  return !process.stdin.isTTY;
};

// If input is not piped, prompt the user
if (!isPipedInput()) {
  console.log("Welcome to Holberton School, what is your name?");
}

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  const input = chunk.trim();
  if (input) {
    console.log(`Your name is: ${input}`);
  }
});

if (isPipedInput()) {
  process.stdin.on('end', () => {
    console.log(`This important software is now closing`);
  });
}

process.on('SIGINT', () => {
  console.log(`This important software is now closing`);
  process.exit();
});
