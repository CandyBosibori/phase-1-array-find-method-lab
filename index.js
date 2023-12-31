// code your solution here
function superbowlWin(Array){
const winningResult = Array.find(item => item.result === "W")

if (winningResult){
    return winningResult.year
} else { undefined}
}