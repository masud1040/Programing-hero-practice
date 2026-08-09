function matchWinner(teamAGoals, teamBGoals) {
  if (typeof(teamAGoals)!=="number" || typeof(teamBGoals)!=="number") {
    return "Invalid"
}
if (teamAGoals > teamBGoals) {
      return "Team A Won";
    } 
    else if (teamBGoals > teamAGoals) {
      return "Team B Won";
    }
     else if (teamAGoals == teamBGoals) {
      return "Draw";
    }
  
   else {
    return "Invalid";
  }
}

console.log(matchWinner(2, 1));
