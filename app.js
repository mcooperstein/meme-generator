let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, ctx;

function generateMeme(img, topText, bottomText) {
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);

    var fontSize = canvas.width / 15;
    ctx.font = fontSize + "px monospace";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = fontSize / 15;
    ctx.textAlign = "center";

    ctx.textBaseline = "top";
    ctx.fillText(topText, canvas.width / 2, 0, canvas.width);
    ctx.strokeText(topText, canvas.width / 2, 0, canvas.width);

    ctx.textBaseline = "bottom";
    ctx.fillText(bottomText, canvas.width / 2, canvas.height, canvas.width);
    ctx.strokeText(bottomText, canvas.width / 2, canvas.height, canvas.width);
}

function init() {
    // Initialize variables
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');

    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    generateBtn.addEventListener('click', function () {
        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, bottomTextInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });

}

init();
