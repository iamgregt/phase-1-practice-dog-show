const tableHeader = document.querySelector('.blue')
const dogForm = document.querySelector('#dog-form')


function loadDogs(){
    fetch('http://localhost:3000/dogs')
    .then(resp => resp.json())
    .then(dogs => {
        dogs.forEach(dog => {
            // console.log(dog)
            renderDog(dog)
        })
    })
}

dogForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)
    fetch(`http://localhost:3000/dogs/${dogId}`,{
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json',
            'accept':'application/json'
        },
        body: JSON.stringify(dog)
    })
})


function renderDog(dog){
    let dogRow = document.createElement('tr')
    let dogName = document.createElement('td')
    let dogBreed = document.createElement('td')
    let dogSex = document.createElement('td')
    let dogButton = document.createElement('button')
    let dogElementArray = [dogName, dogBreed, dogSex, dogButton]
    let dogId = dog.id
    dogRow.setAttribute('id',dog.id)
    dogName.innerHTML = dog.name
    dogSex.innerHTML = dog.sex
    dogBreed.innerHTML = dog.breed
    dogButton.innerHTML = "Edit"
    dogElementArray.forEach(elem => {
        dogRow.appendChild(elem)
    })
    tableHeader.appendChild(dogRow)
    dogButton.addEventListener('click', () =>{
        console.log(dogForm.children)
        dogForm.children[0].value = dog.name
        dogForm.children[1].value = dog.breed
        dogForm.children[2].value =dog.sex
        
    })
    
}

loadDogs()

