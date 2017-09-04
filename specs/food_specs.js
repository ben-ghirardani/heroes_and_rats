var assert = require("assert");
var Food = require("../models/food");
var Hero = require("../models/hero");
var Quest = require("../models/quest");

describe("Food", function(){

    beforeEach(function(){
        food1 = new Food("broccoli pasta", 10);
        food2 = new Food("old bread", 5);
        hero1 = new Hero("Ben", "broccoli pasta");
        quest1 = new Quest("Easy", "Low", "1 leather scrap");
    });

    it("should have a name", function(){
        assert.strictEqual(food1.name, "broccoli pasta");
        assert.strictEqual(food2.name, "old bread");
    });

    it("should have a nourishment value", function(){
        assert.strictEqual(food1.nourishment, 10);
    });


})