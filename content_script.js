var oldLocation = location.href;

var valor = null;

const createNewTab = () => {
 
    chrome.tabs.getSelected(null, function(tab){
      chrome.storage.sync.set({ "url": tab.url }, function(){
        window.open('https://outline.com/');
      });
  });
}

const parseContent = () => {
  chrome.storage.sync.get(/* String or Array */["url"], function(items){
    if (items && items.url) {
      $('#source').val(items.url);
      $('.clean').click();

      chrome.storage.sync.set({ "url": null}, function(){
      });
    }
  });
}

setInterval(function() {
  if(location.href != oldLocation) {
    oldLocation = location.href
  }
}, 1000); // check every second

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('target');
  link.addEventListener('click', function() {
    createNewTab();
  });
});

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    if (location.href.includes('https://outline.com')) {
      $("#source").ready(function(){
        parseContent();
     });
    }
  }
};

// accept messages from background
chrome.runtime.onMessage.addListener (function (request, sender, sendResponse) {
});

