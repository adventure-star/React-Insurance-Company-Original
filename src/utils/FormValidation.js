import Theme from '../Styles/Theme.js'
import { zipCodeExists } from './data.js'

export const validName = (name, ref, refError) => {
    if (name !== null && name !== '' && name.length > 2) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validEmail = (email, ref, refError) => {
    const emailPatron = /(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    let validEmail = emailPatron.test(email);
    if (validEmail) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validPhone = (phone, ref, refError) => {
    const phonePatron = /^[0-9]{10,11}$/;
    console.log('phone', phone)
    phone = phone.replace("+", "");
    let validPhone = phonePatron.test(phone);
    if (validPhone) {
        ref.children[1].style.borderBottom = `1px solid ${Theme.grey}`
        ref.children[1].style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.children[1].style.border = 'none'
        ref.children[1].style.borderBottom = `${Theme.warningBorder}`
        ref.children[1].style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validAddressNumber = (addressNumber, ref, refError) => {
    if (addressNumber.length > 0) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}
export const validDni = (dni, ref, refError) => {
    const dniPatron = /^[0-9]{7,8}$/;
    let validDni = dniPatron.test(dni);
    if (validDni) {
        ref.children[1].className = 'text-field'
        refError.style.color = 'transparent'
        return true
    } else {
        ref.children[1].className = 'invalid-input'
        refError.style.color = `${Theme.warning}`
        return false
    }
}
export const validCuit = (cuit, ref, refError) => {
    if (cuit.length > 10) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validAge = (age, ref, refError) => {
    if (age > 17 && age < 100) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validFile = (file, ref, refError) => {
    const fileType = /^application\/pdf$|^image\/jpeg$|^image\/jpg$|^image\/png$/
    let validFile = file !== null ? fileType.test(file.type) : false
    if (validFile) {
        if (ref.current) {
            ref.style.borderBottom = `1px solid ${Theme.grey}`
            ref.style.color = `${Theme.blackFont}`
        }
        refError.style.color = 'transparent'
        return true
    } else {
        if (ref.current) {
            ref.style.border = 'none'
            ref.style.borderBottom = `${Theme.warningBorder}`
            ref.style.color = `${Theme.warning}`
        }
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validOption = (option, ref, refError) => {
    if (option !== '' && option !== null && option !== undefined) {
        if (ref.current) {
            ref.style.borderBottom = `1px solid ${Theme.grey}`
            ref.style.color = `${Theme.blackFont}`
        }
        refError.style.color = 'transparent'
        return true
    } else {
        if (ref.current) {
            ref.style.border = 'none'
            ref.style.borderBottom = `${Theme.warningBorder}`
            ref.style.color = `${Theme.warning}`
        }
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validOption2 = (option, refError) => {
    if (option !== '' && option !== null && option !== undefined) {
        refError.style.color = 'transparent'
        return true
    } else {
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validFranchise = (option, refError) => {
    if (option !== '' && option !== null && option !== undefined && !isNaN(option) ) {
        refError.style.color = 'transparent'
        return true
    } else {
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validZipcode = (zipcode, ref, refError) => {
    // console.log("validando zipCode", zipcode)
    if (zipcode !== undefined && zipcode !== null && zipcode !== '' && zipcode.length > 3 && zipcode.length < 5) {
        return zipCodeExists(zipcode)
            .then(res => {
                if (res) {
                    // console.log("zipCode valido", zipcode)
                    ref.style.borderBottom = `1px solid ${Theme.grey}`
                    ref.style.color = `${Theme.blackFont}`
                    refError.style.color = 'transparent'
                    return true
                } else {
                    console.log("zipCode invalido", zipcode)
                    ref.style.border = 'none'
                    ref.style.borderBottom = `${Theme.warningBorder}`
                    ref.style.color = `${Theme.warning}`
                    refError.style.color = `${Theme.warning}`
                    return false
                }
            })
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validType = (type, refCar, refMoto, refError) => {
    // const typePatron = /^auto$|^moto$/
    // let validType = type !== null ? typePatron.test(type) : false
    if (type !== null) {
        refCar.style.border = `1px solid ${Theme.grey}`
        refMoto.style.border = `1px solid ${Theme.grey}`
        refError.style.color = 'transparent'
        return true
    } else {
        refCar.style.border = `1px solid ${Theme.warning}`
        refMoto.style.border = `1px solid ${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validDomain = (domain, ref, refError) => {
    if (domain !== null && domain !== '' && domain.length > 5 && domain.length < 10) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validChassis = (chassis, ref, refError) => {
    if (chassis !== null && chassis !== '') {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validEngine = (engine, ref, refError) => {
    if (engine !== null && engine !== '') {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validStartDate = (startDate, minDate, ref, refError) => {
    // const hiringDate = new Date (startDate)
    // const minHiringDate = new Date(minDate)
    const minHiringDate = new Date(new Date(minDate).getFullYear(minDate), new Date(minDate).getMonth(), new Date(minDate).getDate())
    const hiringDate = new Date(new Date(startDate).getFullYear(startDate), new Date(startDate).getMonth(), new Date(startDate).getDate())
    if (hiringDate >= minHiringDate) {
        console.log(hiringDate, "es mayor o igual a ", minHiringDate)
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;
    } else {
        console.log("fecha inválida ", hiringDate, minHiringDate)
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}

export const validCard = (card, ref, refError) => {
    const cardPatron = /^[0-9]{15,16}$/;
    let validCard = cardPatron.test(card);
    if (validCard) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validExpirationDate = (date, ref, refError) => {
    const datePatron = /[0-9]{2}[\/][0-9]{2}/;
    let validDate = datePatron.test(date);
    let month = date !== undefined && parseInt(date.slice(0, 2), 10)
    let today = new Date()
    let currentMonth = today.getMonth() + 1
    let currentYear = today.getFullYear()
    let currentYearPro = today.getUTCFullYear()
    let year = date !== undefined && date.slice(3, 5)
    if (validDate && month > 0 && month < 13 && month > currentMonth && year === "20") {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else if (validDate && month > 0 && month < 13 && year > 20) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validCbu = (cbu, ref, refError) => {
    const cbuPatron = /^[0-9]{22}$/;
    let validCbu = cbuPatron.test(cbu);
    if (validCbu) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false
    }
}

export const validFromDatePolicy = (validStart, ref, refError) => {
    const datePatron = /[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}/;
    let validDate = datePatron.test(validStart);
    if (validDate) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}
export const validEndDatePolicy = (toDate, fromDate, ref, refError) => {
    const datePatron = /[0-9]{2}[\/][0-9]{2}[\/][0-9]{4}/;
    let validDate = datePatron.test(toDate);
    let fromDateConverted = new Date(fromDate)
    let endDateConverted = new Date(toDate)
    if (fromDateConverted < endDateConverted) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;

    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}
export const validSinisterDate = (date, ref, refError) => {
    const datePatron = /[0-9]{4}[\-][0-9]{2}[\-][0-9]{2}/;
    let validDate = datePatron.test(date);
    let sinisterDate = new Date(date)
    let today = new Date()
    if (validDate && sinisterDate < today) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;

    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}
export const validExpirationDatePolicy = (expirationDate, ref, refError) => {
    let today = new Date()
    let expiration = new Date(expirationDate)
    if (today < expiration) {
        ref.style.borderBottom = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;
    } else {
        ref.style.border = 'none'
        ref.style.borderBottom = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}

export const validTextArea = (message, ref, refError) => {
    if (message !== '') {
        ref.style.border = 'none'
        ref.style.border = `1px solid ${Theme.grey}`
        ref.style.color = `${Theme.blackFont}`
        refError.style.color = 'transparent'
        return true;
    } else {
        ref.style.border = 'none'
        ref.style.border = `${Theme.warningBorder}`
        ref.style.color = `${Theme.warning}`
        refError.style.color = `${Theme.warning}`
        return false;
    }
}

export const validModel = (model, code, ref, refError) => {
    if (model !== undefined && model !== null && model.length > 3 && code > 0) {
        if(ref) {
            ref.style.border = 'none'
            ref.style.borderBottom = `1px solid ${Theme.grey}`
            ref.style.color = `${Theme.blackFont}`
        }
        refError.style.color = 'transparent'
        return true;
    } else {
        if(ref) {
            ref.style.border = 'none'
            ref.style.borderBottom = `${Theme.warningBorder}`
            ref.style.color = `${Theme.warning}`
        }
        refError.style.color = `${Theme.warning}`
        return false;
    }
}