let per = document.getElementById("per")
let per2 = document.getElementById("per2")

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

navigator.geolocation.watchPosition(
    (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        per.style.color = "green"
        per.innerText = "เข้าถึงเสร็จสิ้น โปรดรอ..."

        window.location.href = "map.html";

    },
    (err) => {
        per.style.color = "red"
        per.innerText = "ไม่สามารถเข้าถึงตำแหน่งที่ตั้งได้"
        per2.innerText = "โปรดอนุญาตการเข้าถึงตำแหน่งที่ตั้ง"
    }
)

setInterval(() => {
    location.reload();
}, 3500);