let guestList: string[] = ['Shahid', 'Sahil', 'Huzaifa', 'Aslam', 'Asif', 'Amjad'];


while (guestList.length > 2){
    let uninvited = guestList.pop();
    console.log(`Sorry ${uninvited} I cannot invite you.`);
}


guestList.forEach(function(invited){
    console.log(`${invited} you are invited.`);  
});