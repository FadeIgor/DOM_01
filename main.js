// const mainHeader= document.getElementById('mainHeader')
const mainHeader= document.querySelector('#mainHeader')
const article_footer= document.querySelector('.article_footer')

// const articleTitles= document.getElementsByTagName('h2')

const articleTitles=document.querySelectorAll('article h2')

console.log(mainHeader)
mainHeader.innerHTML = "<h1>cokolwiek</h1>"

article_footer.innerHTML = "cokolwiek"

mainHeader.style.color='#f00'
mainHeader.style.backgroundColor='#ff0'

console.log(document.getElementById("art2"))

console.log(document.querySelector("art1"))

for(let i=0; i<articleTitles.length; i++){
    console.log(articleTitles[i])
    articleTitles[i].textContent = `Art. 0${i+1}`
}



