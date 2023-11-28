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

const profileNameBtn = document.getElementById('profileNameBtn')
const profileDropdown = document.getElementById('profileDrop')
const notifyDrop = document.getElementById('notifyDrop')

profileNameBtn.addEventListener('click', function() {
    if (profileDropdown.style.display === '') {
        profileDropdown.style.display = 'block'
        notifyDrop.style.display = ''
    } else {
        profileDropdown.style.display = ''
    }


})

const notifyBtn = document.getElementById('notifybtn')


notifyBtn.addEventListener('click', function() {
    if (notifyDrop.style.display === '') {
        notifyDrop.style.display = 'block' 
        profileDropdown.style.display = ''
    } else {
        notifyDrop.style.display = ''
    }
})

const cancel = document.getElementById('cancel')
function cancelPlan() {
    cancel.parentElement.parentElement.remove()
}


const guideBox = document.getElementById('guideBox')
const rollOut = document.getElementById('rollOut')
const rollUp = document.getElementById('rollUp')

function displayGuide() {
    if (guideBox.style.display === '') {
        guideBox.style.display = 'block' 
        rollOut.innerHTML = '<img src="./images/rollup.png" alt="roll up icon" >'
        
    } else {
        guideBox.style.display = ''
        rollOut.innerHTML = '<img src="./images/Icons.png" alt="drop down icon" >'
    }
}

const checkedSentence = document.getElementById('checkedSentence')
const loadingContent = document.getElementById('loadingContent')

const scoresboard = {
    score1: 0,
    score2: 0,
    score3: 0,
    score4: 0,
    score5: 0,
}


function toggleCount(score) {
    scoresboard[score] = 1 - scoresboard[score]
    let totalScore = scoresboard.score1 + scoresboard.score2 + scoresboard.score3 + scoresboard.score4 + scoresboard.score5
    totalChecked(totalScore)
}


function totalChecked(item) {
    checkedSentence.innerText = `${item} / 5 completed`
    if (item === 1) {
        loadingContent.style.width = '20%'
    } else if ( item === 2) {
        loadingContent.style.width = '40%'
    } else if (item === 3) {
        loadingContent.style.width = '60%'
    } else if (item === 4) {
        loadingContent.style.width = '80%'
    } else if (item === 5) {
        loadingContent.style.width = '100%'
    } else {
        loadingContent.style.width = '0%'
    }
}

