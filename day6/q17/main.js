var guestList = ['Shahid', 'Sahil', 'Huzaifa', 'Aslam', 'Asif', 'Amjad'];
while (guestList.length > 2) {
    var uninvited = guestList.pop();
    console.log("Sorry ".concat(uninvited, " I cannot invite you."));
}
guestList.forEach(function (invited) {
    console.log("".concat(invited, " you are invited."));
});
