import { Holiday } from '../src/holiday';

describe('check holiday sayHello', function () {
  it('should return "Today is not Xmas"', () => {
    const holiday = new Holiday();

    Date.prototype.getMonth = () => 1;
    Date.prototype.getDate = () => 20;

    expect(holiday.sayHello()).toBe('Today is not Xmas');
  });

  it('should return "Merry Xmas"', () => {
    const holiday = new Holiday();

    Date.prototype.getMonth = () => 11;
    Date.prototype.getDate = () => 25;
    
    expect(holiday.sayHello()).toBe('Merry Xmas');
  });
});
