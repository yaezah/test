chrome.contextMenus.create({
    title: "Remove Other Posts",
    contexts: ["all"],
    onclick: sendMessage
});

var op;
var link;

function sendMessage() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            req: "request"
        });
    });
	//setTimeout(function(){ getAll();}, 1000);
};