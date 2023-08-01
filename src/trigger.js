import schedule from 'node-schedule';
import main from './main.js';

const date = new Date(2023, 7, 1, 16, 28, 0); // 01:02:03 04/05/2030

const job = schedule.scheduleJob(date, () => {
  setInterval(() => {
    main();
  }, 5000);
});