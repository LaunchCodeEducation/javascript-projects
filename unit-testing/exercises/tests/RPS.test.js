const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("Descriptive feedback...", function(){
       let output = whoWon('rock','rock');
       expect(output).toEqual("TIE!");
    });

    test("Descriptive feedback...", function(){
       let output = whoWon('rock','paper');
       expect(output).toEqual("Player 2 wins!");
    });

    test("Descriptive feedback...", function(){
       let output = whoWon('paper','scissors');
       expect(output).toEqual("Player 2 wins!");
    });

    test("Descriptive feedback...", function(){
       let output = whoWon('scissors','rock');
       expect(output).toEqual("Player 2 wins!");
    });

    test("Descriptive feedback...", function(){
       let output = whoWon('paper','rock');
       expect(output).toEqual("Player 1 wins!");
    });

    test("Descriptive feedback...", function(){
       let output = whoWon('paper1','rock');
       expect(output).toEqual("Invalid Entry!");
    });
 
 });