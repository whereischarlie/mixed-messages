const subjects = ['Ducks', 'Frogs', 'Camels', 'Cats', 'Hobos', 'Trees'];
const actions = ['whispering', 'farting', 'tripping', 'jumping', 'falling'];
const settings = ['where the crawdads sing', 'in the wasteland', 'into the wilds', 'behind the shed', 'on your bed'];

const getRandomSubject = () => {
  return subjects[Math.floor(Math.random() * subjects.length)];
};

const getRandomAction = () => {
  return actions[Math.floor(Math.random() * actions.length)];
};

const getRandomSetting = () => {
  return settings[Math.floor(Math.random() * settings.length)];
};