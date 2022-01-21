// -------------  calculation  ---------------------

let buttons = Array.from(document.querySelectorAll('.button'))
const display = document.getElementById("inputFiled")
const sound = new Audio("click-sound.wav")

buttons.map( button => {
    button.addEventListener('click', (e) => {
        function symbolCheck() {
            let arr = Array.from(display.innerText)
            const index1 = arr.indexOf('÷')
            const index2 = arr.indexOf('×')
            if( arr[index1] === '÷') {
                    arr[index1] = '/'
                    let result1 = eval(arr.join(""))
                    display.innerText = "= " + result1
            }else if (arr[index2] === '×') {
                    arr[index2] = '*'
                    let result2 = eval(arr.join(""))
                    display.innerText = "= " + result2
            }else {
                display.innerText = "= " + eval(display.innerText)
            }
        }

        switch(e.target.innerText) {
            case 'AC':
                display.innerHTML = ""
                sound.play()
                break;
            case '=':
                try {
                    symbolCheck()
                }catch {
                    let error = "error"
                    display.innerText = error
                }
                sound.play()
                    break;
            default:
                display.innerText += e.target.innerText
                sound.play()
                break;

        }
    })
})

// -------------  calculation  ---------------------
