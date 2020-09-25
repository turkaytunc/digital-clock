import { time, checkTime } from './time';

it('should return time', () => {
  expect(time()).toMatch(/:/);
});
it('should return hours:minutes:seconds', () => {
  expect(time()).toMatch(/\d+:\d+:\d+/);
});

it('should return 01', () => {
  expect(checkTime(1)).toBe('01');
});

it('should return 12', () => {
  expect(checkTime(12)).toBe(12);
});
