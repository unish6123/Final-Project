let adoptBtn = document.getElementById("adopt-btn")
let reportBtn = document.getElementById("report-btn")
let getInvolvedBtn = document.getElementById("get-involved-btn")
let donateBtn = document.getElementById("donate-btn")
let donateContainer = document.getElementById("donate-container")
let adoptContainer = document.getElementById("adopt-container")
let reportContainer = document.getElementById("report-container")
let mainContainer = document.getElementById("main-container")
let getInvolvedContainer = document.getElementById("get-involved-container")

// let mainOpacityFunc = ()=>{
//     mainOpacity = mainContainer.style.opacity = "1"
//     if (mainOpacity === "1"){
//         mainOpacity = mainContainer.style.opacity = "0.5"
//     } else{
//         mainOpacity = mainContainer.style.opacity = "1"
    
//     }
// }
adoptBtn.addEventListener('click', ()=>{
    adoptContainer.classList.toggle('show-container');
    reportContainer.classList.remove('show-container');
    getInvolvedContainer.classList.remove('show-container');
    donateContainer.classList.remove('show-container');
    // mainOpacityFunc()
} )

reportBtn.addEventListener('click', ()=>{
    reportContainer.classList.toggle('show-container');
    adoptContainer.classList.remove('show-container');
    getInvolvedContainer.classList.remove('show-container');
    donateContainer.classList.remove('show-container');
    // mainOpacityFunc()
} )

getInvolvedBtn.addEventListener('click', ()=>{
    getInvolvedContainer.classList.toggle('show-container');
    adoptContainer.classList.remove('show-container');
    reportContainer.classList.remove('show-container');
    donateContainer.classList.remove('show-container');
    // mainOpacityFunc()
} )

donateBtn.addEventListener('click', ()=>{
    donateContainer.classList.toggle('show-container');
    adoptContainer.classList.remove('show-container');
    reportContainer.classList.remove('show-container');
    getInvolvedContainer.classList.remove('show-container');
    // mainOpacityFunc()
} )





let donateForm = document.getElementById("donate-form")
let reportForm = document.getElementById("report-form")
let reportSuccess = document.getElementById("report-success")
let donationSuccess = document.getElementById("donation-success")
donateForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    donateForm.reset();
    donationSuccess.style.display= "flex";
    setTimeout(() => {
        donationSuccess.style.display= "none";
    }, 3000);
})

reportForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    reportForm.reset();
    reportSuccess.style.display= "flex";
    setTimeout(() => {
        reportSuccess.style.display= "none";
    }, 3000);
})

let getInvolvedForm = document.getElementById("get-involved-form")
getInvolvedForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    getInvolvedForm.reset();
    reportSuccess.style.display= "flex";
    setTimeout(() => {
        reportSuccess.style.display= "none";
    }, 3000);
})


async function fetchBreedImg(breedName){
    let response = await fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    let result = await response.json()

    dogImg = result.message
    // console.log(dogImg)

    adoptContainer.innerHTML += `
    <div class="dog_container">
        <img src="${dogImg}" alt="" class="dogimg" />

        <span class="text1">${breedName}</span>
      </div>
    `
}



async function fetchBreed(){
    let response = await fetch("https://dog.ceo/api/breeds/list/all")
    let result = await response.json()
    // console.log(result.message)
    let breeds = result.message

    // let breedNames = new Array
    for (const key in breeds){
        if(breeds[key].length === 0 ){
            fetchBreedImg(key)
        }
    }
    // console.log(breedNames)

}

fetchBreed()