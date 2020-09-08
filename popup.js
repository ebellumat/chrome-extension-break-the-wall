function myfunc(){
  var x = $('video').find();
  chrome.extension.sendMessage({sel_text: x});
}

$(document).ready(function(){
  $('video').change(myfunc);
});