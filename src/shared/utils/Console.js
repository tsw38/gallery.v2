export default function() {
	const flatten = list => list.reduce(
		(a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
	);

	console.clear();

	// Standard
	var _log = console.log;

	// Prefixed, line number ignored
	console.log = (...args) => {
		if (isNaN(args[args.length - 1]) || (isNaN(args[args.length - 1]) && args[args.length - 1] >= 8)) return _log.apply(console, args);

		let message = args;

		const lvl = message.pop();
		var msgLen = JSON.stringify(flatten(message).reduce((str, elem) => {
			str += ("" + elem);
			return str;
		}, '') || '').length;
		let colors = '';
		switch (lvl) {
			case 1:
				colors = 'background: #ff6b6b;color:#fff';
				break;
			case 2:
				colors = 'background: #ff9f43;color:#fff';
				break;
			case 3:
				colors = 'background: #ff9ff3;color:#fff';
				break;
			case 4:
				colors = 'background: #10ac84;color:#fff';
				break;
			case 5:
				colors = 'background: #48dbfb;color:#fff';
				break;
			case 6:
				colors = 'background: #2e86de;color:#fff';
				break;
			case 7:
				colors = 'background: #5f27cd;color:#fff';
				break;
			case 8:
				colors = 'background: #fff;color:#000';
				break;
		}
		_log.apply(console, [`%c ${' '.repeat(msgLen+1)}\n ${JSON.stringify(message.length > 1 ? message : message[0], null, 4)} \n${' '.repeat(msgLen+1)}`, colors]);
	}
}