//Jawed is unable to join
var guestList = ['Sahil', 'Jawed', 'Asif'];
//replace Jawed with Aslam
guestList[1] = 'Aslam';
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me?"));
});
