function getComputer()
{
    let choice = Math.floor(Math.random() * 3);
    return choice;
}
function getHuman()
{
    let input = prompt("Enter either rock, paper or scissors: ");
    input = input.toUpperCase();
    let choice;
    if (input === "ROCK")
    {
        choice = 0;
    }
    else if (input === "PAPER")
    {
        choice = 1;
    }
    else if(input === "SCISSORS")
    {
        choice = 2;
    }
    else
    {
        console.log("Invalid input");
        return null;
    }
    return choice;
}
function playRound()
{
    computerChoice = getComputer();
    humanChoice = getHuman();

    const choices = ["Rock", "Paper", "Scissors"];
    console.log(`Computer chose: ${choices[computerChoice]}`);
    console.log(`You chose: ${choices[humanChoice]}`);

    if (computerChoice === 2 && humanChoice === 0)
    {
        console.log("You won, rock beats scissors");
        return 1;
    }
    else if (computerChoice === 0 && humanChoice === 2)
    {
        console.log("You lost, rock beats scissors");
        return -1;
    }
    else if (computerChoice === 0 && humanChoice === 1)
    {
        console.log("You won, paper beats rock");
        return 1;
    }
    else if (computerChoice === 1 && humanChoice === 0)
    {
        console.log("You lost, paper beats rock");
        return -1;
    }
    else if (computerChoice === 1 && humanChoice === 2)
    {
        console.log("You won, scissors beat paper");
        return 1;
    }
    else if (computerChoice === 2 && humanChoice === 1)
    {
        console.log("You lost, scissors beat paper");
        return -1;
    }
    else
    {
        console.log("You drew");
        return 0;
    }
}
function playGame()
{
    let scoreComputer = 0;
    let scoreHuman = 0;

    console.log("Hello, this is a simple five rounded rock-paper-scissors game with a computer. Good luck!!!");

    for (let i = 0; i < 5; i++)
    {
        let result = playRound();
        if (result === 1)
        {
            scoreHuman++;
        }
        else if(result === -1)
        {
            scoreComputer++;
        }
        console.log(`Score: Computer ${scoreComputer} - Human ${scoreHuman}`);
    }
    if (scoreHuman > scoreComputer)
    {
        console.log(`You won by the score ${scoreHuman} to ${scoreComputer}`);
    }
    else if (scoreComputer > scoreHuman)
    {
        console.log(`You lost by the score ${scoreComputer} to ${scoreHuman}`);
    }
    else
    {
        console.log(`You drew by the score ${scoreHuman} to ${scoreComputer}`);
    }
}
playGame();