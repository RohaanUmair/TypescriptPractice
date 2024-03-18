var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log('original order:', places);
console.log('alphabetical order:', __spreadArray([], places, true).sort());
console.log('reversed alphabetical order:', __spreadArray([], places, true).sort().reverse());
