
// Start Header changing Sentence

{
    document.querySelectorAll('.slidingVertical').forEach(element=>{
        let i = 0;
         element.querySelectorAll('span').forEach(span=>{
            span.style.animationDelay = i*2.5+'s';
            i++;
         })

    })
}

// End Header changing Sentence

function Person(name){
    this.name = name;
    this.greeting =()=>{
        console.log(this.name);
    }
}

let p1 = new Person('josh');
let p2 = new Person('ahmad');
setTimeout(p1.greeting , 1000);

document.querySelectorAll('main article').forEach(article=>{
    article.querySelector('.read-more').classList.add('d-none');
    article.addEventListener('click',function(){
        window.open(  this.querySelector('a').href,"_top");
    })
})
