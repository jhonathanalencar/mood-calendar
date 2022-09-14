const monthsCode = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
}

export function convertNumberToArrayOfDays(daysAmount: number, monthId: number){
  const days = Array.from(new Array(daysAmount)).map((day, index) =>{
    return  index + 1
  });

  const monthsValues = Object.keys(monthsCode);

  const startWeekDay = new Date(2022, Number(`${monthsValues[monthId - 1]}`) - 1, 1).getDay();
  const lastDayOfPreviousMonth = new Date(2022, monthId - 1, 0).getDate();

  if(startWeekDay > 0){
    const previousMonthDays: number[] = [];
    let previousMonthLastDay = lastDayOfPreviousMonth - startWeekDay + 1;

    for(let i = 0; i < startWeekDay; i++){
      previousMonthDays.push(previousMonthLastDay + i);
    }
    
    const daysWithPreviousMonthDays = previousMonthDays.concat(days);

    return daysWithPreviousMonthDays;
  }


  return days;
}