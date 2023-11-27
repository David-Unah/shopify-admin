const icon = document.getElementsByClassName('checkboxContainer')
const checkedIcon = document.getElementsByClassName('checkbox11')
const defaultIcon = document.getElementsByClassName('checkbox1')


for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener('click', function() {
        defaultIcon[i].classList.toggle("unshow")
        

        if (checkedIcon[i].style.display === "") {
            checkedIcon[i].style.display = 'block'
        } else if (checkedIcon[i].style.display === 'block') {
            checkedIcon[i].style.display = ""
        }
        
    })
}


const options = document.getElementsByClassName('options')

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
        const setupInfo = document.getElementsByClassName('setupInfo-box')
        if (setupInfo[i].style.display === "") {
            setupInfo[i].style.display = 'flex'
        } else if (setupInfo[i].style.display === 'flex') {
            setupInfo[i].style.display = ""
        }
    })
}