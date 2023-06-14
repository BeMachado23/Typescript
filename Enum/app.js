// Just numbers and only read
var boat;
(function (boat) {
    boat[boat["engine"] = 2] = "engine";
    boat[boat["bow"] = 1] = "bow";
    boat[boat["stern"] = 1] = "stern"; //popa
})(boat || (boat = {}));
var numberOfEngine = boat.engine;
console.log(numberOfEngine);
