// Checks current hour and logs 'Good Morning' if its less tham 12
const currentTime = new Date();
if (currentTime.getHours() < 12){
    console.log('Good Morning');
}