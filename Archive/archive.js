// RISO

var risoImagePaths = [
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-1.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-2.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-3.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-4.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-5.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-6.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-7.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-8.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-9.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-10.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-11.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-12.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-13.jpg",
    "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-14.jpg"
];

var container = document.getElementById("feed");

for (var i = 0; i < risoImagePaths.length; i++) {
  var div = document.createElement("div");
  div.className = "article";

  var img = document.createElement("img");
  img.src = risoImagePaths[i];

  div.appendChild(img);
  container.appendChild(div);
}