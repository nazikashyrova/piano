const white_keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm']
const black_keys = ['w', 'e', 'r', 't', 'y', 'u', 'o']

const keys = document.querySelectorAll('.key')

const whitekeys = document.querySelectorAll('.key.white')
const blackkeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', a => {
    const key = a.key
    const whitekeyindex = white_keys.indexOf(key)
    const blackkeyindex = black_keys.indexOf(key)

    if (whitekeyindex > -1) playNote(whitekeys[whitekeyindex])
    if (blackkeyindex > -1) playNote(blackkeys[blackkeyindex])

})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('end', () => {
        key.classList.remove('active')
    })
}