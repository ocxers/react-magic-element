var toArr = (str, spliter) => {
    return str.toString().split(spliter)
}


console.log(toArr('abc def', /,| /g))
console.log(toArr('abc,def', /,| /g))