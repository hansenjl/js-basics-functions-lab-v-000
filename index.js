// Code your solution in this file!
function distanceFromHqInBlocks(location){
  return Math.abs(location - 42)
}

function distanceFromHqInFeet(location){
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end){
  return Math.abs(end - start) * 264
}

function calculatesFarePrice(start, end){
  if (distanceTravelledInFeet(start, end) < 400 ){
    return "free"
  } else if (distanceTravelledInFeet(start, end) > 2500){
      return "cannot travel that far"
    }
  
}