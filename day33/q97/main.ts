function getCurrentDateFormatted(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');   //to make sure day is in 2 digits
    const month = String(now.getMonth() + 1).padStart(2, '0')   //adds 1 because months starts from index 0
    const year = now.getFullYear();
    
    return `${day}-${month}-${year}`;
}

console.log(getCurrentDateFormatted());
