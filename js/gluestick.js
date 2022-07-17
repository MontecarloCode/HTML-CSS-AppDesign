let show_actions = false;
let show_sign = false;
let show_chatStyles = false;

function getPropValue(ele, prop) {
  let x = document.getElementById(ele)[prop];
  return x;
}

function openOverlay(id) {
  closeDropDown("actions");
  let element = document.getElementById(id);
  // let prop = "left";
  let start_point = "offsetLeft";
  let w = "25%";

  if (id === "gary") {
    // prop = "right";
    w = "20%";
  }
  if (id === "actions") {
    // prop = "bottom";
    start_point = "offsetTop";
    w = "50px";
    h = "40vh";
  }
  if (id === "thanks") {
    // prop = "bottom";
    w = document.getElementById("main").offsetWidth + "px";
  }
  start_location = getPropValue("main", start_point);

  // element.style[prop] = start_location + "px";
  element.style.width = w;
}

function closeOverlay(id) {
  document.getElementById(id).style.width = "0%";
}

function toogle(id) {
  if (show_actions == false) show_sign == false;
  if (id == "actions") {
    show_actions = !show_actions;
    if (show_actions == true) openActions();
    else closeDropDown(id);
  }
  if (id == "sign") {
    show_sign = !show_sign;
    if (show_sign == true) openSign();
    else closeDropLeft(id);
  }
}

function openActions() {
  let prop = "bottom";
  let h = "60vh";
  let sh = screen.height;
  let base_element = "hand-bottom";
  let minus = getPropValue(base_element, "offsetHeight");
  let start_top = getPropValue(base_element, "offsetTop");
  let start_left = getPropValue(base_element, "offsetLeft");
  start_location_y = start_top + minus / 2;

  let element = document.getElementById("actions");
  element.style[prop] = sh - start_location_y + "px";
  element.style.left = start_left - 17 + "px";
  element.style.height = h;
}

function closeDropDown(id) {
  closeDropLeft("sign");
  document.getElementById(id).style.height = 0;
}

function openSign() {
  let prop = "left";
  let h = "40vh";
  let base_element = "actions";
  let start_top = getPropValue(base_element, "offsetTop");
  let start_left = getPropValue(base_element, "offsetLeft");
  let element = document.getElementById("sign");

  element.style[prop] = start_left + 60 + "px";
  element.style.top = start_top + 55 + "px";
  element.style.display = "block";
  element.style.height = h;
  element.style.width = "60px";
}

function closeDropLeft(id) {
  if (id == "sign") show_sign = false;
  document.getElementById(id).style.display = "none";
}

function toogleChatStyles(element) {
  let id = element.dataset.slave;
  if (id == "chat-styles") {
    show_chatStyles = !show_chatStyles;
    if (show_chatStyles == true) openChatStyles(element);
    else closeDropDown(id);
  }
}

function openChatStyles(element) {
  let prop = "bottom";
  let h = "33vh";
  let sh = screen.height;
  let start_top = element.offsetTop;
  let start_left = element.offsetLeft;
  start_point_y = start_top + element.offsetHeight / 2;
  let slave = element.dataset.slave;
  let ele = document.getElementById(slave);
  ele.style.width = 0;
  ele.style[prop] = sh - start_point_y + "px";
  ele.style.left = start_left + "px";
  ele.style.height = h;
  console.log(element.offsetWidth);
  ele.style.width = element.offsetWidth + "px";
}

function openThanks() {}