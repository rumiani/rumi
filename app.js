let output = document.querySelector('.output');
let photo = new Image();
let h = 600;
let w = 400;
document.querySelector('.rangNum').innerHTML =  document.querySelector('.range').value+' px'

document.querySelector('.go').addEventListener('click',()=>{
  
    let inputText = document.querySelector('.inputText').value;
    inputText = inputText.trim()
    
    // if(inputText.length<1) {
    //     alert('You should enter a text')
    //     document.querySelector('.inputText').value = ''
    //     return;
    // }
    let range = document.querySelector('.range').value
    output.style.fontSize = `${range}px`

    // output.classList.add('addBG')
    let num = Math.floor(h*w*2.5 / (range * inputText.length)) ;
    for (let i = 0; i <= num; i++) {
        inputText += inputText
    
        if(inputText.length >num){
            output.innerHTML = inputText
            output.classList.add('build')
            
                    return ;};;
            }
    
});
document.querySelector('.range').addEventListener('change',()=>{
    let range = document.querySelector('.range').value
    document.querySelector('.rangNum').textContent = range+' px'
    let photo = new Image()
    photo.src = 'https://rumiani.github.io/rumiani.png'
    let h = photo.height
    let w = photo.width
    output.style.fontSize = `${range}px`
    console.log(range);
    console.log(output.innerHTML.length);
})





document.querySelector('.inputPic').addEventListener('change',()=>{
    let src = URL.createObjectURL(document.querySelector('.inputPic').files[0]);
    output.style.background = `url(${src}) 100% 100% no-repeat`
})
