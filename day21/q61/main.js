var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Truck"] = 1] = "Truck";
    vehicleType[vehicleType["Mototrcycle"] = 2] = "Mototrcycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.Truck);
