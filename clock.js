let d, date, time, timeZero, sec, temp;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  d = new Date();
  sec = d.getSeconds();
  date = d.toLocaleDateString(undefined, options);
  time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  timeZero = d.getHours() + ":" + d.getMinutes() + ":0" + d.getSeconds();
  function timeCheck(sec) {
    if (sec < 10) {
      return 1;
    }
  }
  temp = timeCheck(sec);
  if (temp == 1) {
    document.getElementById("time").innerHTML = `${timeZero}<br> on ${date}`;
  } else {
    document.getElementById("time").innerHTML = `${time} <br>on ${date}`;
  }
}, 1000);
