function shortcutkeylistener(d) {
	if (!d.altKey) return;
	switch(d.key) {
		case '1':
			document.location.hash = '#temp';
		break;
		case '2':
			document.location.hash = '#control';
		break;
		case '3':
			document.location.hash = '#gcode';
		break;
		case '4':
			document.location.hash = '#term';
		break;
		case '5':
			document.location.hash = '#timelapse';
		break;
	}
}

window.addEventListener('keydown', shortcutkeylistener);

