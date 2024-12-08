const { whoWon } = require('../RPS.js');

test("returns 'TIE!' when both players choose rock", function() {
    let output = whoWon('rock', 'rock');
    expect(output).toBe('TIE!');
});

test("returns 'TIE!' when both players choose paper", function() {
    let output = whoWon('paper', 'paper');
    expect(output).toBe('TIE!');
});

test("returns 'TIE!' when both players choose scissors", function() {
    let output = whoWon('scissors', 'scissors');
    expect(output).toBe('TIE!');
});

test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
    let output = whoWon('rock', 'paper');
    expect(output).toBe('Player 2 wins!');
});

test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
    let output = whoWon('paper', 'scissors');
    expect(output).toBe('Player 2 wins!');
});

test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function() {
    let output = whoWon('scissors', 'rock');
    expect(output).toBe('Player 2 wins!');
});

test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors", function() {
    let output = whoWon('rock', 'scissors');
    expect(output).toBe('Player 1 wins!');
});

test("returns 'Player 1 wins!' if P1 = paper & P2 = rock", function() {
    let output = whoWon('paper', 'rock');
    expect(output).toBe('Player 1 wins!');
});

test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
    let output = whoWon('scissors', 'paper');
    expect(output).toBe('Player 1 wins!');
});
