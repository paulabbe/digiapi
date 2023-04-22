function htmlin(data) {
    var elemento = document.getElementById('tabla')
    const{name,img,level} = data

    for (let i=0; i<data.length; i++) {
        
        var info=`
       
         <tr>
          <th scope="row">1</th>
          <td>${data[i].name}</td>
          <td>${data[i].img}</td>
          <td>${data[i].level}</td>
          </tr>
        
    `
    elemento.innerHTML+=info
    
}
}
document.getElementById('formulario').addEventListener('submit',function (event) {
    event.preventDefault()
    var digimon=document.getElementById('digi').value

    getDigimon(digimon)
       
})


function htmldigi(data) {
    var card = document.getElementById('card')
  

    var info= `
    <div>
        <div class="card" style="width: 18rem;">
        <img src="${data.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.level}</p>
        </div>
    </div>
    
    `
    card.innerHTML=info
}




function getDigimon(name) {
    var promesadigi = fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
    console.log(promesadigi);

    promesadigi
    .then (function (respdigi) {
        return respdigi.json()
    })
    .then(function (json) {
        console.log(json);
        htmldigi (json[0])
    })
           
    .catch(function (error) {
        console.log(error);
    })       
    
}
getDigimon()




function getData() {
    var promesa = fetch('https://digimon-api.vercel.app/api/digimon')
    console.log(promesa);

    promesa
    .then (function (respuesta) {
        return respuesta.json()
    })
    .then (function (json) {
        console.log(json);
        htmlin(json)
      
        
    })
    .catch(function (error) {
        console.log(error);
           })

     
     }



getData()