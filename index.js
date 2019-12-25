// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = "*") {
    
    return function (special = 'special') {
        return `You are ${flair}${special}${flair}!`
    }
}

let Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a/b
    }
}

function actionApplyer(start, arr) {
    let ans = start
    for (let i = 0; i < arr.length; i++) {
        ans = arr[i](ans)
    }

    return ans

}