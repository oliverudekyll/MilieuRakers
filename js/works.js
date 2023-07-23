var imagePaths = [
    {
        preview: "../Works/Images/1/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/2/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/3/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/4/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/5/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/6/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/7/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/8/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/9/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/10/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/11/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/12/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/13/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/14/Preview.jpg",
        hover: []
    },
    {
        preview: "../Works/Images/15/Preview.jpg",
        hover: ["../Works/Images/15/1.jpg","../Works/Images/15/2.jpg","../Works/Images/15/3.jpg"]
    },
    {
        preview: "../Works/Images/16/Preview.jpg",
        hover: ["../Works/Images/16/1.jpg","../Works/Images/16/2.jpg"]
    },
    {
        preview: "../Works/Images/17/Preview.jpg",
        hover: ["../Works/Images/17/1.jpg"]
    },
    {
        preview: "../Works/Images/18/Preview.jpg",
        hover: ["../Works/Images/18/1.jpg","../Works/Images/18/2.jpg"]
    },
    {
        preview: "../Works/Images/19/Preview.jpg",
        hover: ["../Works/Images/19/1.jpg"]
    },
    {
        preview: "../Works/Images/20/Preview.jpg",
        hover: ["../Works/Images/20/1.jpg"]
    },
    {
        preview: "../Works/Images/21/Preview.jpg",
        hover: ["../Works/Images/21/1.jpg"]
    },
    {
        preview: "../Works/Images/22/Preview.jpg",
        hover: ["../Works/Images/22/1.jpg","../Works/Images/22/2.jpg"]
    },
    {
        preview: "../Works/Images/23/Preview.jpg",
        hover: ["../Works/Images/23/1.jpg"]
    },
    {
        preview: "../Works/Images/24/Preview.jpg",
        hover: ["../Works/Images/24/1.jpg"]
    },
]

var imgContainer = document.getElementById("feed");

for (var i = 0; i < imagePaths.length; i++) {
    var imgDiv = document.createElement("div");
    imgDiv.className = "article";
  
    var img = document.createElement("img");
    img.src = imagePaths[i].preview;
    imgDiv.id = "id-" + i;
  
    imgDiv.appendChild(img);
    imgContainer.appendChild(imgDiv);
  }

  var displace = function() {
    for (var i = 0; i < imagePaths.length; i++) {
        var image = document.getElementById("id-" + i);

        var randomTranslateX = Math.floor(Math.random() * 20) - 10;
        var randomTranslateY = Math.floor(Math.random() * 50) - 25;

        if (image) {
            image.style.transform = `translate(${randomTranslateX}%, ${randomTranslateY}%)`;
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    displace();
});

var imageElements = document.querySelectorAll("#feed img");

function changeImageOnHover(index) {
  return function () {
    var image = imageElements[index];

    var hoverImages = imagePaths[index].hover;
    
    // Check if the hoverImages array is not empty
    if (hoverImages.length > 0) {
      var currentImageIndex = 0;

      function cycleImages() {
        image.src = hoverImages[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % hoverImages.length;
      }

      // Set an interval to cycle through the hover images on hover
      var interval = setInterval(cycleImages, 1000); // Change images every 500 milliseconds

      // Clear the interval when the mouse leaves the image
      image.addEventListener("mouseout", function () {
        clearInterval(interval);
        // Revert to the default image when the mouse leaves the image
        image.src = imagePaths[index].preview;
      });
    }
  };
}

// Add event listeners to each image for hover effect
for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener("mouseover", changeImageOnHover(i));
}