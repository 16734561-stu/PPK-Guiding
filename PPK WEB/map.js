const data = [
  "อาคาร:1",
  "อาคาร:2",
  "อาคาร:3",
  "อาคาร:4",
  "อาคาร:5",
  "อาคาร:6",
  "อาคาร:7",


  "สถานที่:ศาลาจริยธรรม",
  "สถานที่:โรงอาหาร",
  "สถานที่:หอประชุมโรงเรียน",
  //"สถานที่:หอประชุม 80ปี",
  "สถานที่:ลาน 80ปี",
  "สถานที่:โดมโรงเรียน",
  "สถานที่:ห้องพยาบาล",
  "สถานที่:ห้องน้ำ",
  "สถานที่:ศูนย์กีฬา",
  "สถานที่:สนามกีฬา",
  "สถานที่:สนามฟุตซอล",
  "สถานที่:ห้องสมุด",
  "สถานที่:ห้องการงาน และดุริยางค์",
  "สถานที่:ห้องหุ่นยนต์",
  "สถานที่:ห้องICT",
  "สถานที่:หอเกียรติยศ",
  //"สถานที่:ห้องดนตรี นาฏศิลป์ และศิลปะ",
];

let place = document.getElementById("place")
let describe = document.getElementById("describe")

let desone = document.getElementById("desone")
let destwo = document.getElementById("destwo")
let desthree = document.getElementById("desthree")

var latMin = 19.168538614483722 
var latMax = 19.17219309786083 //19.168654061199902, 
var lonMin = 99.90802436851047
var lonMax = 99.91103033391232

const Placecoords = {
  "อาคาร:1": {minlat:19.17126398227991,maxlat:19.17154945225331,minlon:99.908617383917,maxlon:99.90970226011801},   
  "อาคาร:2": {minlat:19.170940164989588,maxlat:19.171161724253217,minlon:99.90972707019766,maxlon:99.91066308604677},
  "อาคาร:3": {minlat:19.170939424228173,maxlat:19.171124767094913,minlon:99.90877004867231,maxlon:99.90962486796582},
  "อาคาร:4": {minlat:19.170487019598152,maxlat:19.17111335154675,minlon:99.91065673884613,maxlon:99.91080785465921}, 
  "อาคาร:5": {minlat:19.171215152993888,maxlat:19.171971365514853,minlon:99.91060465923475,maxlon:99.91083112807306}, 
  "อาคาร:6": {minlat:19.169512061729105,maxlat:19.170056759841405,minlon:99.91033715479311,maxlon:99.91071668735725}, 
  "อาคาร:7": {minlat:19.169139058736267,maxlat:19.16982598568272,minlon:99.90980475399073,maxlon:99.91030394234606},
  "สถานที่:ศาลาจริยธรรม": {minlat:19.170885792857188,maxlat:19.171273864045222,minlon:99.90826635702115,maxlon:99.90857691608905},
  "สถานที่:โรงอาหาร": {minlat:19.17015684883312,maxlat:19.170502281361514,minlon:99.91013689225318,maxlon:99.91081021348752},
  "สถานที่:หอประชุมโรงเรียน": {minlat:19.170412408595954,maxlat:19.170880517200565,minlon:99.90820448048781,maxlon:99.90853772323473}, 
  //"สถานที่:หอประชุม 80ปี": {minlat:0,maxlat:0,minlon:0,maxlon:0},
  "สถานที่:ลาน 80ปี": {minlat:19.169878135074004,maxlat:19.170245977615853,minlon:99.90964415993248 ,maxlon:99.90993156775598},
  "สถานที่:โดมโรงเรียน": {minlat:19.170490363153426,maxlat:19.170913274919844,minlon:99.9103232193313,maxlon:99.91066671569705},
  "สถานที่:ห้องพยาบาล": {minlat:19.170907662777626,maxlat:19.17109770074551,minlon:99.90964078707727,maxlon:99.90972817512626},
  "สถานที่:ห้องน้ำ": {minlat:19.171178724842882,maxlat:19.171401329002897,minlon:99.91011878331537,maxlon:99.9105096579553},
  "สถานที่:ศูนย์กีฬา": {minlat:19.168842732302835,maxlat:19.16912875254269,minlon:99.90900561654593,maxlon:99.90961123604836},
  "สถานที่:สนามกีฬา": {minlat:19.169235742407878,maxlat:19.170842848052438,minlon:99.90859603545728,maxlon:99.90954160719656}, 
  "สถานที่:สนามฟุตซอล": {minlat:19.169144608522668,maxlat:19.16950295660348,minlon:99.91033259914565,maxlon:99.91057185034569},
  "สถานที่:ห้องสมุด": {minlat:19.170229753329355,maxlat:19.17057518570494,minlon:99.90966648636999,maxlon:99.9101398619586},
  "สถานที่:ห้องการงาน และดุริยางค์": {minlat:19.16983802472964,maxlat:19.1702012138187,minlon:99.9099599530514 ,maxlon:99.91037009796571},
  "สถานที่:ห้องหุ่นยนต์": {minlat:19.16974924505281,maxlat:19.169831568027497,minlon:99.9099445726171,maxlon:99.91012059314285},
  "สถานที่:ห้องICT": {minlat:19.170877657962006,maxlat:19.170972086606483,minlon:99.90907489960452,maxlon:99.90942010490738},
  "สถานที่:หอเกียรติยศ": {minlat:19.17057087181812,maxlat:19.170826542839148,minlon:99.90965995332431,maxlon:99.90983396307442},
  //"สถานที่:ห้องดนตรี นาฏศิลป์ และศิลปะ": {minlat:0,maxlat:0,minlon:0,maxlon:0},
}

let onschool;

navigator.geolocation.watchPosition(

  (position) => {

    onschool = true;

    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const isInArea =
      lat >= latMin && lat <= latMax &&
      lon >= lonMin && lon <= lonMax

    if (isInArea) {

      place.style.color = "black"
      place.innerText = "สถานที่ที่คุณอยู่:"
      
      let { top, left } = Process_MAP(lat,lon)
      top = 100 - top

      let frame = document.getElementById("map_frame")
      let f_doc = frame.contentWindow.document
      let pos = f_doc.querySelector("#pos")

      pos.style.color = "black"

      pos.style.left = `${left}%`
      pos.style.top = `${top}%`

      let whereplace = Where_Are_You(lat,lon,describe)
      describe.innerText = `${whereplace}`

      let des1 , des2 , des3
      [des1, des2, des3] = describe_place(whereplace)
      desone.innerText = des1
      destwo.innerText = des2
      desthree.innerText = des3

    } else {

      let frame = document.getElementById("map_frame")
      let f_doc = frame.contentWindow.document
      let pos = f_doc.querySelector("#pos")

      pos.style.color = "red"

      place.style.color = "red"
      place.innerText = "คุณอยู่นอกพื้นที่"
      describe.innerText = "คุณต้องอยู่ในพื้นที่ของโรงเรียน"
    }
  },
  () => {

    onschool = false;

    place.style.color = "red"
    place.innerText = "เข้าถึงตำแหน่งไม่ได้"
    describe.innerText = "โปรดเข้าถึงตำแหน่งที่ตั้ง"
    desone.innerText = "รีเฟรช หากอนุญาตเข้าถึงแล้ว"
    destwo.innerText = "แจ้งปัญหาได้โดยกดปุ่มรูป ?"
    desthree.innerText = ""
  },
  {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  }
)

//----------------------------------------------------------------------------------------------------------
//COMPASS

async function startCompass() {

    if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
    ) {

        try {

            const permission =
                await DeviceOrientationEvent.requestPermission();

            if (permission === "granted") {

                window.addEventListener(
                    "deviceorientation",
                    handleOrientation
                );

            }

        } catch(err) {

            console.log(err);

        }

    } else {

        window.addEventListener(
            "deviceorientation",
            handleOrientation
        );

    }

}

function handleOrientation(event) {

    let frame = document.getElementById("map_frame");

    if (!frame) return;

    let f_doc = frame.contentWindow.document;

    let pos = f_doc.querySelector("#pos");

    if (!pos) return;

    let compass = event.alpha;

    console.log("Compass:", compass);
    console.log(
      typeof DeviceOrientationEvent.requestPermission
    );

    pos.style.transform =
        `translate(-50%, -50%) rotate(${compass}deg)`;

}

//----------------------------------------------------------------------------------------------------------

const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
let currentIndex = -1;

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";
  currentIndex = -1;

  if (!value) return;

  const filtered = data.filter(item =>
    item.toLowerCase().includes(value)
  );

  filtered.forEach(item => {

    const div = document.createElement("div");

    div.textContent = item;
    
    div.addEventListener("click", () => {
      input.value = item;
      suggestions.innerHTML = "";
    });
    suggestions.appendChild(div);
  });
});

let searchBtn = document.getElementById("but_search");
let searchicon = document.getElementById("search_icon");
let searchActive = -1;

searchBtn.addEventListener("click", () => {
  searchActive *= -1;

  const selectedPlace = input.value;
  let frame = document.getElementById("map_frame")
  let f_doc = frame.contentWindow.document
  let mark = f_doc.querySelector("#mark")
  let markspan = f_doc.querySelector("#markspan")

  if (searchActive === 1) {

    if (Placecoords[selectedPlace]) {

      searchicon.src = "icons_img/xicon.png";

      const PLACE_COORDS = Placecoords[selectedPlace];

      mark_search(mark,PLACE_COORDS.minlon,PLACE_COORDS.maxlat,PLACE_COORDS.maxlon,PLACE_COORDS.minlat,markspan);

    } else {
      alert(`ไม่พบ "${selectedPlace}" ที่คุณค้นหา\n กรุณาเลือกสถานที่จากรายการที่มีอยู่ในช่องค้นหา`);
      searchActive = -1;
    }
  }
  else if (searchActive === -1) {
    searchicon.src = "icons_img/search_icon.png";
    cancel_search(mark,markspan);
  }
});

function Setting() {
  alert("การตั้งค่ากำลังมาเร็วๆนี้ :)");
}

function IMG_FOR_MAP (yourplace,place) {
}

function Where_Are_You (lat,lon,textplace) {
  for (const key in Placecoords) {
    const coords = Placecoords[key];
    if (lat >= coords.minlat && lat <= coords.maxlat &&
        lon >= coords.minlon && lon <= coords.maxlon) {
      textplace.innerText = key;
      return key;
    }
  }
  return "เขตนอกพื้นที่สถานที่ที่กำหนด";
}

function describe_place(place) {
  switch (place) {

    case "อาคาร:1":
      return [
        "อาคารหลักของโรงเรียน",
        "ติดต่อประชาสัมพันธ์,การประชุมและกิจกรรมต่างๆ",
        "นอกจากนี้ยังมีห้องเรียนและสำนักงานต่างๆ"
      ]


    case "อาคาร:2":
      return [
        "อาคารที่สองของโรงเรียน",
        "มีห้องเรียนต่างๆ สำหรับการเรียนการสอน",
        ""
      ]


    case "อาคาร:3":
      return [
        "อาคารวิทยาศาสตร์ และวิทยาการคำนวณ",
        "มีสื่อห้องเรียน ICT และห้องปฏิบัติการ",
        "มีห้องปฐมพยาบาล"
      ]


    case "อาคาร:4":
      return [
        "อาคารภาษาต่างประเทศ",
        "มีห้องเรียนสำหรับการเรียนภาษาต่างประเทศต่างๆ",
        "ส่งเสริมทักษะทางภาษา"
      ]


    case "อาคาร:5":
      return [
        "อาคารสังคมศึกษาและวัฒนธรรม",
        "สังคมศึกษา ประวัติศาสตร์และวัฒนธรรมต่างๆ",
        "มีห้องอาเซียน"
      ]


    case "อาคาร:6":
      return [
        "อาคารคณิตศาสตร์",
        "หอประชุมเฮือนคำ",
        "มีห้อง International Learning Hub"
      ]


    case "อาคาร:7":
      return [
        "อาคาร สสวท. ,ห้องพิเศษ",
        "มีห้องเรียนสำหรับการเรียนการสอนวิชาต่างๆ",
        "มีห้องเรียนพิเศษ SMTE"
      ]

    //----------------------------------------------------------------------

    case "สถานที่:ศาลาจริยธรรม":
      return [
        "ศาลาจริยธรรมของโรงเรียน",
        "้สวดมนต์ไหว้พระ",
        "สถานที่พักพิง ใต้ร่มเงา"
      ]

    case "สถานที่:โรงอาหาร":
      return [
        "โรงออาหารของโรงเรียน",
        "มีจุดซื้อขายอาหาร และสหกรณ์",
        "มีชั้นบนอีก 3 ชั้น ห้องศิลปะ,ดนตรี,นาฐศิลป์,หอประชุม80ปี"
      ]

    case "สถานที่:หอประชุมโรงเรียน":
      return [
        "หอประชุมหลักของโรงเรียน",
        "มีการทำกิจกรรมต่างๆ",
        "ส่วนใหญ่กิจกรรมของครู,นักเรียน จัดที่นี่"
      ]

    case "สถานที่:ลาน 80ปี":
      return [
        "ลานสาธารณะของโรงเรียน",
        "จุดพักพิง ใต้ร่มเงา",
        "พักผ่อน รับประทานอาหารได้"
      ]

    case "สถานที่:โดมโรงเรียน":
      return [
        "โดมใหญ่ของโรงเรียน",
        "จุดทำกิจกรรมเวทีต่างๆ",
        "และกิจกรรมอื่นๆ เช่นหอการค้า ตลาด"
      ]

    case "สถานที่:ห้องพยาบาล":
      return [
        "จุดรักษา พักฟื้นของโรงเรียน",
        "ปฐมพยาบาล มีจุดพักผ่อนเพื่อรอฟื้นตัว",
        "หากเกิดการเจ็บป่วย สามารถพบได้"
      ]
    
    case "สถานที่:ห้องน้ำ":
      return [
        "ห้องน้ำใหญ่ของโรงเรียน",
        "",
        ""
      ]

    case "สถานที่:ศูนย์กีฬา":
      return [
        "อาคารสำหรับการกีฬา",
        "มีจุดสำหรับเล่นกีฬาต่างๆ",
        "มีอุปกรณืการกีฬา"
      ]

    case "สถานที่:สนามกีฬา":
      return [
        "มีลู่วิ่ง และลานกีฬา",
        "สนามฟุตบอล",
        "วันกิจกรรมจัดงานกีฬาสี"
      ]

    case "สถานที่:สนามฟุตซอล":
      return [
        "สนามเล่นฟุตซอล",
        "กีฬาเล็กกลางแจ้ง",
        ""
      ]

    case "สถานที่:ห้องสมุด":
      return [
        "ห้องสมุดหลักของโรงเรียน",
        "สำหรับการอ่านหนังสือ ศึกษาความรู้",
        "และเป็นจุดพักพิง"
      ]

    case "สถานที่:ห้องการงาน และดุริยางค์":
      return [
        "ห้องงานช่าง และซ้อมของดุริยางค์",
        "อุปกรณ์งานช่าง ดนตรี",
        ""
      ]

    case "สถานที่:ห้องหุ่นยนต์":
      return [
        "ห้องปฎิบัติการหุ่นยนต์",
        "อุปกรณ์ทางเทคโนโลยีหุ่นยนต์",
        ""
      ]

    case "สถานที่:ห้องICT":
      return [
        "ห้องเทคโนโลยี",
        "สำหรับการเรียนการสอนเทคโนโยี",
        ""
      ]

    case "สถานที่:หอเกียรติยศ":
      return [
        "จุดเยี่ยมชมผลงานของโรงเรียน",
        "พิพิฒภัณฑ์ ประวัติของโรงเรียน",
        ""
      ]

    


//----------------------------------------------------------------------------------------------------------
    default:
      return [
        "ไม่พบสถานที่ที่ระบุ",
        "อาจเป็นเพราะพื่้นที่นั้นยังไม่ได้ถูกเพิ่มลงในระบบ",
        "แจ้งปัญหาหากจำเป็น",
      ]
  }
}

let cellular = document.getElementById("cell")
let net = document.getElementById("net")
let color = NaN

async function checkInternet(){
  let start = Date.now()

  try{
    await fetch("https://www.google.com", {mode:"no-cors"})
    let end = Date.now()
    let ping = end - start

    //console.log("Ping:", ping, "ms")

    if(ping < 100){
      return ["|||","ดีมาก","lightgreen"]
    }else if(ping < 300){
      return ["||","พอใช้","limegreen"]
    }else{
      return ["|","ช้า","red"]
    }

  }catch(err){
    return ["*","ไม่มีเน็ต","red"]
  }
}

setInterval(async () => {
  [cellular.innerText, net.innerText, color] = await checkInternet();
  cellular.style.color = color
}, 1000);


//---------------------------------------------------------------------------------------------------------/

let infobut1 = document.getElementById("infobut1")
let infobut2 = document.getElementById("infobut2")

let infochoicetoggle = 1;

let theimg = document.getElementById("theimg")
let theinfo = document.getElementById("theinfo")
let info1 = document.getElementById("info1")

let fortravel = document.getElementById("fortravel")
let travelinfo = document.getElementById("travelinfo")
let traveldist = document.getElementById("traveldist")

function getLocation() {

  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(

      position => {

        resolve([
          position.coords.latitude,
          position.coords.longitude
        ]);

      },

      error => reject(error)

    );

  });

}

function distance_between_places(lat , lon ,place2) {
  if(Placecoords[place2]){
    let lat2 = (Placecoords[place2].minlat + Placecoords[place2].maxlat) / 2
    let lon2 = (Placecoords[place2].minlon + Placecoords[place2].maxlon) / 2

    const R = 6371;
    
    let dlat = deg2rad(lat2 - lat);
    let dlon = deg2rad(lon2 - lon);

    let a =
      Math.sin(dlat / 2) * Math.sin(dlat / 2) +
      Math.cos(deg2rad(lat)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dlon / 2) * Math.sin(dlon / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let d = R * c;

    return d * 1000;

  }
  return null;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

infobut1.addEventListener("click", () => {
  infochoicetoggle = 1;
  infobut1.style.background = "linear-gradient(180deg, rgb(179, 221, 255), rgb(180, 122, 255))";
  infobut2.style.background = "white";
});

setInterval(() => {

  if(infochoicetoggle === 1){

    fortravel.style.opacity = "0";

    theimg.style.opacity = "1";

    theinfo.style = "width: 180px; height: 50px; bottom: 10px; left: 5px;"
    info1.style = "position: absolute; top: 20px; font-size: 11px;"

    let whereplace = describe.innerText
    info1.innerText = whereplace

    IMG_FOR_MAP(null,null);


  }
  else if(infochoicetoggle === -1){

    theimg.style.opacity = "0";
    
    if(searchActive === 1){
      theinfo.style.opacity = "0";

      fortravel.style.opacity = "1";
      travelinfo.innerText = `${input.value}`

      //--------------------------------

      async function GetDist() {

      let [lat1, lon1] = await getLocation();

      let dist = distance_between_places(lat1, lon1, input.value);
      traveldist.innerText = `ระยะทาง: ${dist.toFixed(2)} เมตร`

      } 

      GetDist();

      //--------------------------------

    }
    else {
      theinfo.style = "width: 180px; height: 40px; top: 80px;"
      info1.style = "position: absolute; top: 10px; font-size: 12px;"
      info1.innerText = "กรุณาค้นหาสถานที่ที่ต้องการก่อน"

      fortravel.style.opacity = "0";
    }
    
  }

}, 100);

infobut2.addEventListener("click", () => {
  infochoicetoggle = -1;
  infobut2.style.background = "linear-gradient(180deg, rgb(179, 221, 255), rgb(180, 122, 255))";
  infobut1.style.background = "white";
});
