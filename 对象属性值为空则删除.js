let obj = {
  a: '1',
  b: '',
  c: 2
}

let remove = function (obj) {
  Object.keys(obj).forEach(item => {
    if (!obj[item]) delete obj[item]
    return obj
  })
}


console.log(remove(obj))
