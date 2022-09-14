export function convertNumberToArrayOfDays(daysAmount: number){
  const days = Array.from(new Array(daysAmount)).map((day, index) =>{
    return  index + 1
  });

  return days;
}