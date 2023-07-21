import db from './db/index.js';

const { Card } = db;

await Card.deleteMany({});

const testCard = new Card({
  name: 'Test Card',
  hp: 2,
  strength: 1,
  powers: [{
    title: 'Pretty good ability',
    desc: `Recklessly grip your sword for defense this turn, providing +1 HP while attacking.\nYou will suffer from it\'s sharp edge and take 1 Damage after the fight.\nThis can kill you.`,
    actions: [{
      preFight: 'hp+1',
      postFight: 'hp-1'
    }]
  }]
});

await testCard.save();
const card = await Card.findOne({ name: 'Test Card' });
console.log(card.powers);