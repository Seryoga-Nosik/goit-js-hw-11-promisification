const task1Btn = document.querySelector('.js-task-1');

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

const onStart = () => {
  delay(2000).then(logger);
  delay(1000).then(logger);
  delay(1500).then(logger);
  console.clear();
};

task1Btn.addEventListener('click', onStart);
