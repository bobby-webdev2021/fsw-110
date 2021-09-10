let box = document.getElementsByClassName("red-box");
let Arr = Array.from(box);
let BoxCoord = Arr[0];

BoxCoord.addEventListener("mousemove", function(e) {
    BoxCoord.textContent = "Mouse coords: X=" + e.clientX + " / Y=" + e.clientY;
});

BoxCoord.addEventListener("mouseout", function() {
    BoxCoord.textContent = "";
});
