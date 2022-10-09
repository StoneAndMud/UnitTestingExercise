describe("Payments test", function() {

    beforeEach( function() {
        billAmtInput.value = 20;
        tipAmtInput.Value = 10;
    });

    it("Should create a currPayment object", function() {
        billAmt = 20;
        submitPaymentInfo();
        currPayment = {
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
        };
        expect(currPayment['billAmt']).toBe(20);
    });

    it("Should return undefined if empty inputs", function() {
        billAmtInput.value = '';
        createCurPayment();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("Should create Payment tr", function() {
        billAmt = 20;
        tipAmt = 10;
        currPayment = {
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
          };
        appendPaymentTable(currPayment);

        expect(paymentTbody).toBeDefined();
    });

    it("Should create Summary tr ", function() {
        updateSummary();

        expect(summaryTds[0]).toBeDefined();
    });

    afterEach(function() {
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.Value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
    });
});  