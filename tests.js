// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function () {

  it('should convert 1 to "I"', function () {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 3 to "III"', function () {
    expect(integerToRoman(3)).to.equal('III');
  });

  it('should convert 4 to "IV"', function () {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 9 to "IX"', function () {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('should convert 58 to "LVIII"', function () {
    expect(integerToRoman(58)).to.equal('LVIII');
  });

  it('should convert 944 to "CMXLIV"', function () {
    expect(integerToRoman(944)).to.equal('CMXLIV');
  });

  it('should convert 1994 to "MCMXCIV"', function () {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('should convert 2024 to "MMXXIV"', function () {
    expect(integerToRoman(2024)).to.equal('MMXXIV');
  });

  it('should convert 3999 to "MMMCMXCIX"', function () {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should throw an error for 0', function () {
    expect(() => integerToRoman(0)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for negative numbers', function () {
    expect(() => integerToRoman(-5)).to.throw("The number must be between 1 and 3999.");
  });

  it('should throw an error for numbers greater than 3999', function () {
    expect(() => integerToRoman(4000)).to.throw("The number must be between 1 and 3999.");
  });

  //bug: returns "III" instead)
  it('should throw an error for decimal numbers', function () {   
    expect(() => integerToRoman(3.5)).to.throw();
  });

  //bug: returns "" instead
  it('should throw an error for string input', function () {
    expect(() => integerToRoman("X")).to.throw();
  });

});

describe('romanToInteger', function () {

  it('should convert "I" to 1', function () {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "III" to 3', function () {
    expect(romanToInteger('III')).to.equal(3);
  });

  it('should convert "IV" to 4', function () {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('should convert "IX" to 9', function () {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should convert "LVIII" to 58', function () {
    expect(romanToInteger('LVIII')).to.equal(58);
  });

  it('should convert "CMXLIV" to 944', function () {
    expect(romanToInteger('CMXLIV')).to.equal(944);
  });

  it('should convert "MCMXCIV" to 1994', function () {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('should convert "MMXXIV" to 2024', function () {
    expect(romanToInteger('MMXXIV')).to.equal(2024);
  });

  it('should convert "MMMCMXCIX" to 3999', function () {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('should throw an error for empty input', function () {
    expect(() => romanToInteger('')).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for null input', function () {
    expect(() => romanToInteger(null)).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for integer input', function () {
    expect(() => romanToInteger(123)).to.throw("Input must be a valid Roman numeral.");
  });

  it('should throw an error for invalid character A', function () {
    expect(() => romanToInteger('MA')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for invalid character -', function () {
    expect(() => romanToInteger('-I')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for invalid character .', function () {
    expect(() => romanToInteger('I.I')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for completely invalid characters', function () {
    expect(() => romanToInteger('ABC')).to.throw("The Roman numeral contains invalid characters.");
  });

  it('should throw an error for IIII (I repeated 4 times)', function () {
    expect(() => romanToInteger('IIII')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for VV (V cannot repeat)', function () {
    expect(() => romanToInteger('VV')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for LL (L cannot repeat)', function () {
    expect(() => romanToInteger('LL')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for DD (D cannot repeat)', function () {
    expect(() => romanToInteger('DD')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for IL (invalid subtractive notation)', function () {
    expect(() => romanToInteger('IL')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for IC (invalid subtractive notation)', function () {
    expect(() => romanToInteger('IC')).to.throw("The Roman numeral is not in canonical form.");
  });

  it('should throw an error for MMMM (represents 4000, above maximum)', function () {
    expect(() => romanToInteger('MMMM')).to.throw();
  });

});