let update_time = () => {
  const date = new Date();
  const hour_time = date.getHours();
  const minute_time = date.getMinutes();
  const second_time = date.getSeconds();
  const ms_time = date.getMilliseconds();

  const hour_rotation = 30 * hour_time + minute_time / 2;
  const minute_rotation = 6 * (minute_time + second_time / 60);
  const second_rotation = 6 * (second_time + ms_time / 1000);

  const hour = document.getElementById('hour');
  const minute = document.getElementById('minute');
  const second = document.getElementById('second');

  hour.style.transform = `rotate(${hour_rotation}deg)`;
  minute.style.transform = `rotate(${minute_rotation}deg)`;
  second.style.transform = `rotate(${second_rotation}deg)`;
}

update_time()
setInterval(update_time, 10);
