//Jawed is unable to join
let guestList: string[] = ['Sahil', 'Jawed', 'Asif'];

//replace Jawed with Aslam
guestList[1] = 'Aslam';

guestList.forEach(function(guest){
    console.log(`Dear ${guest} would you like to join me?`);
});