export function strLen(str) {
    var strlen = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        if (str.charCodeAt(i) > 255) //如果是汉字，则字符串长度加2
            strlen += 2;
        else 
            strlen++;
    }
    return strlen;
}