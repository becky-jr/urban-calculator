
// todo Calculator

const result = document.querySelector('.speed-ind');

let employer, hour, crm;

function calcTotal() {
    if (!employer) {
        result.textContent = '____';
        return;
    }

    if (employer === 'true') {
        result.textContent = '30 mb/s';
        console.log(true);
    }

}


function getStaticInfo(parentSelector) {
    const elements = document.querySelectorAll(`${parentSelector} input`);
    console.log(elements);


    document.querySelector(parentSelector).addEventListener('click', (e) => {
        if (e.target.getAttribute('aria-checked') == 'true') {
            employer = 'true';
            console.log(123)
            console.log(employer)
        }
    })
}
getStaticInfo('.radios');


function ariaToggle(parentSelector) {

    const elements = document.querySelectorAll(`${parentSelector} input`);

    // console.log(elements)

    elements.forEach(elem => {
        // console.log(elem)
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('aria-checked') == 'false') {
                e.target.setAttribute('aria-checked', 'true')
            }
        })
    })

}
ariaToggle('.radios')




calcTotal();
