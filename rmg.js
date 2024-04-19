const subjects = ['ducks', 'frogs', 'camels', 'cats', 'hobos', 'trees'];
const actions = ['whispering to', 'farting on', 'tripping over', 'jumping into', 'falling beside'];
const settings = ['where the crawdads sing', 'in the wasteland', 'in the remote wilds', 'behind the shed', 'on your bed'];

const getRandomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
}

const getRandomMessage = () => {
  let randomMessageSelector = Math.floor(Math.random() * 3);
  switch (randomMessageSelector) {
    case 0:
      return `did you hear the one about the ${getRandomItem(subjects)} ${getRandomItem(actions)} the ${getRandomItem(subjects)} ${getRandomItem(settings)}?`;
    case 1:
      return `${getRandomItem(subjects)} ${getRandomItem(actions)} ${getRandomItem(subjects)} ${getRandomItem(settings)}.`;
    case 2:
      return `${getRandomItem(settings)} there are ${getRandomItem(subjects)} ${getRandomItem(actions)} things in the dark.`;
  }
};

console.log(getRandomMessage());