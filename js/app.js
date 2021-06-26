let dice = document.getElementById('dice');
let crtScr0 = document.getElementById('crt1');
let crtScr1 = document.getElementById('crt2');
let hold0 = document.getElementById('hold1');
let hold1 = document.getElementById('hold2');
let mScr0 = document.getElementById('main1');
let mScr1 = document.getElementById('main2');
let pl0h = document.getElementById('pl1h');
let pl1h = document.getElementById('pl2h');
let roll = document.getElementById('roll');

let rollDice = () => {
	let nu = Math.floor(Math.random() * 6 + 1);
	dice.src = `/img/dice-${nu}.png`;
	return nu;
};

let addCrt = (crtprop) => {
	let scr = rollDice();
	let tempval = crtprop.innerHTML;
	scr = parseInt(tempval) + parseInt(scr);
	crtprop.innerHTML = scr;
};

let holdFunc = (crt, mcr) => {
	let rawValue = crt.innerHTML;
	let mscr = mcr.innerHTML;
	rawValue = parseInt(rawValue);
	mscr = parseInt(mscr) + rawValue;
	mcr.innerHTML = mscr;
	crt.innerHTML = 0;
};

let turn = 0;
const mainfunc = () => {
	roll.addEventListener('click', () => {
		if (turn === 0) {
			pl0h.style = 'text-decoration:underline;';
			pl1h.style = 'text-decoration:none';
		} else if (turn === 1) {
			pl0h.style = 'text-decoration:none';
			pl1h.style = 'text-decoration:underline';
		}
		if (turn === 0) {
			addCrt(crtScr0);
			let newval = parseInt(crtScr0.innerHTML);
			if (newval > 21) {
				turn = 1;
				pl0h.style = 'text-decoration:none';
				pl1h.style = 'text-decoration:underline';
				crtScr0.innerHTML = 0;
				dice.src = `/img/dice-1.png`;
			}
			hold0.addEventListener('click', () => {
				holdFunc(crtScr0, mScr0);
				turn = 1;
				pl0h.style = 'text-decoration:none';
				pl1h.style = 'text-decoration:underline';
				crtScr0.innerHTML = 0;
				dice.src = `/img/dice-1.png`;
			});
		} else if (turn === 1) {
			addCrt(crtScr1);
			let newval = parseInt(crtScr1.innerHTML);
			if (newval > 21) {
				turn = 0;
				crtScr1.innerHTML = 0;
				dice.src = `/img/dice-1.png`;
				pl0h.style = 'text-decoration:underline;';
				pl1h.style = 'text-decoration:none';
			}
			hold1.addEventListener('click', () => {
				holdFunc(crtScr1, mScr1);
				turn = 0;
				crtScr1.innerHTML = 0;
				dice.src = `/img/dice-1.png`;
				pl0h.style = 'text-decoration:underline;';
				pl1h.style = 'text-decoration:none';
			});
		}
	});
};

mainfunc();
