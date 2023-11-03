# **calculateTax Function Documentation**

## **Introduction**

The `calculateTax` function is a utility function designed to calculate tax and total amounts based on input parameters. This function returns a promise that resolves to an object containing the total amount and tax amount.

## **Function Signature**

```javascript
const calculateTax = (prop1, prop2, profile) => {
    // Function body
}
```

## **Parameters**

- `prop1`: An object that may contain a `subTotal` property to be used as the base amount.
- `prop2`: An object that may contain a `tax` property to determine the tax rate.
- `profile`: An object representing the user's profile information.

## **Function Logic**

1. The `baseAmount` is determined based on the provided `prop1` object:

   - If `prop1.subTotal` exists and is not `undefined`, it is checked whether it is a string. If it is a string, it is converted to a numeric value by removing commas. If it is not a string, it is used as-is. If `prop1.subTotal` is `undefined`, the base amount is set to 0.

2. The tax rate (`tax`) is determined based on the provided `prop2` object and the user's `profile`:

   - If `prop2.tax` is 0, the function uses the tax rate from the user's profile (`profile.taxType.tax`). If `prop2.tax` is not 0, it is used as the tax rate.

3. The tax amount is calculated by multiplying the `baseAmount` by the tax rate and dividing it by 100.

4. The total amount is calculated by adding the `baseAmount` and the tax amount.

5. The function returns a promise that resolves to an object containing:
   - `totalAmount`: The total amount after applying tax, represented as a float.
   - `taxAmount`: The tax amount, represented as a float.

## **Usage Example**

```javascript
import calculateTax from './calculateTax';

// Sample input parameters
const prop1 = { subTotal: '1000,00' }; // Base amount with commas
const prop2 = { tax: 5 }; // Tax rate
const profile = { taxType: { tax: 8 } }; // User's profile

// Calculate tax and total amounts using the calculateTax function
calculateTax(prop1, prop2, profile)
    .then(result => {
        console.log(`Total Amount: $${result.totalAmount.toFixed(2)}`);
        console.log(`Tax Amount: $${result.taxAmount.toFixed(2)}`);
    });
```

## **GitHub Repository**

- The source code for this function is available in the [calculateTax GitHub repository](https://github.com/rukkiecodes/calculateTax).

## **Notes**

- This function allows for flexible tax and total amount calculations based on input parameters, providing versatility for different scenarios.

- It can be used in applications requiring tax calculations for financial transactions.

---

This Markdown documentation provides a detailed explanation of the `calculateTax` function, its parameters, and how it performs tax and total amount calculations. It also includes a usage example and a link to the GitHub repository for reference.