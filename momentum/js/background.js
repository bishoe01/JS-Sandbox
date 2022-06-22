const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`; //이걸 어떻게 index.html에 추가해줄까?

document.body.appendChild(bgImage); //body에 appendChild해주면 요소로 들어감
