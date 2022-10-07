
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: '1000',
    years: '10',
    rate: '6',
  }

  let expected = '11.10';
  let actual = calculateMonthlyPayment(values);
  expect(actual).toEqual(expected);
});


it("should return a result with 2 decimal places", function() {
  // ..
  // If it's a number then you can check if it's evenly divisible by 0.01
  // If it's a string then you can convert to a number and check the above, or, you can split the string on the decimal and check if the second substring is length 2
  let values = {
    amount: '1000',
    years: '10',
    rate: '6',
  }

  let string = calculateMonthlyPayment(values);

  let nums = string.split('.');
  
  expect(nums[1].length).toEqual(2);

});
/// etc