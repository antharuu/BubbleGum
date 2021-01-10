let menuSection = document.querySelectorAll('#sidenav a');

menuSection.forEach(v => {
    v.onclick = (() => {
        setTimeout(() => {
            menuSection.forEach(j => j.classList.remove('active'))
            v.classList.add('active')
        }, 300)
    })
})

window.onscroll = (() => {
    let mainSection = document.querySelectorAll('#container section');

    mainSection.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y
        if (rect < window.innerHeight - (window.innerHeight * .8)) {
            menuSection.forEach(v => v.classList.remove('active'))
            menuSection[i].classList.add('active')
        }
    })
})

let usages = document.querySelectorAll('.usage');
let inputcopy = document.querySelector('#copytext');

usages.forEach.call(document.querySelectorAll('a'), function (el) {
    el.addEventListener('click', function (e) {
        e.preventDefault()
        inputcopy.value = this.text;

        inputcopy.select();
        inputcopy.setSelectionRange(0, 99999);

        document.execCommand("copy");
    })
})