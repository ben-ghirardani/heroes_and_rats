var Hero = function(name, favouriteFood){
    this.name = name;
    this.health = 100;
    this.favouriteFood = favouriteFood;
    this.questLog = [];
    this.bag = []
}

Hero.prototype.declareFavouriteFood = function(){
    return "My favourite food is " + this.favouriteFood + "."
}

Hero.prototype.getQuest = function(quest){
    this.questLog.push(quest);
}

Hero.prototype.addToBag = function(food){
    this.bag.push(food);
}

Hero.prototype.eatFood = function(food){
    this.bag.splice
}

module.exports = Hero;