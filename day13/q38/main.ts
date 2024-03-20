function describeCity(city: string, country: string = 'Pakistan'){
    console.log(`${city} is in ${country}.`);
}


describeCity('Karachi');
describeCity('Lahore');
describeCity('Tokyo', 'Japan');