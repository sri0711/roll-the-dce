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
let pop = document.getElementById('pop');
let winner = document.getElementById('winner');
let left = document.getElementById('left');
let right = document.getElementById('right');

let rollDice = () => {
	let nu = Math.floor(Math.random() * 6 + 1);
	dice.src = `/img/dice-${nu}.svg`;
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
	pl0h.style = 'text-decoration:underline;';

	roll.addEventListener('click', () => {
		if (turn === 0) {
			addCrt(crtScr0);

			let newval = parseInt(crtScr0.innerHTML);

			if (newval >= 21) {
				turn = 1;

				crtScr0.innerHTML = 0;
				dice.src = `/img/dice-1.svg`;
			}

			hold0.addEventListener('click', () => {
				holdFunc(crtScr0, mScr0);
				turn = 1;

				crtScr0.innerHTML = 0;
				dice.src = `/img/dice-1.svg`;

				let mainval = parseInt(mScr0.innerHTML);

				if (mainval >= 100) {
					pop.style = 'display:flex;';
					winner.innerHTML = 'player 1 is Winner';
				}
			});
		} else if (turn === 1) {
			addCrt(crtScr1);

			let newval = parseInt(crtScr1.innerHTML);

			if (newval >= 21) {
				turn = 0;

				crtScr1.innerHTML = 0;
				dice.src = `/img/dice-1.svg`;
			}

			hold1.addEventListener('click', () => {
				holdFunc(crtScr1, mScr1);
				turn = 0;

				crtScr1.innerHTML = 0;
				dice.src = `/img/dice-1.svg`;

				let mainval = parseInt(mScr1.innerHTML);

				if (mainval >= 100) {
					pop.style = 'display:flex;';
					winner.innerHTML = 'player 2 is Winner';
				}
			});
		}
	});
};

let mbody = document.getElementById('mbody');
mbody.addEventListener('click', () => {
	if (turn === 0) {
		pl0h.style = 'text-decoration:underline;';
		pl1h.style = 'text-decoration:none';
		left.style = 'background: rgba(255, 255, 255, 0.6);';
		right.style = 'background: rgba(255, 255, 255, 0.2);';
	} else if (turn === 1) {
		pl0h.style = 'text-decoration:none';
		pl1h.style = 'text-decoration:underline';
		right.style = 'background: rgba(255, 255, 255, 0.6);';
		left.style = 'background: rgba(255, 255, 255, 0.2);';
	}
});

mainfunc();
