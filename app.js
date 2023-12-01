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





const profileNameDropBtn = document.getElementById('profile-dropdown')
const profileDropdown = document.getElementById('profileDrop')
const notifyDrop = document.getElementById('notifyDrop')
const notifyBtn = document.getElementById('notifybtn')

function profileNameBtn() {
    if (profileDropdown.style.display === '') {
        profileDropdown.style.display = 'block'
        notifyDrop.style.display = ''
        profileNameDropBtn.style.background = '#616161'
        notifyBtn.style.background = ''
    } else {
        profileDropdown.style.display = ''
        profileNameDropBtn.style.background = ''
    }
}





notifyBtn.addEventListener('click', function() {
    if (notifyDrop.style.display === '') {
        notifyDrop.style.display = 'block' 
        profileDropdown.style.display = ''
        this.style.background = '#616161'
        profileNameDropBtn.style.background = ''
    } else {
        notifyDrop.style.display = ''
        this.style.background = ''
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

const options = document.getElementsByClassName('options')
const setUpOne = document.getElementById('setupInfo-one')
const setUpTwo = document.getElementById('setupInfo-two')
const setUpThree = document.getElementById('setupInfo-three')
const setUpFour = document.getElementById('setupInfo-four')
const setUpFive = document.getElementById('setupInfo-five')

for (let i = 0; i < options.length; i++) {
    options[0].addEventListener('click', function() {
        if ( setUpOne.style.display === "") {
            setUpOne.style.display = "flex"
        } else if (setUpOne.style.display === "flex") {
            setUpOne.style.display = ""
        }
        
        setUpTwo.style.display = ""
        setUpThree.style.display = ""
        setUpFour.style.display = ""
        setUpFive.style.display = ""

    })

    options[1].addEventListener('click', function() {
        if ( setUpTwo.style.display === "") {
            setUpTwo.style.display = "flex"
        } else if (setUpTwo.style.display === "flex") {
            setUpTwo.style.display = ""
        }
        
        setUpOne.style.display = ""
        setUpThree.style.display = ""
        setUpFour.style.display = ""
        setUpFive.style.display = ""

    })

    options[2].addEventListener('click', function() {
        if ( setUpThree.style.display === "") {
            setUpThree.style.display = "flex"
        } else if (setUpThree.style.display === "flex") {
            setUpThree.style.display = ""
        }
        
        setUpOne.style.display = ""
        setUpTwo.style.display = ""
        setUpFour.style.display = ""
        setUpFive.style.display = ""

    })

    options[3].addEventListener('click', function() {
        if ( setUpFour.style.display === "") {
            setUpFour.style.display = "flex"
        } else if (setUpFour.style.display === "flex") {
            setUpFour.style.display = ""
        }
        
        setUpOne.style.display = ""
        setUpTwo.style.display = ""
        setUpThree.style.display = ""
        setUpFive.style.display = ""

    })

    options[4].addEventListener('click', function() {
        if ( setUpFive.style.display === "") {
            setUpFive.style.display = "flex"
        } else if (setUpFive.style.display === "flex") {
            setUpFive.style.display = ""
        }
        
        setUpOne.style.display = ""
        setUpTwo.style.display = ""
        setUpThree.style.display = ""
        setUpFour.style.display = ""

    })
}   