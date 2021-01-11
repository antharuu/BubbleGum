let links = document.querySelectorAll('.link-navbar')

function get_link_from(url) {
    let url_parts = url.split('/')
    let url_parts_anchor = url_parts[url_parts.length - 1].split('#')
    return url_parts_anchor[0]
}

function get_anchor_from(url) {
    let url_parts = url.split('/')
    let url_parts_anchor = url_parts[url_parts.length - 1].split('#')
    return url_parts_anchor[url_parts_anchor.length - 1]
}

let cat_links = document.querySelectorAll('.nav-part h5')
let current_url = get_link_from(document.URL)

cat_links.forEach((e) => {
    let link = e.childNodes[0]
    let current_link = get_link_from(link.href)
    if (get_anchor_from(link.href).length >= 1) {
        if (current_link === current_url) {
            link.classList.add('expend')
            e.parentNode.querySelector('ul').classList.add('expend')
        }
    }
    link.addEventListener('click', (a) => {
        a.preventDefault()
        cat_links.forEach((e2) => {
            let list = e2.parentNode.querySelector('ul')
            if (e2 === e) {
                list.classList.add('expend')
            } else {
                list.classList.remove('expend')
            }
        })
    })
})

// Sticky nav

let objNav = document.querySelector("#doc-nav-inner");
let memoPositionNav = objNav.offsetTop;

function sticky() {
    var posCurseur = this.pageYOffset;
    if (posCurseur >= 140 && window.innerWidth > 990) {
        let basePos = 140 - 20
        objNav.style.top = posCurseur - basePos + 'px'
    } else {
        objNav.style.top = 0
    }
}

window.addEventListener("scroll", sticky);
var section = document.querySelectorAll("section");
var sections = {};
var i = 0;

Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
});

window.onscroll = function () {
    checkScroll()
};

checkScroll()

function checkScroll() {
    var scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            links.forEach((link) => {
                link.classList.remove("active")
            });
            document
                .querySelector("a[href*=" + i + "]")
                .setAttribute("class", "active");
        }
    }
}
let codeContainers = document.querySelectorAll('code')
codeContainers.forEach((element) => {
    let lang = element.className.trim()
    if (lang.length > 0 && lang !== 'language-none') {
        lang = lang.replace('language-', '')
        element.parentElement.style.setProperty('--lang', '"' + lang + '"')
    }
})