/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class BingoPhrase {
  constructor(
    // Defines parameters:
    phrase,
    randomValue,
    centerSquare,
    selected
  ) {
    // Define properties:
    this.phrase = phrase;
    this.randomValue = randomValue;
    this.centerSquare = centerSquare;
    this.selected = selected;
  }
  toggleSelected(gridDiv) {
    if (this.selected == true) {
      this.selected = false;
      gridDiv.classList.remove("highlighted");
    } else {
      this.selected = true;
      gridDiv.classList.add("highlighted");
    }
  }
}

export default BingoPhrase;
