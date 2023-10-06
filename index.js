const rotate = (text, n) => {
    txtArr = text.split("")
  
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        let firstel = txtArr[0]
        txtArr.shift()
        txtArr.push(firstel)
      }
    }
    else if (n < 0) {
      for (let i = -1; i >= n; i--) {
        let lastel = txtArr[txtArr.length - 1]
        txtArr.pop()
        txtArr.unshift(lastel)
      }
    }
  
    console.log(txtArr.join(""))
  }
  
  rotate("hello", -2)
  