const subjects = ['ducks', 'frogs', 'camels', 'cats', 'hobos', 'trees'];
const actions = ['whispering to', 'farting on', 'tripping over', 'jumping into', 'falling beside'];
const settings = ['where the crawdads sing', 'in the wasteland', 'in the remote wilds', 'behind the shed', 'on your bed'];

const getRandomSubject = () => {
  return subjects[Math.floor(Math.random() * subjects.length)];
};

const getRandomAction = () => {
  return actions[Math.floor(Math.random() * actions.length)];
};

const getRandomSetting = () => {
  return settings[Math.floor(Math.random() * settings.length)];
};

const getRandomMessage = () => {
  let randomMessageSelector = Math.floor(Math.random() * 3);
  switch (randomMessageSelector) {
    case 0:
      return 'did you hear the one about the ' + getRandomSubject() + ' ' + getRandomAction() + ' the ' + getRandomSubject() + ' ' + getRandomSetting() + '?';
    case 1:
      return getRandomSubject() + ' ' + getRandomAction() + ' ' + getRandomSubject() + ' ' + getRandomSetting() + '.';
    case 2:
      return getRandomSetting() + ' there are ' + getRandomSubject() + ' ' + getRandomAction() + ' things in the dark.';
  }
};

console.log(getRandomMessage());