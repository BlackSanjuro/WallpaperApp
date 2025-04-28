
const menu = document.querySelector('#menu');
const textInput = document.querySelector("#textInput");
const imageInputs = document.querySelectorAll('.imgInput')
const images = document.querySelectorAll('.picture')
const colorInputs = document.querySelectorAll('.color')

// DELAY FOR TRANSITION
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const imageConverter = async (file) => {


    let convertApi = ConvertApi.auth('secret_4H4jskJKFKBZyxH4')
    let params = convertApi.createParams()
    params.add('File', file);
    let result = await convertApi.convert('heic', 'jpg', params)
}

// ADJUST THE MENU POSITIONING
menu.querySelector('.btn').addEventListener('click', async (e) => {

    scroll(0, 0)

    menu.classList.toggle('top-100')
    menu.classList.toggle('top-0')
    

    if (menu.classList.contains('top-100')) {

        await delay(2000);
    }
    menu.classList.toggle('z-3')
    menu.querySelector('#info').classList.toggle('visually-hidden')
    menu.querySelector('#info').querySelectorAll('div').forEach( param => {

        param.classList.toggle('visually-hidden')
        param.classList.toggle('border-0')
    })
})

// TEXT CHANGING
textInput.addEventListener('change', (e) => {

    document.querySelector('#text').innerHTML = e.target.value
})


// IMAGE CHANGING
for (let i = 0; i < imageInputs.length; i++) {

    let input = imageInputs[i]

    input.addEventListener('change', (e) => {

        const reader = new FileReader();
        reader.addEventListener('load', () => {

            images[i].style.backgroundImage = `url(${reader.result})`
        })

        reader.readAsDataURL(e.currentTarget.files[0])
    })
}

// COLOR CHANGING FOR THE TEXT
colorInputs[0].addEventListener('change', (e) => {

    document.querySelector('#text').style.color = `${e.currentTarget.value}`
})

// COLOR CHANGING FOR THE BG
colorInputs[1].addEventListener('change', (e) => {

    document.querySelector('#text').style.background = `${e.currentTarget.value}`
})

// COLOR CHANGING FOR THE BG
colorInputs[2].addEventListener('change', (e) => {

    document.querySelector('#bg').style.background = `${e.currentTarget.value}`
})
