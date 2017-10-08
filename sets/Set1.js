import Set from '../classes/Set';
import Challenge from '../classes/Challenge';

const Set1 = new Set(1);

// Challenge 1
const Challenge1 = new Challenge({
  number: 1,
  inputs: 'asdfasdfasdf'
}).setProcedure(() => {
  console.log(Challenge1.getInputs());  
});

// Adding Challenges to Set
Set1.addChallenge(Challenge1);

export default Set1;
