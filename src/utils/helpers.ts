import numbro from 'numbro';

export const numberFormat = (number: number | string) => {
    return numbro(number).format('0,0');
}

export const currency = "₦"

export const setNumberFormat = (value: string, fn:Function) => {
    //wipe out any special character
    value = value.replace(/[^0-9]/g, '');
    if (value.length > 0) {
        value = numberFormat(value)
    }
    fn(value)
}

export const removeNumberFormat = (value: any):any => {
    if (value) {
        return numbro(value).value();
    }
}

export const validateMobileNumber = (phoneNumber: string): boolean =>  {
    const phoneRegex = /^(080|081|070|071|090|091)\d{8}$/;
    return phoneRegex.test(phoneNumber);
}
