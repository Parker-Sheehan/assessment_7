const sumZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){

            if(arr[i]+arr[j] === 0){
                return true
            }
        }
    }
    return false
}

// O(n^2)
// space O(1)

console.log(sumZero([1,2]))

const hasUniqueChars = (word) => {
    let set = new Set(word.split(''))
    let arr = [... set].join('')
    if(arr === word){
        return true
    }
    return false
}

/// O(n)
// space O(1)

console.log(hasUniqueChars("frie"))

const isPangram = (str) => {
    let refinedStr = ''
    for (let i = 0; i < str.length; i++){
        if (/^[a-zA-Z]/.test(str[i])) {
            refinedStr += str[i].toLowerCase()
        }
    }

    let set = new Set(refinedStr.split(''))
    let arr = [... set].join('')

    if(arr.length == 26){
        return true
    }
    return false
}
// O(n)
// space O(1)


console.log(isPangram('qwertyuiopasdfghjklzxcvbnm,qwertyu[][;;/../,"opasdfghjkl;zxcvbnm,ut not mice'))


const longestWord = (arr) => {
    let lengthCount = -1
    arr.forEach(element => {
        if (element.length > lengthCount){
            lengthCount = element.length
        }
    });
    return lengthCount
}

// O(n)
// space O(1)


console.log(longestWord(['silly', 'dog', 'got', 'lavender', 'on', 'her', 'paws']))