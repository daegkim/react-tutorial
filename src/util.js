class util{
    isNullorWhiteSpace = (_str) => {
        var result = false
        try{
          _str = _str.replace(/ /gi, '')
          if(_str === '' || _str === null || _str === undefined || _str.length === 0){
            result = true
          }
        }
        catch(e){
          console.log(e)
        }
    
        return result
      }
}

module.exports = new util();