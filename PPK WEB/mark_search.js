function mark_search(mark,minx,miny,maxx,maxy,markspan) {

    markspan.style.display = "block"


    mark.style.display = "block"
    let f_x = (minx - lonMin) / (lonMax - lonMin) * 100
    let f_y = (miny - latMin) / (latMax - latMin) * 100

    let l_x = (maxx - lonMin) / (lonMax - lonMin) * 100
    let l_y = (maxy - latMin) / (latMax - latMin) * 100

    mark.style.width = `${Math.abs(l_x-f_x)}%`
    mark.style.height = `${Math.abs(l_y-f_y)}%`
    mark.style.top = `${100 - f_y}%`
    mark.style.left = `${f_x}%`
}

function cancel_search(mark,markspan) {
    mark.style.display = "none"
    markspan.style.display = "none"
}