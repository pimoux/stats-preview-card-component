const MAXIMUM_COMPANY_VALUE = 10;
const MAXIMUM_TEMPLATE_VALUE = 314;
const MAXIMUM_QUERIES_VALUE = 12;

let companyValue = 0;
let templateValue = 0;
let millionQueriesValue = 0;

const valuesElt = document.querySelectorAll(".stat-value");

const speedIncrementCompany = () => {
    const incrementCompanyInterval = setInterval(() => {
        if (companyValue < MAXIMUM_COMPANY_VALUE) {
            companyValue++;
            valuesElt[0].textContent = `${companyValue}k+`;
        } else {
            clearInterval(incrementCompanyInterval);
        }
    }, 800 / MAXIMUM_COMPANY_VALUE);
}

const speedIncrementTemplates = () => {
    const incrementTemplateInterval = setInterval(() => {
        if (templateValue < MAXIMUM_TEMPLATE_VALUE) {
            templateValue++;
            valuesElt[1].textContent = templateValue;
        } else {
            clearInterval(incrementTemplateInterval);
        }
    }, 800 / MAXIMUM_TEMPLATE_VALUE);
}

const speedIncrementQueries = () => {
    const incrementQueriesInterval = setInterval(() => {
        if (millionQueriesValue < MAXIMUM_QUERIES_VALUE) {
            millionQueriesValue++;
            valuesElt[2].textContent = `${millionQueriesValue}M+`;
        } else {
            clearInterval(incrementQueriesInterval);
        }
    }, 800 / MAXIMUM_QUERIES_VALUE);
}

setTimeout(() => {
    speedIncrementCompany();
}, 500);

setTimeout(() => {
    speedIncrementTemplates();
}, 1000);

setTimeout(() => {
    speedIncrementQueries();
}, 1500);