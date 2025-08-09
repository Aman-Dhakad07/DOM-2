const parent = document.querySelector('.parent');




// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
    
// }



// parent.children[1].style.color="orange"
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);



// const day1= document.querySelector('.day')
// console.log(day1)

// console.log(day1.parentElement)


// console.log("NODES: ",parent.childNodes)



// const div = document.createElement('div')
// console.log(div)


// div.className = "main"
// div.id=Math.random()


//first method , not optimized
function addLanguage(langName){
      const li = document.createElement('li');
      li.innerHTML = `${langName}`
      document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")

// second method , optimized method
function addOptiLanguage(langName){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);

}
addOptiLanguage('golang')


//Edit values

const secondLang = document.querySelector("li:nth-child(2)")
// secondLang.innerHTML="Mojo"


const newli = document.createElement('li')
newli.textContent = "Mojo"
secondLang.replaceWith(newli)

// remove

const lastLang = document.querySelector("li:last-child");
lastLang.remove()


