const but = document.querySelector('button');
const div = document.querySelector('div');

function Update() {
    div.innerHTML = `${count}`
}

var count = 0;
but.onclick = () => {
    count += 1;
    Update();
}

Update()