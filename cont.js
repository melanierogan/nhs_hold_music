alert(
	'SAVE OUR NHS \n\nClick anywhere on the page to play some hold music while you wait to book or change your covid jab or booster.',
);

document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('hold_music.mp3');
	console.log(url);

	let a = new Audio(url);
	a.play();
});
