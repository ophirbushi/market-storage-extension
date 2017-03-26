(function () {
	'use strict';

	function getLocalStorage() {
		var mud = localStorage.getItem('mud');
		var token = localStorage.getItem('token');

		var escapedMud = typeof mud === 'string' ? escape(mud) : '';
		var escapedToken = typeof token === 'string' ? escape(token) : '';

		return {
			escapedMud,
			escapedToken
		};
	}

	function setLocalStorage(obj) {
		var mud = unescape(obj.escapedMud);
		var token = unescape(obj.escapedToken);

		localStorage.setItem('mud', mud);
		localStorage.setItem('token', token);
	}

	function onMessage(message) {
		if (message.sender === 'background') {
			switch (message.id) {
				case 'copy':
					var obj = getLocalStorage();
					chrome.runtime.sendMessage({
						sender: 'content',
						id: 'copy',
						content: obj
					});
					break;
				case 'paste':
					setLocalStorage(message.content);
					break;
			}
		}
	}

	chrome.runtime.onMessage.addListener(onMessage);
})();
