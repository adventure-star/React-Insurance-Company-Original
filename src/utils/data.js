import { baseUrl, customerUrl } from "../config"

export const showMessage = (msg) => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        console.log(msg);
    }
}
showMessage(baseUrl);

// DISABLE ALMOST EVERY WARNING !!!

console.warn = console.error = () => { };


export const Reviews = [
    {
        name: 'Laura López 1',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura López 2',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 0,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 3',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 4',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 3,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 5',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 6',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 1,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 7',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 8',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 2,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 9',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 10',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 4,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 11',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 12',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 5,
        img: '/assets/body/review-avatar.png'
    }, {
        name: 'Laura Lopez 13',
        text: '"Adipisicing officia deserunt ullamco adipisicing ea. Nulla dolor sit nulla officia quis incididunt qui et aliquip sit do."',
        stars: 4,
        img: '/assets/body/review-avatar.png'
    }
]


export const InsuranceBrands = [
    { name: "Allianz", img: '/assets/imgBrands/alianza.svg' },
    { name: "Chubb", img: '/assets/imgBrands/chubb.svg' },
    { name: "Federación Patronal", img: '/assets/imgBrands/federacion.svg' },
    { name: "Zurich", img: '/assets/imgBrands/zurich.svg' },
    { name: "Libra", img: '/assets/imgBrands/libra.svg' },
    { name: "Galeno", img: '/assets/imgBrands/galeno.svg' },
    { name: "Integrity", img: '/assets/imgBrands/integrity.svg' },
    { name: "Mapfre", img: '/assets/imgBrands/mapfre.svg' },
    { name: "HDI Seguros", img: '/assets/imgBrands/hdi.svg' },
    { name: "Sancor Seguros", img: '/assets/imgBrands/sancor.svg' },
    { name: "Sura", img: '/assets/imgBrands/sura.svg' },
    { name: "SMG Seguros", img: '/assets/imgBrands/smg.svg' },
    { name: "Berkley", img: '/assets/imgBrands/berkley.svg' },
    { name: "Experta", img: '/assets/imgBrands/experta.svg' },
]

export const Provinces = [
    { name: "Capital Federal" },
    { name: "Gran Buenos Aires" },
    { name: "Buenos Aires" },
    { name: "Catamarca" },
    { name: "Chaco" },
    { name: "Chubut" },
    { name: "Córdoba" },
    { name: "Corrientes" },
    { name: "Entre Rí­os" },
    { name: "Formosa" },
    { name: "Jujuy" },
    { name: "La Rioja" },
    { name: "Mendoza" },
    { name: "Misiones" },
    { name: "Neuquén" },
    { name: "Río Negro" },
    { name: "Salta" },
    { name: "San Juan" },
    { name: "San Luis" },
    { name: "Santa Cruz" },
    { name: "Santa Fe" },
    { name: "Tierra del Fuego" },
    { name: "Tucumán" },
]

export const Press = [
    {
        title: 'Charlas de servilleta: pusieron US$2000 para crear un algoritmo con el que facturan $1 millón por mes',
        img: '/assets/press/lanacion.jpg',
        alt: 'Nota en La Nacion',
        isImg: true,
        align: 'top',
        date: '28/12/2020',
        text: 'Ariel Lipschutz y Martín Kaler, socios de Poolpo, una plataforma que analiza a través de un algoritmo las mejores alternativas para contratar un seguro Crédito: Gentileza Poolpo        ',
        link: 'https://www.lanacion.com.ar/economia/negocios/charlas-servilleta-pusieron-us2000-crear-algoritmo-facturan-nid2527930'
    }, {
        title: 'Poolpo, una de las startups más innovadoras en venta de seguros digitales para autos de Latam',
        img: '/assets/press/businesstrend.jpg',
        alt: 'Nota en Business Trend',
        isImg: true,
        align: 'top',
        date: '30/12/2020',
        text: 'En 2019 y de la mano de dos emprendedores argentinos nació Poolpo, la única startup regional de la industria insurtech que usa IA para conseguir el mejor precio para el seguro de tu auto. En 2020, y en contexto de pandemia, renueva su marca y lanzan la nueva web.        ',
        link: 'http://www.businesstrend.com.ar/poolpo-una-de-las-startups-mas-innovadoras-en-venta-de-seguros-digitales-para-autos-de-latam/'
    }, {
        title: 'Quieren que elijas el mejor seguro al menor precio y usan inteligencia artificial para lograrlo',
        img: '/assets/press/iproup2.jpg',
        alt: 'Nota en iProUP',
        isImg: true,
        align: 'top',
        date: '10/12/2020',
        text: 'Gracias a SamurAI, su propia inteligencia artificial, la compañía le ofrece a sus potenciales clientes el mejor servicio, siempre cuidando el bolsillo',
        link: 'https://www.iproup.com/startups/18979-seguros-e-inteligencia-artificial-la-historia-de-poolpo'
    }, {
        title: 'Cómo funciona la plataforma con inteligencia artificial para encontrar el seguro de auto más barato',
        img: '/assets/press/infobae.jpg',
        alt: 'Nota en Infobae',
        isImg: true,
        align: 'top',
        date: '21/09/2019',
        text: 'Con machine learning y big data, analiza la póliza actual y ofrece las mejores ofertas como alternativa. Notifica al usuario de renovaciones para evaluar precios más convenientes. La crearon dos emprendedores de 31 años',
        link: 'https://www.infobae.com/tecno/2019/09/21/como-funciona-la-plataforma-con-inteligencia-artificial-para-encontrar-el-seguro-de-auto-mas-barato/'
    }, {
        title: 'El gran "caza ofertas": esta plataforma argentina utiliza inteligencia artificial para buscar los seguros más baratos',
        img: '/assets/press/iproup.jpg',
        alt: 'Nota en iProUP',
        isImg: true,
        align: 'center',
        date: '10/08/2019',
        text: 'PoolPo es un sistema de inteligencia artificial que busca el mejor precio para el asegurado, manteniendo las condiciones que ya tiene',
        link: 'https://www.iproup.com/startups/6566-startup-proyectos-innovadores-empresas-innovadoras-Consegui-el-mejor-precio-de-tu-seguro-con-inteligencia-artificial'
    }, {
        title: 'Premio proyecto innovador Makers in BA',
        img: '/assets/press/makers-ba.jpg',
        alt: 'Premio Makers in BA',
        isImg: true,
        align: 'top',
        date: '02/07/2019',
        text: 'De un total de casi 500 emprendimientos quedaron preseleccionados 120 proyectos que compitieron en la final de Makers in BA, el concurso destinado a emprendedores con proyectos avanzados de base tecnológica de todo el país, realizado por el Distrito Tecnológico de la Ciudad de Buenos Aires.',
        link: 'https://www.iproup.com/startups/5756-startup-empresas-emergentes-emprendimiento-Se-conocieron-los-ganadores-de-Makers-in-BA'
    }, {
        title: 'Innovación y tecnología en el ámbito de los seguros',
        img: '/assets/press/radio-jai.jpg',
        alt: 'Nota en Radio Jai',
        isImg: true,
        align: 'center',
        date: '04/11/2019',
        text: 'Ariel Lipschutz, CEO de Poolpo, una plataforma de seguros digitales que utiliza la inteligencia artificial para la búsqueda de seguros de auto, comentó en Radio Jai acerca de su servicio y como han hecho evolucionar el mundo de las aseguradoras.',
        link: 'https://www.radiojai.com/index.php/2019/11/04/28794/el-objetivo-es-que-el-poder-de-decision-lo-tenga-la-persona-y-no-la-aseguradora/',
    }, {
        title: 'Pagá menos por el seguro de tu auto con PoolPo',
        img: '/assets/press/emprelatam.jpeg',
        alt: 'Nota en Emprelatam',
        isImg: true,
        align: 'bottom',
        date: '02/08/2019',
        text: 'Encontraron una oportunidad para brindar un seguro a medida de cada cliente, con las mejores compañías.',
        link: 'https://emprelatam.com/2019/08/02/paga-menos-por-el-seguro-de-tu-auto-con-poolpo/'
    }, {
        title: 'Todo por la Tarde - Ariel Lipschutz - PoolPo (17-10-19)',
        img: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/698452024&color=%23a8dace&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        alt: 'Entrevista en Todo por la Tarde',
        isImg: false,
        align: 'center',
        date: '17/10/2019',
        text: 'Entrevista realizada a Ariel Lipschutz CEO de PoolPo',
        link: 'https://soundcloud.com/mediosandinosmza/todo-por-la-tarde-ariel-lipschutz-poolpo-17-10-19'
    }
]

// BRAND MODEL AND YEAR REQUESTS
export function getBrands() {
    let url = `${baseUrl}/InfoAuto/Brands`
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.log(e);
        });
}

export function getBrandOptions() {
    let url = `${baseUrl}/InfoAuto/Brands`
    return fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            return data
        })
        .catch(e => {
            console.log(e);
        });
}

export function getBrandByName(brand) {
    const url = `${baseUrl}/InfoAuto/BrandByName?name=${brand}`;

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch(err => console.log(err))
}
export function getModelsByBrand(brand) {
    const url = `${baseUrl}/Vehicles/GetModelsByBrand/${brand}`;

    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch(err => console.log(err))
}

export const getYearsByBrandID = (brandID) => new Promise((resolve, reject) => {
    let options = []
    const url = `${baseUrl}/InfoAuto/YearsByBrandId?brand_id=${brandID}`
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    // console.log(url);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            options = JSON.parse(req.responseText)
            resolve(options)
        } else if (this.status !== 200) {
            reject("se ha rechazado", options)
        }
    }
})
export const getGroupsByBrandYear = (brandID, year) => new Promise((resolve, reject) => {
    let options = []
    const url = `${baseUrl}/InfoAuto/GroupsByBrandYear?brand_id=${brandID}&year=${year}`
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    // console.log(url);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            options = JSON.parse(req.responseText)
            resolve(options)
        } else if (this.status !== 200) {
            reject("se ha rechazado", options)
        }
    }
})
export const getModelsByBrandYear = (brandID, year, groupID) => new Promise((resolve, reject) => {
    let options = []
    const url = `${baseUrl}/InfoAuto/ModelsByBrandGroupYear?brand_id=${brandID}&group_id=${groupID}&year=${year}`
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.send();
    // console.log(url);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            options = JSON.parse(req.responseText)
            resolve(options)
        } else if (this.status !== 200) {
            reject("se ha rechazado", options)
        }
    }
})


export const getYearsByModel = (brand, model) => new Promise((resolve, reject) => {
    let options = []
    const url = `${baseUrl}/Vehicles/GetYearsByModel`
    const body = new FormData()
    body.append("brand", brand)
    body.append("model", model)

    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            options = JSON.parse(req.responseText)
            resolve(options)
        } else if (this.status !== 200) {
            reject("se ha rechazado", options)
        }
    }
})

export const getPolicyOptions = [
    { name: "Responsabilidad Civil" },
    { name: "Robo y Daño Total" },
    { name: "Terceros Básica" },
    { name: "Terceros Completos" },
    { name: "Todo Riesgo con franquicia" },
]

export function getPoliciesCoverages() {
    const url = `${baseUrl}/PoliciesCoverages`
    return fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

// REGISTRO DE LEAD Y RECEPCIÓN DE LEADID VEHICLEID Y GROUPID
export function registerLeadPolicy(name, email, phone, age, file) {
    function setUserData(leadID, VehicleID, GroupID, name) {
        localStorage.setItem('LeadID', leadID);
        localStorage.setItem('VehicleID', VehicleID);
        localStorage.setItem('GroupID', GroupID);
        localStorage.setItem('Name', name);
    };
    function setHash() {
        let randomString = Date.now().toString(36) + Math.random().toString(36).substring(2);
        let newHash = randomString.slice(0, 16)
        return newHash
    }
    let url = `${baseUrl}/Leads/SignUp`
    var hash = setHash()
    // console.log("hash generado en front", hash)
    // window.localStorage.clear()
    localStorage.setItem('LeadID', hash)
    const body = new FormData()
    body.append("Hash", hash)
    body.append("Name", name)
    body.append("Email", email)
    body.append("Phone", phone)
    body.append("Age", age)
    body.append("PolicyFile", file)

    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.send(body);
    req.onreadystatechange = function () {
        // console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            let response = JSON.parse(result.msg)
            let leadID = response.leadID
            let VehicleID = response.VehicleID
            let GroupID = response.GroupID
            console.log("leadID", leadID)
            setUserData(leadID, VehicleID, GroupID, name)
            // window.location.href = "/cotizacion"
        }
    };
}

export const LeadID = 123

export function registerLead(name, email, phone, dni, age, address, zipCode, brand, model, year, policy, isNew, franchise, type, modelId) {
    const url = `${baseUrl}/Leads/SignUp`
    console.log("url", url, "zipCode", zipCode)
    function setUserData(leadID, VehicleID, GroupID, name) {
        localStorage.setItem('LeadID', leadID);
        localStorage.setItem('VehicleID', VehicleID);
        localStorage.setItem('GroupID', GroupID);
        localStorage.setItem('Name', name);
    };

    function setHash() {
        let randomString = Date.now().toString(36) + Math.random().toString(36).substring(2);
        let newHash = randomString.slice(0, 16)
        return newHash
    }
    const body = new FormData()
    var hash = setHash()
    // console.log("hash generado en front", hash)
    // window.localStorage.clear()
    localStorage.setItem('LeadID', hash)
    let coverageId = Number(policy)
    body.append("Brand", brand)
    body.append("Model", model)
    body.append("hash", hash)
    body.append("Name", name)
    body.append("CP", zipCode)
    body.append("Phone", phone.replace("+", ""))
    body.append("Address", address)
    body.append("isNew", isNew === null ? 'false' : isNew)
    body.append("Email", email)
    body.append("Year", year)
    body.append("Franchise", franchise === null ? '0' : franchise)
    body.append("Age", age)
    body.append("DNI", dni)
    body.append("isCar", type === null ? true : true)
    body.append('ModelId', modelId)
    if (coverageId !== 0) {
        body.append("PolicyCoverage", coverageId)
    }
    // console.log("es nuevo en lead sign up", isNew)

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            let response = JSON.parse(result.msg)
            let leadID = response.leadID
            let VehicleID = response.VehicleID
            let GroupID = response.GroupID
            // console.log("leadID", leadID)
            setUserData(leadID, VehicleID, GroupID, name)
            // window.location.href = "/cotizacion"
        } else if(this.readyState === 4 && this.status !== 200) {
            let error = JSON.parse(req.responseText)
            console.log("error en registerLead", error)
        } else if(this.readyState === 4 && this.status === 401) {
            localStorage.removeItem('token')
            window.location.href = "/Login"
        }
    };
}

export function getUserData() {
    let leadID = localStorage.getItem('LeadID');
    return leadID;
};

// PETICIÓN DE COTIZACIONES


export function getQuotations(VehicleID, GroupID) {
    const url = `${baseUrl}/Quotes/ByGroup/${VehicleID}/${GroupID}`
    // console.log(url)
    return fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            if (data.error) {
                window.location.href = "/ErrorCotizaciones"
                localStorage.setItem('ErrorMessage', data.msg)
                console.log("error", data.msg)
            } else {
                console.log("cotizaciones en getQuotations", data)
                return data
            }
        })
        .catch(err => console.log(err))
};

export function getLeadData(hash) {
    const url = `${baseUrl}/Leads/${hash}`
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("data en getLeadData", data)
            return data
        })
        .catch(err => console.log(err))
}


// Validate Fields for /cargarDatos screen 

export function validateFields(leadID, vehicleID) {
    const url = `${baseUrl}/Leads/ValidateFields2?LeadId=${leadID}&VehicleId=${vehicleID}`
    return fetch(url, { method: 'POST' })
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

export const completeFields = (leadID, vehicleID, dni, zipCode, brand, model, year, engine, chassis, insurer, from, to, price, modelId) => new Promise((resolve, reject) => {
    const url = `${baseUrl}/Leads/CompleteFields`
    const body = new FormData()
    body.append("LeadId", leadID)
    body.append("VehicleId", vehicleID)
    body.append("DNI", dni)
    body.append("CP", zipCode)
    body.append("Brand", brand)
    body.append("Model", model)
    body.append("Year", year)
    body.append("Engine", engine === null ? '' : engine)
    body.append("Chassis", chassis === null ? '' : chassis)
    body.append("Insurer", insurer === null ? '' : insurer)
    body.append("From", from === null ? '' : from)
    body.append("To", to === null ? '' : to)
    body.append("Price", price === null ? 0 : price)
    body.append("ModelId", modelId)

    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(req.responseText)
            resolve(response)
        } else if (this.status !== 200) {
            let response = JSON.parse(req.responseText)
            reject("se ha rechazado", response)
        }
    }

})

// Get Vehicle Data

export function getRegisteredVehicle(hash) {
    const url = `${baseUrl}/Vehicles/${hash}`
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => console.log(err))
}

// Customer/SignUp
export const customerSignUp = (hash, quoteId, person, name, last, email, phone, dni, birthDate, address, addressNumber, addressFloor, addressDepartment, city, zipCode, hiringDate) => new Promise((resolve, reject) => {
    const url = `${baseUrl}/Customers/SignUp`
    let personType = person === 'fisica' ? 'true' : 'false'
    const body = new FormData()
    body.append("Hash", hash)
    body.append("QuoteId", quoteId)
    body.append("personType", personType)
    body.append("Name", name)
    body.append("Last", last)
    body.append("Email", email)
    body.append("Phone", phone)
    body.append("DNI", dni)
    body.append("BirthDate", birthDate)
    body.append("Address", address)
    body.append("AddressNumber", addressNumber)
    body.append("AddressFloor", addressFloor)
    body.append("AddressDepartment", addressDepartment)
    body.append("City", city)
    body.append("Postalcode", zipCode)
    body.append("HiringDate", hiringDate)
    localStorage.removeItem('CustomerID');
    console.log("datos enviados a customerSignUp", hash, quoteId, personType, name, last, email, phone, dni, birthDate, address, addressNumber, addressFloor, addressDepartment, city, zipCode, hiringDate)
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                // localStorage.setItem('CustomerID', result.msg)
                // localStorage.setItem('QuoteID', quoteId)
                resolve({ error: false, customerId: result.msg })
                console.log("resolve", result.error)
            } else {
                let errors = JSON.parse(req.responseText)
                // let prueba = {
                //                 "HiringDate": ["primer error hiring", "segundo error"], 
                //                 "PostalCode": ["primer error postal", "segundo error"]
                //             }
                // resolve(prueba)
                console.log(errors, "error en customer")
            }
        } else if (this.readyState === 4 && this.status === 400) {
            let errors = JSON.parse(req.responseText)
            // let prueba = {
            //                 "HiringDate": ["primer error hiring", "segundo error"], 
            //                 "PostalCode": ["primer error postal", "segundo error"]
            //             }
            // resolve(prueba)
            resolve(errors)
        }
    };
})


// Vehicles//Update
export const sendVehicleData = (hash, brand, model, domain, year, isNew, chassis, engine, isCar) => new Promise((resolve, reject) => {
    const urlVehicle = `${baseUrl}/Vehicles/Update`
    const body = new FormData()
    body.append("Hash", hash)
    body.append("Brand", brand)
    body.append("Model", model)
    body.append("Domain", domain)
    body.append("Year", year)
    body.append("isNew", isNew === null ? 'false' : isNew)
    body.append("Chassis", chassis === "" || chassis === null ? "" : chassis)
    body.append("Engine", engine === "" || engine === null ? "" : engine)
    body.append("isCar", true)
    console.log("datos update vehicle", hash, brand, model, domain, year, isNew, chassis, engine, isCar)
    console.log("engine vacio", engine, "enviado a ", urlVehicle)

    let req = new XMLHttpRequest();
    req.open("POST", urlVehicle, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            console.log(result)
            if (result.error === false) {
                resolve({ error: false })
                console.log("resolve", result.error)
            } else {
                let errors = JSON.parse(req.responseText)
                console.log(errors, "error en customer")
            }
        } else if (this.readyState === 4 && this.status === 400) {
            let errors = JSON.parse(req.responseText)
            resolve(errors)
        }
    };
})


// Vehicles/uploadPictures

export const sendVehicleFile = (file, name, VehicleID) => new Promise((resolve, reject) => {
    console.log("Enviando fotos")
    const url = `${baseUrl}/Vehicles/uploadPictures`
    const body = new FormData()
    body.append("Hash", VehicleID)
    body.append("Image", file)
    body.append("Name", name)
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            console.log(result)
            if (result.error === false) {
                resolve({ error: false })
                console.log("resolve", result.error)
            } else {
                let errors = JSON.parse(req.responseText)
                console.log(errors, "error en fotos de vehiculo")
            }
        } else if (this.readyState === 4 && this.status === 400) {
            let errors = JSON.parse(req.responseText)
            resolve(errors)
        }
    };
})

// Allowed Payment Method

export function allowedPaymentMethod(customerId, quoteId) {
    const url = `${baseUrl}/Customers/AllowedPaymentMethod?CustomerId=${customerId}&quoteId=${quoteId}`
    return fetch(url, { method: 'POST' })
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            return data
        })
        .catch(err => err)
}

// send CBU
//export const sendVehicleFile = (file, name, VehicleID) => new Promise ((resolve, reject) =>{
export const sendCbu = (cbu, customerId, quoteId) => new Promise((resolve, reject) => {
    const url = `${baseUrl}/Customers/PaymentMethodCBU`
    let cbuString = cbu.toString()
    const body = new FormData()
    body.append("Hash", customerId)
    body.append("CBU", cbuString)
    body.append("QuoteId", quoteId)

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/felicitaciones"
            } else {
                resolve({ error: true })
            }
        }
    };
})

// send Credit Card

export const sendCreditCard = (number, cardBrand, name, bank, expirationDate, customerId, quoteId) => new Promise((resolve, reject) => {
    function getCardBrand(number) {
        let prefix = number.slice(0, 2)
        let visa = 'visa'
        let amex = 'amex'
        let mastercard = 'mastercard'
        if (prefix > 39 && prefix < 50) {
            return visa
        } else if (prefix > 50 && prefix < 56) {
            return mastercard
        } else if (prefix === "34" || prefix === "37") {
            return amex
        }
    }
    const url = `${baseUrl}/Customers/PaymentMethodCard`
    let month = expirationDate.slice(0, 2)
    let year = expirationDate.slice(3, 5)
    let date = `20${year}-${month}-01`
    let brand = getCardBrand(number)
    const body = new FormData()
    body.append("Hash", customerId)
    body.append("Card", brand)
    body.append("Bank", bank)
    body.append("Name", name)
    body.append("Number", number)
    body.append("ExpiricyDate", date)
    body.append("QuoteId", quoteId)
    console.log("datos de tarjeta enviados", customerId, brand, bank, name, number, date, quoteId)

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/felicitaciones"
            } else {
                resolve({ error: true })
            }
        }
    };
})

// SEND CONTACT MESSAGE

export function sendContactMessage(name, email, message) {
    const url = `${baseUrl}/Contact/Contact`
    const body = new FormData()
    localStorage.removeItem('Message')
    body.append("Name", name)
    body.append("Email", email)
    body.append("Message", message)

    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            console.log(result)
            if (result.error === false) {
                localStorage.setItem('Message', true)
                window.location.href = "/MensajeEnviado"
            }
        }
    };
}

export const validModel = (brand, model) => new Promise((resolve, reject) => {
    return getModelsByBrand(brand)
        .then(res => {
            if (res !== null) {
                let result = res.map(item => {
                    const modelPatron = new RegExp(`(${model}).+`, 'gi')
                    let validPatron = modelPatron.test(item);
                    if (validPatron) {
                        resolve(item)
                    }
                })
            } else {
                reject(res)
            }
        })
})

export function getQuote(quote) {
    const url = `${baseUrl}/Quotes?id=${quote}`;
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch(err => console.log(err))
}


// NEWLETTER QUOTATION

export function getQuotesByVehicle(vehicleId, leadId) {
    const url = `${baseUrl}/Quotes/ByVehicle/${vehicleId}/${leadId}`
    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            let result = {
                name: data.lead.name,
                quotationOptions: data.quotes
            }
            return result
        })
        .catch(err => console.log(err))
}

export const getDataToSignUp = (leadId, vehicleId, quoteId) => {
    const url = `${baseUrl}/Leads/GetDataToSignUp?LeadId=${leadId}&VehicleId=${vehicleId}&QuoteId=${quoteId}`
    return fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            console.log(res)
        })
        .then(data => data)
        .catch(err => err)
}

export const zipCodeExists = (number) => {
    const url = `${baseUrl}/Leads/PostalCodeExist?number=${number}`
    console.log("haciendo request para validar zipCode")
    return fetch(url, { method: 'POST' })
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.log(err))
}

export const scrollUp = () => {
    window.scrollTo(0, 0)
    console.log("scroll to top!!!")
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const customerLogin = (email, dni, returnUrl = "") => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Account/Login`

    const body = new FormData()
    body.append("Email", email)
    body.append("Password", dni)
    body.append("ReturnUrl", returnUrl)

    localStorage.removeItem('CustomerID');
    console.log("Try to login with: ", email, dni)
    let req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            console.log(result)
            resolve({error: false, token: result.token, returnUrl: returnUrl})
        } else if (this.readyState === 4 && this.status === 401) {
            resolve({error: true, msg:"Unauthenticated User"})
        }
    };
})

export const getPolicy = () => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Account/Policy`
    var req = new XMLHttpRequest();
    let jwt=localStorage.getItem('token')
    
    req.withCredentials = true;
    req.open("GET", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt)
    req.send();
    // console.log(url);
    req.onreadystatechange = function () {
        console.log(req);
        if (this.readyState === 4 && this.status === 200) {
            req = JSON.parse(req.responseText)
            resolve(req)
        } else if (this.status !== 200) {
            req = JSON.parse(req.responseText)
            console.log(req.errors)
        }
    }
})
export const getMercosur = () => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Account/Mercosur`
    var req = new XMLHttpRequest();
    let jwt=localStorage.getItem('token')
    
    req.withCredentials = true;
    req.open("GET", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt)
    req.send();
    // console.log(url);
    req.onreadystatechange = function () {
        console.log(req);
        if (this.readyState === 4 && this.status === 200) {
            req = JSON.parse(req.responseText)
            resolve(req)
        } else if (this.status !== 200) {
            req = JSON.parse(req.responseText)
            console.log(req.errors)
        }
    }
})

export const crystalReport = (date, address, image, place, invoice=null) => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Sinisters/Crystals`

    const body = new FormData()
    body.append("Date", date)
    body.append("Address", address)
    body.append("Image", image)
    body.append("Place", place)
    body.append("Invoice", invoice)

    let jwt=localStorage.getItem('token')
    let req = new XMLHttpRequest();
    req.withCredentials = true;
    req.open("POST", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt);
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/Clientes/Siniestros/siniestroCargado"
            } else {
                resolve({ error: true, msg:result.msg })
            }
        } else if (this.readyState === 4 && this.status === 401) {
            localStorage.removeItem('token')
            window.location.href = "/Login"
        } else if (this.readyState === 4 && this.status === 400) {
            resolve({ error: true, msg:"Bad Request. Unknown Error." })
        }
    };
})
export const lockReport = (date, address, image, invoice=null) => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Sinisters/Lock`

    const body = new FormData()
    body.append("Date", date)
    body.append("Address", address)
    body.append("Image", image)
    body.append("Invoice", invoice)

    let jwt=localStorage.getItem('token')
    let req = new XMLHttpRequest();
    req.withCredentials = true;
    req.open("POST", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt)
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/Clientes/Siniestros/siniestroCargado"
            } else {
                resolve({ error: true, msg:result.msg })
            }
        } else if (this.readyState === 4 && this.status === 401) {
            localStorage.removeItem('token')
            window.location.href = "/Login"
        } else if (this.readyState === 4 && this.status === 400) {
            resolve({ error: true, msg:"Bad Request. Unknown Error." })
        }
    };
})
export const wheelReport = (date, address, image, policeReport, invoice=null) => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Sinisters/Wheel`

    const body = new FormData()
    body.append("Date", date)
    body.append("Address", address)
    body.append("Image", image)
    body.append("PoliceReport", policeReport)
    body.append("Invoice", invoice)

    let jwt=localStorage.getItem('token')
    let req = new XMLHttpRequest();
    req.withCredentials = true;
    req.open("POST", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt)
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/Clientes/Siniestros/siniestroCargado"
            } else {
                resolve({ error: true, msg:result.msg })
            }
        } else if (this.readyState === 4 && this.status === 401) {
            localStorage.removeItem('token')
            window.location.href = "/Login"
        } else if (this.readyState === 4 && this.status === 400) {
            resolve({ error: true, msg:"Bad Request. Unknown Error." })
        }
    };
})
export const partialReport = (date, address, frontDni, backDni, domain, damagedPart, image, image2, image3, image4, description) => new Promise((resolve, reject) => {
    const url = `${customerUrl}/Sinisters/Partial`

    const body = new FormData()
    body.append("Date", date)
    body.append("Address", address)
    body.append("FrontDNI", frontDni)
    body.append("BackDNI", backDni)
    body.append("Domain", domain)
    body.append("Front", damagedPart['front']??"")
    body.append("Back", damagedPart['back']??"")
    body.append("Left", damagedPart['left']??"")
    body.append("Right", damagedPart['right']??"")
    body.append("Image1", image)
    body.append("Image2", image2)
    body.append("Image3", image3)
    body.append("Image4", image4)
    body.append("Image", image)
    body.append("Description", description)

    let jwt=localStorage.getItem('token')
    let req = new XMLHttpRequest();
    req.withCredentials = true;
    req.open("POST", url, true);
    req.setRequestHeader('Authorization', 'Bearer '+jwt)
    req.send(body);
    req.onreadystatechange = function () {
        console.log(req)
        if (this.readyState === 4 && this.status === 200) {
            let result = JSON.parse(req.responseText)
            if (result.error === false) {
                resolve({ error: false })
                localStorage.setItem('Transaction', 'true')
                window.location.href = "/Clientes/Siniestros/siniestroCargado"
            } else {
                resolve({ error: true, msg:result.msg })
            }
        } else if (this.readyState === 4 && this.status === 401) {
            localStorage.removeItem('token')
            window.location.href = "/Login"
        } else if (this.readyState === 4 && this.status === 400) {
            resolve({ error: true, msg:"Bad Request. Unknown Error." })
        }
    };
})