describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});


//------------------------------
describe('UNIT TESTS', function () {

  describe('FACTORIAL', function () {
      // before(() => alert("Тестирование началось – перед тестами"));
      // after(() => alert("Тестирование закончилось – после всех тестов"));

      // beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
      // afterEach(() => alert("После теста – заканчиваем выполнение теста"));

      it('return factorial of 5', function () {
          const result = factorial(5);
          assert.equal(result, 120);
      });

      it('return factorial of 1', function () {
          const result = factorial(1);
          assert.equal(result, 1);
      });

      it('returns 1 factorial of 0', function () {
          const result = factorial(0);
          assert.equal(result, 1);
      });

      it('returns null factorial of string', function () {
          const result = factorial('abc');
          assert.isNaN(result, 'String passed');
      });

      it('returns null factorial negative number', function () {
          const result = factorial(-1);
          assert.isNull(result, 'Negative number passed');
      });
  });
});