/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

import BingoPhrase from "./BingoPhrase.js";

// Start with a big string containing all of the phrases delimited by a period
const bigPhraseString =
  "Break the paint.One of the greatest players of all time.Poole led league in freethrows last year.Teams save their best for the Dubs.Air balls go to the offense.Taking care of the ball.The green lantern is lit.Human torch.Rings the register.Iguodala siting.University of Kentucky.Heat check.Draymond gets a T.Defend without fouling.Kelenna  corrects Fitz.Rebound in motion.Too Many turnovers.Those are the ones the Warriors need to get.Going Downhill.Best Shooter in the World.Let the game come to him.That's a 4 (or5) point swing.Tornado move.If it hadn't have gone in they would have called a foul.Playing the clock and the other team.Moving without the ball.Poole party.Draymond hits a 3.Kelenna  does funny voice.Close up of fan dancing.Fan wearing Curry jersey.Four point play.Divincenzo steals the ball.Ball don't lie.Can't buy a basket.A Warrior has over 30 points.All he can eat.Review of Ref's style of TV announcement.Other team is over the foul limit.Everyone thinks they can get past Looney";
// convert it to upper case
const upperCasePhraseString = bigPhraseString.toUpperCase();
// create an array of phrases delimited by period character
const phraseStrings = upperCasePhraseString.split(".");

// establish an empty array of bingoPhrase objects
const bingoPhrases = [];

// now load up bingoPhrases with an array of BingoPhrase objects including random values
phraseStrings.forEach(function (item) {
  bingoPhrases.push(new BingoPhrase(item, Math.random(), false, false));
});

// randomize bingoPhrases by sorting entries by the Math.random() value in each one
bingoPhrases.sort(function (a, b) {
  return parseFloat(a.randomValue) - parseFloat(b.randomValue);
});

// get the grid container for the bingo squares
const grid = document.querySelector(".grid-container");

// load up the grid squares
for (let i = 0; i < 25; i++) {
  // get a bingo phrase object
  let phrase = bingoPhrases.pop();
  // create a new div
  const newDiv = document.createElement("div");

  //mark the center square as centerSquare and mark it as selected
  if (i == 12) {
    phrase.phrase = "FREE";
    phrase.selected = true;
    phrase.centerSquare = true;
    newDiv.classList.add("highlighted");
    newDiv.classList.add("centerSquare");
  } else {
    newDiv.addEventListener("click", (e) => {
      // console.log("event fired: ${e}");
      // console.log(phrase.phrase);
      phrase.toggleSelected(newDiv);
    });
  }
  // register click event handling routine here...
  // here's what the routine does:
  //       phrase.toggleSelected()
  //       if phrase.selected = true then add class list "highighted"
  //           else remove "highlighted" from classlist
  // change class-list to selected or not selected... (css to paint items that
  // are selected.)

  newDiv.classList.add("grid-item");

  // create template literal for new div element
  newDiv.innerHTML = `
   ${phrase.phrase}
  `;
  // add new item to grid
  grid.append(newDiv);
}
