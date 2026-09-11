function askMagicEightBall(question) {
  const responses = [
    
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",

    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  const randomIndex = Math.floor(Math.random() * responses.length);
  const answer = responses[randomIndex];

  console.log(`Question: ${question}`);
  console.log(`Magic 8-Ball says: ${answer}`);
  
  return answer;
}

askMagicEightBall("Will it rain tomorrow?");