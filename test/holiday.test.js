import { Holiday } from '../src/holiday';

// 3A principles
// * Arrange => GivenXXX
// * Act => WhenXXX
// * Assert => XXXSh

describe('check holiday sayHello', function () {
  let holiday;

  beforeEach(() => {
    holiday = new Holiday();
  });

  it('should return "Today is not Xmas"', () => {
    givenDate(1, 24);
    shouldReturn('Today is not Xmas');
  });

  it('should return "Today is not Xmas" at 11/24', () => {
    givenDate(11, 24);
    shouldReturn('Today is not Xmas');
  });

  it('should return "Merry Xmas"', () => {
    givenDate(12, 25);
    shouldReturn('Merry Xmas');
  });

  it('should return "Merry Xmas" at 12/25', () => {
    givenDate(12, 24);
    shouldReturn('Merry Xmas');
  });

  function givenDate(month, date) {
    holiday.getToday = () => new Date(2020, month - 1, date);
  }

  function shouldReturn(msg) {
    expect(holiday.sayHello()).toBe(msg);
  }
});
