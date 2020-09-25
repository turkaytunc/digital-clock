export const time = () => {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  let fulltime = { hour: h, minute: m, second: s };
  return fulltime;
};

export function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return `${i}`;
}
