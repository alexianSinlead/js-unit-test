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
    givenDate(11, 24);
    shouldReturn('Today is not Xmas');
  });

  it('should return "Merry Xmas"', () => {
    givenDate(11, 25);
    shouldReturn('Merry Xmas');
  });

  function givenDate(month, date) {
    holiday.getToday = () => new Date(2020, month, date);
  }

  function shouldReturn(msg) {
    expect(holiday.sayHello()).toBe(msg);
  }
});
