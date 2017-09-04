var Quest = function(difficulty, urgency, reward){
    this.difficulty = difficulty;
    this.urgency = urgency;
    this.reward = reward;
    this.completed = false;
}

Quest.prototype.completeQuest = function(){
    return this.completed = true;
}


module.exports = Quest;