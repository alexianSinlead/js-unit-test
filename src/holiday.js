// 需求： 判斷當天是否聖誕節輸出結果
// 輸出是 output ： 'Merry christmas'/'Today is not christmas'
// 情景是 senario ：判斷當天是否聖誕節
// 實例化需求

export class Holiday {
  constructor() {
    this.christmasDay = '12/25';
  }

  sayHello() {
    const today = new Date();

    if (`${today.getMonth() + 1}/${today.getDate()}` === this.christmasDay) {
      return 'Merry Xmas';
    }

    return 'Today is not Xmas';
  }
}
