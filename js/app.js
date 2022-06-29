
//ТУТ Я СДЕЛАЛ ПЛАВНЫЙ СКРОЛ СТРАНИЦИ
const smothLinks = document.querySelectorAll('a[href^="#"]')
for(let smothLink of smothLinks){
    smothLink.addEventListener('click', function(e){
        e.preventDefault()
        const id = smothLink.getAttribute('href')

        document.querySelector(id).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    })
}



//ТУТ Я ДЕЛАЮ СОРТИРОВКУ
const a = document.getElementsByTagName('button')
for(let i = 0; i<a.length;i++){
    let b = a[i].addEventListener('click', function(){
        const id = a[i].getAttribute('data-btn')

        if(id=='web'){
            let ab = document.getElementsByClassName('grid-folder__cards')
                 for(let i = 0; i<ab.length;i++){
                   let bc = ab[i].getAttribute('data-category')
                    if(bc!=='webe'){
                        ab[i].classList.add('non')
                    }else{
                        ab[i].classList.remove('non')
                    }
                }

        }
        if(id=='apps'){
            let ab = document.getElementsByClassName('grid-folder__cards')
                 for(let i = 0; i<ab.length;i++){
                   let bc = ab[i].getAttribute('data-category')
                    if(bc!=='appe'){
                        ab[i].classList.add('non')
                    }else{
                        ab[i].classList.remove('non')
                    }
                }

        }
        if(id=='icons'){
            let ab = document.getElementsByClassName('grid-folder__cards')
                 for(let i = 0; i<ab.length;i++){
                   let bc = ab[i].getAttribute('data-category')
                    if(bc!=='icons'){
                        ab[i].classList.add('non')
                    }else{
                        ab[i].classList.remove('non')
                    }
                }

        }
        if(id=='all'){
            let ab = document.getElementsByClassName('grid-folder__cards')
                 for(let i = 0; i<ab.length;i++){
                   ab[i].classList.remove('non')
                   
                }

        }
        if(id=='dop-win'){
            let ab = document.getElementById('dopp')
                 ab.style.display = 'grid'
                 if(ab.style.display = 'grid'){
                     let rr = document.querySelector('#dop-win-btn')
                    rr.innerHTML = 'this is all'
        
                 }

        }

        if(id=='send-m'){
                     let rr = document.querySelector('#send-btn')
                        rr.innerHTML = 'all right'
        
                 }
                 
                 if(id=='send-modal-m'){
                  
                    let rr = document.querySelector('#send-modal-btn')
                    rr.innerHTML = 'good'
                
                         
        
                }

        

    })
   
}
