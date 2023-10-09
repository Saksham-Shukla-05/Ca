var container = document.getElementById("cont-image");
var leftBtn = document.getElementById("left")
var rightBtn = document.getElementById("right")
var rightCount = 0
var Mytext = document.getElementById("cont-text")
var c1=document.getElementById("p1")
var c2=document.getElementById("p2")
var c3=document.getElementById("p3")
var c4=document.getElementById("p4")

  
  

Images = ["https://images.unsplash.com/photo-1696095092068-30d75117b0c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1696426678238-ba1c5a257bf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1695531332171-d2e0087dc263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
]

textArray = ["Beauty","A pumpkin","A Car","A Desert"]

function updateCircleBackgrounds() {
    const circleElements = document.querySelectorAll('.circle');
    circleElements.forEach((circle, index) => {
        if (index === rightCount) {
            circle.style.backgroundColor = 'black';
        } else {
            circle.style.backgroundColor = 'transparent';
        }
    });
}


Mytext.textContent=textArray[rightCount]
updateCircleBackgrounds()
rightBtn.addEventListener("click", function () {
    rightCount++;
    Mytext.textContent = textArray[rightCount];
    leftBtn.style.cursor = "auto";
    container.style.opacity = '0'; // Add this line to fade out the container
    container.style.backgroundImage = 'url("' + Images[rightCount] + '")';
    container.style.opacity = '1'; // Add this line to fade in the container
    updateCircleBackgrounds();
    console.log("right", rightCount);
    if (rightCount > 3) {
        rightCount = 0;
        container.style.backgroundImage = 'url("' + Images[rightCount] + '")';
        Mytext.textContent = textArray[rightCount];
        updateCircleBackgrounds();
    }
});

leftBtn.addEventListener("click", () => {
    rightCount = rightCount - 1;
    Mytext.textContent = textArray[rightCount];
    container.style.opacity = '0';
    container.style.backgroundImage = 'url("' + Images[rightCount] + '")';
    container.style.opacity = '1';
    updateCircleBackgrounds();
    console.log("right after left btn click", rightCount);
    if (rightCount < 0) {
        rightCount = 3;
        container.style.backgroundImage = 'url("' + Images[rightCount] + '")';
        Mytext.textContent = textArray[rightCount];
        updateCircleBackgrounds();
    }
});


