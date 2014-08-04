console.log ('content_script.js is running it is supposed to inject things');
(function () {
    console.log ("self running function content_script.js runnin away train");

    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    });
}
)();

(function () {
    console.log ("self running 2222222 content_script.js runnin away train");
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
        });
}
)();
