export const getCookTime = (seconds: number) : string => {
  if (seconds < 60) return `${seconds} sec`;

  const minutes = seconds / 60;
  if (minutes < 60) return `${minutes} min`;

  const hours = minutes / 60;
  return `${hours} hours`;
};
