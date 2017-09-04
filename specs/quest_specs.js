var assert = require("assert");
var Quest = require("../models/quest");

describe("Quest", function(){

    beforeEach(function(){
        quest1 = new Quest("Easy", "Low", "1 leather scrap");
    });

    it("should have a difficulty", function(){
        assert.strictEqual(quest1.difficulty, "Easy");
    });

    it("should have an urgency", function(){
        assert.strictEqual(quest1.urgency, "Low");
    });

    it("should have a reward", function(){
        assert.strictEqual(quest1.reward, "1 leather scrap");
    });

    it("should start off as incomplete/false", function(){
        assert.strictEqual(quest1.completed, false);
    });

    it("should be possible to mark the quest as complete", function(){
        assert.strictEqual(quest1.completeQuest(), true);
    });

})