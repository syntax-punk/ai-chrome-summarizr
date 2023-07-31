document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

    const activeTabId = tabs[0].id;
    chrome.scripting.executeScript(
      {
        target: { tabId: activeTabId },
        func: getText,
      },
      function (results) {
        console.log(results)
        const text = results[0].result;
        document.getElementById('text').textContent = text;
      }
    );
  });
});

function getText() {
  return document.body.innerText;
}
