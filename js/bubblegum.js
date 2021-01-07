/**
 * Bubblegum: elegant syntax framework
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Antharuu <https://github.com/antharuu>
 * @namespace
 * @public
 */
const bubblegum_prefix = '_';

const bundles = [
    'prism'
]

bundles.forEach((file) => require('./bundles/' + file))

let codes = document.querySelectorAll('[' + bubblegum_prefix + 'code]');

codes.forEach(function (c) {
    {
        let lang = c.attributes[bubblegum_prefix + 'code'].value;
        c.classList.add('language-' + lang)
        if (c.localName === 'code') {
            bubble_set_code(c)
        } else if (c.localName === 'pre') {
            if (c.childNodes[0] !== undefined) {
                if (c.childNodes[0].localName !== 'code') {
                    c.innerHTML = '<code>' + c.innerHTML + '</code>'
                }
                bubble_set_code(c.childNodes[0])
            }
        }
    }
})

function bubble_set_code(c) {
    c.innerHTML = c.innerHTML.trim()
    if (c.parentElement.localName !== 'pre') {
        c.outerHTML = '<pre>' + c.outerHTML + '</pre>'
    }
}
