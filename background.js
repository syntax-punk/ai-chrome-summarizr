chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: getText,
  });
});

function getText() {
  return document.body.innerText;
}
