// RISO

var risoImagePaths = [
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-1.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-2.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-3.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-4.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-5.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-6.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-7.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-8.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-9.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-10.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-11.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-12.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-13.jpg"
      text: "Scans from book"
    },
    {
      path: "/Archive/Images/Content/Riso/ErikMerisalu-Archive-Riso-14.jpg"
      text: "Scans from book"
    }
];

var container = document.getElementById("feed");

for (var i = 0; i < risoImagePaths.length; i++) {
  var div = document.createElement("div");
  div.className = "article";

  var img = document.createElement("img");
  img.src = risoImagePaths[i].path;

  if (i === 0) {
    div.id = "preface";
  }

  div.appendChild(img);
  container.appendChild(div);
}