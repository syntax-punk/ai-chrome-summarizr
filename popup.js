document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: getText,
      },
      function (results) {
        const text = results[0].result;
        document.getElementById('text').textContent = text;
      }
    );
  });
});

function getText() {
  return document.body.innerText;
}
