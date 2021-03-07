module.exports = function check(str, bracketsConfig) {
    let arrStr = str.split("");
    let stack = [];
    let subArr = [];
    for (i = 0; i < arrStr.length; i++) {
        subArr[0] = stack[stack.length - 1];
        subArr[1] = arrStr[i];
        let k = false;
        for (j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j].join("") == subArr.join("")) {
                stack.pop();
                k = true;
            }
        }
        if (!k) {
            stack.push(arrStr[i]);
        }
    }
    return stack.length == 0;
};
