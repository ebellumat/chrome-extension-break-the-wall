// const createNewTab = () => {
//   chrome.tabs.getSelected(null, function(tab) {
//     chrome.storage.sync.set({ url: tab.url }, function() {
//       window.open(`https://12ft.io/proxy?q=${tab.url}`);
//     });
//   });
// };

// const parseContent = () => {
//   chrome.storage.sync.get(/* String or Array */ ["url"], function(items) {
//     if (items && items.url) {
//       $("#source").val(items.url);
//       $(".clean").click();

//       chrome.storage.sync.set({ url: null }, function() {});
//     }
//   });
// };

// document.addEventListener("DOMContentLoaded", function() {
//   var link = document.getElementById("target");
//   link.addEventListener("click", function() {
//     createNewTab();
//   });
// });

// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     if (location.href.includes("https://outline.com")) {
//       $("#source").ready(function() {
//         parseContent();
//       });
//     }
//   }
// };

chrome.tabs.getSelected(null, function(tab) {
  chrome.storage.sync.set({ url: tab.url }, function() {
    window.open(`https://12ft.io/proxy?q=${tab.url}`);
  });
});

// accept messages from background
chrome.runtime.onMessage.addListener(function(
  request,
  sender,
  sendResponse
) {});
