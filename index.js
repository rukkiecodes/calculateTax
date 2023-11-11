export default (prop1, prop2, profile, addTax) => {
    return new Promise((resolve, reject) => {
        const baseAmount = parseFloat(prop1?.subTotal != undefined ? (typeof prop1?.subTotal == 'string' ? prop1?.subTotal.replace(/,/g, '') : prop1?.subTotal) : 0)

        const tax = parseFloat(prop2?.tax) == 0 ? parseFloat(addTax ? profile?.taxType?.tax : 0) : parseFloat(addTax ? prop2?.tax : 0)

        const taxAmount = parseFloat(baseAmount) * (tax / 100);

        const totalAmount = baseAmount + taxAmount;

        resolve({
            totalAmount: parseFloat(totalAmount),
            taxAmount: parseFloat(taxAmount)
        });
    });
};