let calculator = {

  // Свойства для хранения чисел
  a: 0,
  b: 0,

  /**
   * Метод read(a, b) принимает два числа и сохраняет их
   */
  read(a, b) {
    this.a = a;
    this.b = b;
  },

  /**
   * Метод sum() возвращает сумму
   */
  sum() {
    return this.a + this.b;
  },

  /**
   * Метод mul() возвращает произведение
   */
  mul() {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ ЭТУ СТРОКУ — она нужна для проверки
window.calculator = calculator;
