const total = [1,2,3,4,5,6,7,8,9]

// const sum = total.reduce((a,b) => a+b)

const min = total.reduce( (a,b) => { 
    if ( a< b ) { 
        return a 
    } 
    return b 
})

console.log(min)