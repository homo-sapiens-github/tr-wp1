function showAnimation(){
  let laptop = document.querySelector("#laptop");
  let desktop = document.querySelector("#desktop");
  let mobile = document.querySelector("#mobile");
  let tablet = document.querySelector("#tablet");
  laptop.style.display="initial";
  desktop.style.display="initial";
  mobile.style.display="initial";
  tablet.style.display="initial";
}

//trigger animation when scroll in 
let waypoint = new Waypoint({
  element: document.getElementById('about-section'),
  offset: "85%",
  handler: function(direction) {
    showAnimation();
    destoryWaypoint();
  }
})
const destoryWaypoint = ()=>{
  waypoint.destroy();
  wapoint = undefined;
}