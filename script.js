const input = document.querySelector(".input_class");
const submitBtn = document.querySelector(".submit_button");

submitBtn.addEventListener('click', function(event){
    fetch(` https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(resolve => resolve.json())
    .then(data =>{
        for(let i=0; i<data.length; i++){
            let datas = data[i]["show"]
            let result = `<div>
            <img src="${datas.image.medium}"
            <h1>Name: ${datas.name}</h1>
            <h4>Start Date: ${datas.premiered}</h4>
            <h4>Language: ${datas.language}</h4>
            <a href="${datas.url}" target="_blank"><button class="show_details">Show details</button></a>
            </div`
            let container = document.querySelector(".data_container")
        container.innerHTML += result
        }
        console.log(data)
    }).catch(err => alert("Invalid data!!"))
})

let showDetails = document.querySelector(".show_details")

showDetails.addEventListener("click", function(event){
    fetch(`https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
})