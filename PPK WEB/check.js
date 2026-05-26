let lat_min = document.getElementById("latmin")
let lat_max = document.getElementById("latmax")
let lon_min = document.getElementById("lonmin")
let lon_max = document.getElementById("lonmax")
let loca = document.getElementById("loca")
let loca2 = document.getElementById("loca2")
let back = document.getElementById("back")
    
    navigator.geolocation.watchPosition(
        (position) => {

            const lat = position.coords.latitude

            const lon = position.coords.longitude

            lat_min.innerText = `latMin ${latMin} (จุดละติจูดที่คุณอยู่ได้ต่ำที่สุด)`
            lat_max.innerText = `latMax ${latMax} (จุดละติจูดที่คุณอยู่ได้มากที่สุด)`

            if (lat < latMin ) {
                lat_min.style.color = "red"
            }else {
                lat_min.style.color = "green"
            }

            if (lat > latMax) {
                lat_max.style.color = "red"
            } else {
                lat_max.style.color = "green"
            }

            lon_min.innerText = `lonMin ${lonMin} (จุดลองติจูดที่คุณอยู่น้อยที่สุด)`
            lon_max.innerText = `lonMax ${lonMax} (จุดลองติจูดที่คุณอยู่ได้มากที่สุด)`

            if (lon < lonMin ) {
                lon_min.style.color = "red"
            } else {
                lon_min.style.color = "green"
            }

            if (lon > lonMax) {
                lon_max.style.color = "red"
            } else {
                lon_max.style.color = "green"
            }

            loca.innerText = `พิกัดของคุณ ละติจูด: ${lat}   ,   ลองติจูด: ${lon}`
            loca2.innerText = `${lat},${lon}`
        },
        () => {
            lat_min.innerText = "ไม่สามาถเข้าถึงได้ โปรดลองอีกครั้ง"
            lat_max.innerText = ""
            lon_min.innerText = ""
            lon_max.innerText = ""
            loca.innerText = ""
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    
    )

back.addEventListener("click" , function() {
    window.location.href = "./map.html"
})