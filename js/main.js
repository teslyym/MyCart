const items = document.querySelectorAll('.cart1')

function calculatetotal() {
    let subtotal =document.querySelector('.Subtotal')
    let tax =document.querySelector('.tax')
    let grandtotal =document.querySelector('.gtotal')
    let sub=0
    items.forEach(item => {
        const total =item.querySelector('.total')
        sub+=parseFloat(total.innerHTML)
    }) 
    subtotal.innerHTML = `$${sub}`
    grandtotal.innerHTML = `$${sub+ parseFloat(tax.innerHTML)}`
}

items.forEach(item => {
    const dec =item.querySelector('.decrement')
    const total =item.querySelector('.total')
    const inc =item.querySelector('.increment')
    const qty =item.querySelector('.quantity')
    const price =item.querySelector('.price')
    let quantity = parseInt(qty.innerHTML)

    inc.addEventListener('click', ()=>{
        dec.removeAttribute("disabled")
        quantity++
        qty.innerHTML =quantity
        total.innerHTML = quantity *price.innerHTML
        calculatetotal()
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
    calculatetotal()
});


calculatetotal()