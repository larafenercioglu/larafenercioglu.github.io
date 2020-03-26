const urele = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breed');


    //show loading spinner
    fetch(urele)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        const obj = data.message;
        const array = Object.keys(obj);

        for(let i = 0; i < array.length; i++){
            const option = document.createElement('option');
            option.value = array[i];
            option.innerText = array[i];
            select.appendChild(option);
        }
        //stop spinner
    })

    select.addEventListener("change", function(event){
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
        getDoggo(url);
    });

const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

function getDoggo(url){
    spinner.classList.add("show");
    img.classList.remove("show");
    fetch(url).then(function(data){
        return data.json();
    }).then(function(res){
        img.src = res.message;
        spinner.classList.remove("show");
        img.classList.add("show");
    })
}

