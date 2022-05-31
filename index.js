// Code your solution in this file!
const returnFirstTwoDrivers= function (array){
    return [array[0],array[1]]
}

const returnLastTwoDrivers= function (array){
    let length=array.length
    return [array[length-2],array[length-1]]
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier=function (int){
    return function (fare){
        return int*fare
    }
}


const fareDoubler= function (int){
    return createFareMultiplier(int)*2
}

const fareTripler=function (int){
    return createFareMultiplier(int)
}

const selectDifferentDrivers= function(array,name){
    if (name===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array)
    }
}