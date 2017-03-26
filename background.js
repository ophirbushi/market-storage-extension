(function () {
	'use strict';

	var _storage = {};

	function onMessage(message) {
		if (message.sender === 'popup') {
			chrome.tabs.getSelected(function (tab) {
				chrome.tabs.sendMessage(tab.id, {
					sender: 'background',
					id: message.id,
					content: _storage
				});
			});
		} else if (message.sender === 'content') {
			_storage = message.content;
		}
	}

	chrome.runtime.onMessage.addListener(onMessage);
})();
