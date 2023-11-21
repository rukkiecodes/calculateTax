export default (prop1, prop2, profile, addTax) => {
    return new Promise((resolve, reject) => {
        const baseAmount = parseFloat(prop1?.subTotal != undefined ? (typeof prop1?.subTotal == 'string' ? prop1?.subTotal.replace(/,/g, '') : prop1?.subTotal) : 0)

        const tax = addTax ? parseFloat(prop2?.tax) == 0 ? parseFloat(profile?.taxType?.tax) : parseFloat(prop2?.tax) : 0

        const taxAmount = parseFloat(baseAmount) * (tax / 100);

        const totalAmount = baseAmount + taxAmount;

        const percentage = ((totalAmount - baseAmount) / baseAmount) * 100


        resolve({
            totalAmount: parseFloat(totalAmount),
            taxAmount: parseFloat(taxAmount),
            percentage: parseFloat(percentage)
        });
    });
};