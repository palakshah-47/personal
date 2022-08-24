/*
* There are 2 playes having 2 decks of cards numbered 1 to 10.
each player takes a trun and who ever get higher card, gets both the card
and place bottom of the deck with higher card first and lower card second.
Once any player finishes all cards, game is over and the other player wins.
Return number of total turns the game will be having.
ex:
deck1 = [1,4], deck = [2,3]
1. player1: 1, player2: 2, 1 < 2, so both card will go with player2 and it will become,
deck1 = [4], deck2 = [3,2,1]
2. player1: 4, player1: 3, 4 > 3, so both card will fo with player1 and it will become,
deck1 = [4,3], deck2 = [2,1];
3. player1: 4, palyer2: 2, 4 > 2, so both card will go with player1 and it will become,
deck1 = [3,4,2], deck2 = [1];
4. player1: 3, player2 : 1, 3 > 1, so both card will go with player1 and it will become,
deck1 = [4,2,3,1], deck2 = [], so the game will be over and total turns: 4 
*/
function deckGame(deck1, deck2) {
    let count = 0;
    while(deck1.length !== 0 && deck2.length !== 0){
        let num1 = deck1[0];
        let num2 = deck2[0];
        if (num1 >= num2) {
            deck1.shift();
            deck2.shift();
            deck1.push(num1);
            deck1.push(num2);
            count++;
        } else {
            deck2.shift();
            deck1.shift();
            deck2.push(num2);
            deck2.push(num1);
            count++;
        }
        if (deck1.length === 0 || deck2.length === 0) return count;

     }
    
}

console.log(deckGame([1, 4], [2, 3]));