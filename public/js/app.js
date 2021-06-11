

console.log('client side java script is loaded!!')

fetch('http://puzzle.mead.io/puzzle').then((reponce)=>{
    reponce.json().then((data)=>{
        console.log(data)
    })
})




const weatherForm=document.querySelector('form')
const serachElement=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')

//messageOne.textContent='hiiiiiiiiiiiiiiiiiiii' //--->to add content using id

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location=serachElement.value
    messageOne.textContent='Loading..'
    messageTwo.textContent=''
    // console.log('location is:',location)
    // console.log('Testing!')


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
        if(data.Error){
            messageOne.textContent=data.Error
            console.log('error:',data.Error) //---->for browser consol
        }
        else{
            messageOne.textContent=data.location
            messageTwo.textContent=data.forecast
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})
})



