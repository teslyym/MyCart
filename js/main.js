const items = document.querySelectorAll('.cart1')

items.forEach(item => {
    const dec =item.querySelector('.decrement')
    const inc =item.querySelector('.increment')
    const qty =item.querySelector('.quantity')
    const price =item.querySelector('.price')
    const total =item.querySelector('.total')
    let quantity = parseInt(qty.innerHTML)

    inc.addEventListener('click', ()=>{
        dec.removeAttribute("disabled")
        quantity++
        qty.innerHTML =quantity
        total.innerHTML = quantity *price.innerHTML
    })
    
    dec.addEventListener('click', ()=>{
        if (quantity==1) {
            dec.setAttribute("disabled", "true")
        }
        else{
            quantity--
        }
        qty.innerHTML =quantity
        total.innerHTML = quantity *price.innerHTML
    })
    
});
