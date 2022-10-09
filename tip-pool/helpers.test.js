describe("Helpers test and cleanup", function() {
    it('should calculate the sumPaymentTotal correctly', function() {
        allPayments = {
            'payment1': {
                tipAmt:'9',
                billAmt:'10',
            },
        };
        expect(sumPaymentTotal('tipAmt')).toEqual(9);
        expect(sumPaymentTotal('billAmt')).toEqual(10);
    });

    it('should calculateTipPercent correctly', function() {
        let billAmt = 20;
        let tipAmt = 10;
        expect(calculateTipPercent(billAmt, tipAmt)).toEqual(50);
    });

    it('should appendTd to Tr', function() {
        let newTr = document.createElement('tr');
        let trArr = serverTbody.children[0];
        let tdArr = newTr.children;
        appendTd(newTr, 10);

        expect(tdArr).toHaveSize(1);
    });

    it('Should delete td', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toBe(1);

    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
});