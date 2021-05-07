const find = document.getElementById("find");
const addHtml = document.getElementById("container")

find.addEventListener('click', searchMusic);

function searchMusic() {
    let searchMusic = document.getElementById("searchmusic").value;
    fetch(`https://itunes.apple.com/search?term=${searchMusic}`)
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.results.forEach(results => {
            html +=`
            <div class="box">
            <div class="inbox">
                <img src="${results.artworkUrl100}">
                <div>
                <div class="align">${results.trackName}</div>
                <div class="align">${results.artistName}</div>
                </div>
                </div>
                <audio controls src="${results.previewUrl}"></audio>
            </div>
            `
            console.log(data)
        })
        addHtml.innerHTML = html;
    })
}