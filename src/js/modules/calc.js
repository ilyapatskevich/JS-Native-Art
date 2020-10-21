const calc = (size, material, option, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionBlock = document.querySelector(option),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    let total = 0;

    function calcFunc() {
        total = Math.round(+sizeBlock.value * (+materialBlock.value) + (+optionBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(total * 0.7);
        } else {
            resultBlock.textContent = total;
        }
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};

export default calc;