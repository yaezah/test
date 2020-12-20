var op = document.getElementsByClassName("message-name")[0].innerText;

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
    if (request.req == "request"){
		removePosts();
	}
    sendResponse();
    return true;
});

function removePosts(){
	$(".message").not('[data-author='+op+']').hide();
}