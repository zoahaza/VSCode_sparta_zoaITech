$(document).ready(function () {
    renderCurrentTime();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,8);
    $('#time').text(datetime);
});
}

