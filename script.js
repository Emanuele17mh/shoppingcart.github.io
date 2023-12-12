let aggiungiBtn = document.getElementById('addBtn');
let rimuoviBtn = document.querySelectorAll('.removeBtn')
let cart = document.getElementById('cartContent');
let cibo = document.getElementById('panino1')
let panini = document.querySelectorAll('li')
let cartValue = ""
let allBtns = document.querySelectorAll('button');
let quantita = document.getElementById('quanteVolte')
let items = document.getElementById('cartItems')
itemsCounter = 0;
let total = document.getElementById('cartTotal')
totalCount = 0;
let prezzoTuttiPanini = document.querySelectorAll('p')
let cartLimit = document.getElementById('carrello')
cartLimit = 27;





  allBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value == 1 ) {
            cart.innerHTML += panini[0].textContent + "<br>"
            itemsCounter++;
            items.innerHTML = "x" + itemsCounter;
            totalCount++;
            total.innerHTML = totalCount + "€"
            
        }
        else if (button.value == 2) {
            cart.innerHTML += panini[1].textContent + "<br>"
            itemsCounter++;
            items.innerHTML = "x" + itemsCounter;
            totalCount = totalCount + 2;
            total.innerHTML = totalCount + "€"
            
        }
        else if (button.value == 3) {
            cart.innerHTML += panini[2].textContent + "<br>"
            itemsCounter++;
            items.innerHTML = "x" + itemsCounter;
            totalCount = totalCount + 3;
            total.innerHTML = totalCount + "€"
        }
        else if (button.value == 4) {
            cart.innerHTML += panini[3].textContent + "<br>"
            itemsCounter++;
            items.innerHTML = "x" + itemsCounter;
            totalCount = totalCount + 4;
            total.innerHTML = totalCount + "€"
        }
        else if (button.value == 5) {
            cart.innerHTML += panini[4].textContent + "<br>"
            itemsCounter++;
            items.innerHTML = "x" + itemsCounter;
            totalCount = totalCount + 5 ;
            total.innerHTML = totalCount + "€"
        }
        
    });
  });




rimuoviBtn.forEach(button => {
    button.addEventListener('click', () => {
        itemsCounter = 0
        items.innerHTML = "0"
        cart.innerHTML = ""
        totalCount = 0
        total.innerHTML = "0€"
        
    })
})
  

 

