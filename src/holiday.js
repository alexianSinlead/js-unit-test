// 需求： 判斷當天是否聖誕節輸出結果
// 輸出是 output ： 'Merry christmas'/'Today is not christmas'
// 情景是 senario ：判斷當天是否聖誕節
// 實例化需求
// 需求修改： 要 12/24 號也會顯示 'Merry christmas'

export class Holiday {
  constructor() {
    this.christmasDay = '12/25';
  }

  sayHello() {
    const today = this.getToday();

    // if (`${today.getMonth() + 1}/${today.getDate()}` === this.christmasDay) {
    if (today.getMonth() + 1 === 12 && (today.getDate() === 25 || today.getDate() === 24)) {
      return 'Merry Xmas';
    }

    return 'Today is not Xmas';
  }

  getToday() {
    return new Date();
  }
}
