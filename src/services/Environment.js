


const EnvironmentDev = {
    production: false,
    apiUrl: 'http://127.0.0.1:8000/api',
};

const EnvironmentStaging = {
    production: false,
    apiUrl: 'https://atila-7.herokuapp.com/api',
};

const EnvironmentProd = {
    production: false,
    apiUrl: 'https://atila-7.herokuapp.com/api',
};

let Environment = {};

if (window.location.host.includes('localhost')) {
    Environment = EnvironmentDev;
} else if (window.location.host.includes('staging')) {
    Environment = EnvironmentStaging;
}
else if(window.location.host.includes('atila.ca')){
    Environment =  EnvironmentProd;
}

export default Environment;