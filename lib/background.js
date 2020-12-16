// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.ib, {
    file: "lib/main.js",
  });
});
