export const timeStampDate = (timeStamp) => {
  const stringDate = new Date(timeStamp*1000).toDateString();
  const date = stringDate.split(' ');
  return date[0];
};
