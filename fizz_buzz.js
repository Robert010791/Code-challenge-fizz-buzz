for (let fizz = 1; fizz <= 50; fizz++){
    if (fizz % 3 === 0 && fizz % 5 === 0){
      console.log('Fizzbuzz')
    } else if (fizz % 3 === 0){
      console.log('Fiz')
    } else if (fizz % 5 === 0){
      console.log('buzz')
    } else {
      console.log(fizz)
    }
   }