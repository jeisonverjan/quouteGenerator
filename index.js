const content = document.querySelector('.content');
const author = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote-btn')

document.addEventListener('DOMContentLoaded', ()=>{
    renderQuote()
})

const receiveQuote = async()=>{
    try {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        quote = {
            'author': data.author,
            'content': data.content
        }
        return quote
    } catch (error){
        console.log(error)
    }
}

const renderQuote = async()=>{
    const quote = await receiveQuote()
    content.innerHTML = `"${quote.content}"`
    author.innerHTML = quote.author
}

newQuoteBtn.addEventListener('click', ()=>{
    renderQuote()
})