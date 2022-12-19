const year = 2022;
const holidays = ['01/06', '12/31', '12/25'];
const key_month = [1, 4, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6];
function countHours(year, holidays) {
  let year_num = year % 100;
  var sum = 0;
  for (let i = 0; i < holidays.length; i++) {
    let week_day = '';
    let month_ = holidays[i].split('/')[0];
    let day_ = holidays[i].split('/')[1];
    let total =
      year_num +
      parseInt(year_num / 4) +
      parseInt(day_) +
      parseInt(key_month[parseInt(month_) - 1]);
    if (2000 < total < 2099) {
      total = total - 1;
    }
    switch (total % 7) {
      case 1:
        week_day = 'Sunday';
        break;
      case 2:
        week_day = 'Monday';
        break;
      case 3:
        week_day = 'Tuesday';
        break;
      case 4:
        week_day = 'Wednesday';
        break;
      case 5:
        week_day = 'Thursday';
        break;
      case 6:
        week_day = 'Friday';
        break;
    }
    if (
      week_day == 'Monday' ||
      week_day == 'Tuesday' ||
      week_day == 'Wednesday' ||
      week_day == 'Thursday' ||
      week_day == 'Friday'
    ) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countHours(year, holidays));
