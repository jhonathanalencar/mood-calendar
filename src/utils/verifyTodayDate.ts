export function verifyTodayDate(month: number, day: number){
  const todayDate = new Date();
  const candidateDate =  new Date(`2022 ${month} ${day}`);

  const isSameMonth = candidateDate.getMonth() === todayDate.getMonth();
  const isSameDay = candidateDate.getDate() === todayDate.getDate(); 
  
  const isToday = isSameMonth && isSameDay;
  
  return isToday;
}