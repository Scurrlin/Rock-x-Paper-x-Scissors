const rpsLookup = {
	rock: {
		beats: 'scissors',
		imageUrl: 'imgs/rock.png'
	},
	paper: {
		beats: 'rock',
		imageUrl: 'imgs/paper.png'
	},
	scissors: {
		beats: 'paper',
		imageUrl: 'imgs/scissors.png'
	}
}

let scores; 

let winner;

let choices;

const scoreEls = {
	player: document.querySelector('#p-score'),
	computer: document.querySelector('#c-score'),
	tie: document.querySelector('#t-score') 
}

const countdown = document.getElementById('countdown');

const choicesEl = {
	player: {
		borderEl: document.querySelector('#p-result'),
		imgEl: document.querySelector('#p-result > img')
	},
	computer: {
		borderEl: document.querySelector('#c-result'),
		imgEl: document.querySelector('#c-result > img')
	}
}

document.querySelector("button").addEventListener('click', playRound);

init()

function init(){
	console.log('Init function invoked, initial states being set!');
	
	scores = {
        player: 0,
        computer: 0,
        tie: 0
    }

    choices = {
        computer: "scissors",
        player: "scissors"
    }

	winner = null;

	render()
}

function render(){
	scoreEls.player.innerText = scores.player;
    scoreEls.computer.innerText = scores.computer;
	scoreEls.tie.innerText = scores.tie;

	for (let choice in choices){
		console.log(choice, " <-key name on the object")
		console.log(choices[choice], " <-choices[choice]")
	
		choicesEl[choice].imgEl.src = rpsLookup[choices[choice]].imageUrl

		if(choice === winner){
			choicesEl[choice].borderEl.style.borderColor = 'gold'
		} else {
			choicesEl[choice].borderEl.style.borderColor = 'white'	
		}
	}

}

function playRound(){

 startCountDown()	

 choices.player = getRandomRPS(); 
 choices.computer = getRandomRPS();
	
 if(choices.player === choices.computer){
	 winner = 'tie';
 } else if(choices.computer === rpsLookup[choices.player].beats){
	winner = 'player';
 } else {
	 winner = 'computer';
 }

 scores[winner]++

 render()
}

function getRandomRPS(){

	const choices = ['rock', 'paper', 'scissors'];
	const randIndex = Math.floor(Math.random() * choices.length)
	return choices[randIndex]
}

function startCountDown(){

}

console.log(getRandomRPS())

