const products=[
{name:'laptop',
icon:'<i class="fa-sharp fa-solid fa-laptop"></i>'},

{name:'gdrive',
icon:'<i class="fa-brands fa-google-drive"></i>'},

{name:'gplus',
icon:'<i class="fa-brands fa-google-plus"></i>'},

{name:'headphones',
icon:'<i class="fa-sharp fa-solid fa-headphones"></i>'},

{name:'camera',
icon:'<i class="fa-duotone fa-camera"></i>'},

{name:'google-play',
icon:'<i class="fa-brands fa-google-play"></i>'},

{name:'laptop',
icon:'<i class="fa-sharp fa-solid fa-laptop"></i>'},

{name:'gdrive',
icon:'<i class="fa-brands fa-google-drive"></i>'},

{name:'gplus',
icon:'<i class="fa-brands fa-google-plus"></i>'},

{name:'headphones',
icon:'<i class="fa-sharp fa-solid fa-headphones"></i>'},

{name:'camera',
icon:'<i class="fa-duotone fa-camera"></i>'},

{name:'google-play',
icon:'<i class="fa-brands fa-google-play"></i>'}

];

let flippedCards=[];
let matched=0;
shuffleCards();
const gameBoard=document.getElementById('gameBoard');
displayCards();


function shuffleCards(){
	for(let i=products.length-1;i>0;i--){
		const randIndex=Math.floor(Math.random()*(i+1));
	}
}

function displayCards(){
	products.forEach((curr,index,arr)=>{
const card=document.createElement('div');
card.setAttribute('id',index);
card.classList.add('cardBack');
card.classList.add('active');
gameBoard.append(card);
card.addEventListener('click',flipCard);
	})
}
	function flipCard(){
		if(flippedCards.length<2 && this.classList.contains('active')){
let cardId=this.getAttribute('id');
flippedCards.push(this);
this.classList.remove('cardBack');
this.innerHTML=products[cardId].icon;
if(flippedCards.length==2){
	setTimeout(checkMatch,1000);
}
}
}

function checkMatch(){
	const card1Id=flippedCards[0].getAttribute('id');
	const card2Id=flippedCards[1].getAttribute('id');
	if(products[card1Id].name===products[card2Id].name){
		flippedCards[0].style.border='none';
	    flippedCards[0].style.backgroundColor='rgb(240, 161, 161)';
	    flippedCards[0].innerHTML='';
	    flippedCards[0].classList.remove('active');
	    flippedCards[1].classList.remove('active');
	    flippedCards[1].style.border='none';
	    flippedCards[1].style.backgroundColor='rgb(240, 161, 161)';
	    flippedCards[1].innerHTML='';
	    matched++;
	    checkGameOver();
}  else{
	flippedCards[0].innerHTML='';
	flippedCards[0].classList.add('cardBack');
	flippedCards[1].innerHTML='';
	flippedCards[1].classList.add('cardBack');

}

flippedCards=[];
}

function checkGameOver(){
	if(matched==products.length/2){
		while(gameBoard.firstChild){
			gameBoard.removeChild(gameBoard.firstChild);
		}

		gameBoard.innerHTML="i LIKE YOU VAISHU!";
		gameBoard.classList.remove('game');
		gameBoard.classList.add('won');
	}
}
