(function () {
	'use strict';

	function onCopyClick() {
		chrome.runtime.sendMessage({
			sender: 'popup',
			id: 'copy',
			content: null
		});
		close();
	}

	function onPasteClick() {
		chrome.runtime.sendMessage({
			sender: 'popup',
			id: 'paste',
			content: null
		});
		close();
	}

	document.getElementById('copyBtn').onclick = onCopyClick;
	document.getElementById('pasteBtn').onclick = onPasteClick;
})();
