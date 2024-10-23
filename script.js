const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function getTime() {
    // Variável 'time' pegando a data atual
    const time = new Date();

    // Pega a rotação dos horários/ponteiros
    const getHourRot = (360 / 12) * time.getHours();
    const getMinRot = (360 / 60) * time.getMinutes();
    const getSecRot = (360 / 60) * time.getSeconds();

    hour.style.transform = `rotate(${getHourRot}deg)`;
    min.style.transform = `rotate(${getMinRot}deg)`;
    sec.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
    getTime();
}, 1000);

getTime();