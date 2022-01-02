https://slidetodoc.com/poker-uml-and-adt-design-plan-object-oriented/

const Suit = {
    CLUBS : 0,
    SPADES : 1,
    HEARTS : 2,
    DIAMONDS: 3,
}

var Card = function (number, suit) {
  this.number = number;
  this.suit = suit;
}

Card.prototype.getSuitValue = function () {
  return Suit[this.suit];
}

Card.prototype.getCardInfo = function () {
  console.log(`[card number]: ${this.number} | [card suit]: ${this.suit} - ${this.getSuitValue()}`)
}

var Deck = function () {
  this.cards = [];
}

Deck.prototype.getSize = function () {
  return this.cards.length;
}

Deck.prototype.shuffle = function () {
    let size = this.getSize();
    while (size) {
      i = Math.floor(Math.random() * size--);
      [this.cards[size], this.cards[i]] = [this.cards[i], this.cards[size]];
    }
}

Deck.prototype.drawCard = function () {
  if (this.getSize() > 0) { this.cards.pop(); }
  return null;
}

var Game = function () {
  this.players = [],
  this.logs = [],
}

// var Player = function () {}

const card = new Card(1, 'CLUBS');
card.getCardInfo();
