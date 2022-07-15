// document.addEventListener("resize", changeLocation);

// function changeLocation(element, prop) {
//   // Get width and height of the window excluding scrollbars
//   let ele = document.getElementById("main");
//   let val = ele.offsetLeft;
//   console.log(val);

//   // Display result inside a div element
//   ele.style.left = val + "px";
// }
// document.addEventListener("click", closeAllSidebar());

// function closeAllSidebar() {
//   console.log("click");
//   let overlays = document.getElementsByClassName("overlay");
//   for (let i = 0; i < overlays.length; i++) {
//     overlays[i].style.width = "0%";
//   }
// }

function getPropValue(ele, prop) {
  let x = document.getElementById(ele)[prop];
  return x;
}

function openOverlay(id) {
  let element = document.getElementById(id);
  let prop = "left";
  let start_point = "offsetLeft";
  let w = "25%";

  if (id == "gary") {
    prop = "right";
    w = "20%";
  }
  start_location = getPropValue("main", start_point);

  element.style[prop] = start_location + "px";
  element.style.width = w;
}

function closeOverlay(id) {
  console.log("close" + id);
  document.getElementById(id).style.width = "0%";
}
