let inputs  = [].slice.call(document.querySelectorAll('input'))


inputs.forEach(function (input) {
    if (input.getAttribute('type')!== 'submit' && input.getAttribute('type') !== 'hidden'){
        console.log(input);
        if (input.value != '') {
            let label = document.querySelector('label[for="' + input.id + '"]')
            label.classList.add('focused')
        }
        input.addEventListener('focusin', focusinInputHandler, false)
        input.addEventListener('focusout', focusoutInputHandler, false)
    }
});


function focusinInputHandler() {
    let label = document.querySelector('label[for="' + this.id + '"]')
    label.classList.add("focused")
    // console.log(label)
    // console.log(this.id + ' focus in')
}

function focusoutInputHandler() {
    let label = document.querySelector('label[for="' + this.id + '"]')
    if(this.value == '') {
        label.classList.remove('focused')
    }
    // console.log(label)
    // console.log(this.id + ' focus out')
}
