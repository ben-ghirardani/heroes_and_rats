var assert = require("assert"); 
var Hero = require("../models/hero");
var Quest = require("../models/quest");
var Food = require("../models/food");

describe("Hero", function(){

    beforeEach(function(){
        hero1 = new Hero("Ben", "broccoli pasta");
        quest1 = new Quest("Easy", "Low", "1 leather scrap");
        food1 = new Food("broccoli pasta", 10);
    })

    it("should have a name", function(){
        assert.strictEqual(hero1.name, "Ben");
    })

    it("should have full health", function(){
        assert.strictEqual(hero1.health, 100);
    })

    it("should have a favourite food", function(){
        assert.strictEqual(hero1.favouriteFood, "broccoli pasta");
    })

    it("should start with an empty quest log", function(){
        assert.strictEqual(hero1.questLog.length, 0);
    })

    it("can declare favourite food", function(){
        assert.strictEqual(hero1.declareFavouriteFood(), "My favourite food is broccoli pasta.");
    })

    it("can add a quest to the quest log", function(){
        assert.strictEqual(hero1.questLog.length, 0);
        hero1.getQuest(quest1);
        assert.strictEqual(hero1.questLog.length, 1);
    })

    it("bag starts off empty", function(){
        assert.strictEqual(hero1.bag.length, 0);
    })

    it("can add food to bag", function(){
        hero1.addToBag(food1);
        assert.strictEqual(hero1.bag.length, 1);
    })

});