console.log(`Learning Call Back Functions`);

debugger
// callback
// passing function as an argument to other function is called callback
function getSalary(cb) {
    setTimeout(() => {
        cb(20000);
    }, 2000)
}
// subtract tax
function subtractTax(sal, cb) {
    setTimeout(() => {
        cb(sal - (sal * .25))
        console.log(cb(sal - (sal * .25)), ' subtract tax function')
    }, 1000)
}
// subtract house rent
function subtractHouseRent(sal, cb) {
    setTimeout(() => {
        cb(sal - 1500)
    }, 1000)
}

// disposal salary
function getDisposalSalary(finalCb) {
    getSalary(function (salary_1) {
        console.log(`got salary which is: ${salary_1}`);
        subtractTax(salary_1, function (salray_2) {
            console.log(`subtract tax and got salary: ${salray_2}`);
            subtractHouseRent(salray_2, function (salar_3) {
                console.log(`subtract house rent and got salary: ${salar_3}`);
                finalCb(salar_3)
            })
        })
    })
}

getDisposalSalary(function (calculatedAmount) {
    console.log(calculatedAmount, ' total calculated amount ');
})