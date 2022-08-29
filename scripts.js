console.log('veikia')

// document.querySelector('form').addEventListener ('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault ()
//     console.log(event)
//     const result = document.querySelector("input[name=abc]").value
//     console.log(result)
// }

//Pratimas 1
// document.querySelector('button').addEventListener('click', () => {
//     const result = document.querySelector("input[name=abc]").value
//     alert(result)
// })

//Pratimas 2
// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault ()
//     const result = document.querySelector("input[name=age]").value
//     document.querySelector("h1").textContent = result
// }

//Pratimas 3
// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault ()
//     console.log(event)
//     const resultName = document.querySelector("input[name=abc]").value
//     console.log(resultName)
//     const resultAge = document.querySelector("#age[name=age]").value
//     console.log(resultAge)
//     resultAge > 18 ? document.querySelector('h1').textContent = "Vairuoti gali: ${resultName}" : document.querySelector('h1').textContent = "Dar mokytis vairuoti: [resultName]" 
// }

// Pratimas 1
// document.querySelector('form').addEventListener('submit', myFunction)
// function myFunction (event) {
//     event.preventDefault ()
//     const result = document.querySelector("input[name=age]").value
//     const price = 6.00
//     console.log(result)
    //SU IF NEISEINA KAI YRA ELSE
//     if (result < 16) {
//         document.querySelector('h1').textContent = (price * 0.5) + " EUR " + "Kaina su 50 procentų nuolaida"
//     } if (result >= 60) {
//         document.querySelector('h1').textContent = (price / 3) + " EUR " + "Kaina su 1/3 nuolaida"
//     }  else {
//     }       document.querySelector('h1').textContent = price + " EUR " + "Standartinė kaina be nuolaidos"
//     }

//     result < 16 ? document.querySelector('h1').textContent = (price*0.5) : result > 60 ? document.querySelector('h1').textContent = (price/3) : document.querySelector('h1').textContent = price
// }

//Pratimas 2
document.querySelector('form').addEventListener('submit', myFunction)
function myFunction (event) {
    event.preventDefault ()
    const result = document.querySelector('input[name=age]').value
    const isConvicted = document.querySelector('input[type=checkbox]').checked
    console.log(result)

    if (result >= 18 && result <= 30 && !isConvicted) {
        document.querySelector('h1').textContent = "Kariuomenė laukia tavęs!"
    } else {
        document.querySelector('h1').textContent = "Jūs netinkamas armijai"
    }
}
