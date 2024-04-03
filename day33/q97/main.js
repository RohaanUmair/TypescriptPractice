function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0'); //to make sure day is in 2 digits
    var month = String(now.getMonth() + 1).padStart(2, '0'); //adds 1 because months starts from index 0
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted());
