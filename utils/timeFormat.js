const getFormatTime = (time) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};

export { getFormatTime };
