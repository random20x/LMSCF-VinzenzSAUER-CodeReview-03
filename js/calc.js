let insurance = '';

// here we take care that every element in the html file is assigned to a new JS variable.

function calculateInsurance() {
    let name = document.getElementById('name').value;
    let age = parseInt(document.getElementById('age').value);
    let countries = document.getElementById('countries').value;
    let horse_power = document.getElementById('ps').value;
    let result = document.getElementById('printed-result');


    // that's the calculation section, where we figure out how much every unique customer has to pay in order to get his or her unique price function.

    if (countries == 'austria') {
        insurance = horse_power * 100 / age + 50;
    } else if (countries == 'hungary') {
        insurance = horse_power * 120 / age + 100;
    } else if (countries == 'greece') {
        insurance = (horse_power * 150 / (age + 3)) + 50;
    }
    result.innerHTML = `Hello ${name}, your insurance costs ${insurance.toFixed(2)}€`;
}

document.getElementById('calculate-btn').addEventListener("click", calculateInsurance);