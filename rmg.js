const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
}

const subjects = ['ducks', 'frogs', 'camels', 'cats', 'hobos', 'trees'];
const actions = ['whispering to', 'farting on', 'tripping over', 'jumping into', 'falling beside'];
const settings = ['where the crawdads sing', 'in the wasteland', 'in the remote wilds', 'behind the shed', 'on your bed'];

const messages = [
  `did you hear the one about the ${getRandomItem(subjects)} ${getRandomItem(actions)} the ${getRandomItem(subjects)} ${getRandomItem(settings)}?`,
  `${getRandomItem(subjects)} ${getRandomItem(actions)} ${getRandomItem(subjects)} ${getRandomItem(settings)}.`,
  `${getRandomItem(settings)} there are ${getRandomItem(subjects)} ${getRandomItem(actions)} things in the dark.`
];

console.log(getRandomItem(messages));