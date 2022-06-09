document.addEventListener("DOMContentLoaded", function(event) {

  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;
  var page = document.querySelector("html");
  var eyes = document.querySelector(".eyes");

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };

  page.addEventListener("mouseleave", function() {
    // highlight the mouseout target
    eyes.classList.add("orange");

    // reset the color after a short delay
    setTimeout(function() {
      eyes.target.style.color = "";
    }, 500);
  }, false);

  page.addEventListener("mouseenter", function() {
    // highlight the mouseout target
    eyes.classList.remove("orange");

    // reset the color after a short delay
    setTimeout(function() {
      eyes.target.style.color = "";
    }, 500);
  }, false);

  // console.log("hi :)");

  let eyeBall = document.querySelector(".eyeball"),
      pupil = document.querySelector(".pupil"),
      eyeArea = eyeBall.getBoundingClientRect(),
      pupilArea = pupil.getBoundingClientRect(),
      R = 57,
      r = pupilArea.width/2,
      centerX = eyeArea.left + R,
      centerY = eyeArea.top + R;

  document.addEventListener("mousemove", (e)=>{
    let x = e.clientX - centerX,
        y = e.clientY - centerY,
        theta = Math.atan2(y,x),
        angle = theta*180/Math.PI + 360;
    
    
    pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
    pupil.style.transformOrigin = `${r +"px"} center`;
  });

  let eyeBallBis = document.querySelector(".eyeball-bis"),
      pupilBis = document.querySelector(".pupil-bis"),
      eyeAreaBis = eyeBallBis.getBoundingClientRect(),
      pupilAreaBis = pupilBis.getBoundingClientRect(),
      Rb = 57,
      rb = pupilAreaBis.width/2,
      centerXb = eyeAreaBis.left + Rb,
      centerYb = eyeAreaBis.top + Rb;

  document.addEventListener("mousemove", (e)=>{
    let xb = e.clientX - centerXb,
        yb = e.clientY - centerYb,
        thetab = Math.atan2(yb,xb),
        angleb = thetab*180/Math.PI + 360;
    
    
    pupilBis.style.transform = `translateX(${Rb - rb +"px"}) rotate(${angleb + "deg"})`;
    pupilBis.style.transformOrigin = `${rb +"px"} center`;
  });



});

