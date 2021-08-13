window.onload = () => {
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q=edsheeran")
        .then(response => response.json())
        .then(searchData => {
            console.log(searchData)
            serachArtist(searchData)

        })
        .catch(err => {
            console.log(err)
        })  
        
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
        .then(response => response.json())
        .then(albums => {
            console.log(albums)
        })
        .catch(err => {
            console.log(err)
        })   
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412")
        .then(response => response.json())
        .then(artist => {
            console.log(artist)
        })
        .catch(err => {
            console.log(err)
        })    
}

function serachArtist(searchData){
    const sec = document.querySelector("#popular")
    for(let artist of searchData.data){
           console.log(artist.album.title, artist.album.md5_image)
           const section = document.querySelectorAll("#popular div.row")[0]  
           section.innerHTML += `<div class="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
           <div class="card h-100">
           <div class="card-image">
           <a href="#">
           <span class="badge hidden-icons"><i class="bi bi-play-circle-fill"></i></span>
          <img
            class="card-img-top"
            src="${artist.album.md5_image}"
            alt="Card image cap"
          />
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">${artist.album.title}</h5>
        
      </div>
    </div>
  </div>`   
        }
        sec.appendChild(section)   
}
