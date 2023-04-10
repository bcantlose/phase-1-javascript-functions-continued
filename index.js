// code your solution here
function saturdayFun(activity) {
    if (activity === undefined) {
        return `This Saturday, I want to roller-skate!`;
    }
    else {
        return `This Saturday, I want to ${activity}!`
    }
}

function mondayWork(activity) {
   if (activity === undefined) {
    return `This Monday, I will go to the office.`
   }
   else {
    return `This Monday, I will ${activity}.`;
   }
}

function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`;
    }
  }