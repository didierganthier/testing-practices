function stringLength(str) {
    if(str.length > 10) {
        throw new Error('String is too long');
    } else if(str.length < 1) {
        throw new Error("String is too short");
    }
    return str.length;
}

module.exports = stringLength;