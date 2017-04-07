var playList = [
"Bar Original",
"Across the Universe",
"Act Naturally",
"Ain't She Sweet",
"All I've Got to Do",
"All My Loving",
"All Things Must Pass",
"All Together Now"
];

function print(message) {
  document.write(message);
}

function printList(list){
  var listHTML = '<ol>';

for(var i = 0; i < list.length; i += 1){
  listHTML += '<li>' + list[i] + '</li>';
}
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);
