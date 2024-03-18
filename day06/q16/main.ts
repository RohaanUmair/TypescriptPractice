let guestList: string[] = ['Sahil', 'Aslam', 'Asif'];

//add a guest in the beginning
guestList.unshift('Shahid');
console.log(guestList);

//add a guest in the end
guestList.push('Amjad');
console.log(guestList);

//add a guest in the middle
guestList.splice(guestList.length / 2, 0, 'Huzaifa');
console.log(guestList);