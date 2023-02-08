//---- Image selection

// Add through URL

const inputURL = document.querySelector("#url-input");
const addImageButtonURL = document.querySelector("#add-image-url-button");
const currentImage = document.querySelector("#current-image");

addImageButtonURL.addEventListener("click", function (e) {
  e.preventDefault();
  currentImage.src = inputURL.value;
});

// Upload image

const inputFile = document.querySelector("#file-input");
const addImageButtonFile = document.querySelector("#add-image-file-button");
let imageFileURL;
let imageFile;

inputFile.addEventListener("change", function () {
  imageFile = this.files[0];
  imageFileURL = URL.createObjectURL(imageFile);
});

addImageButtonFile.addEventListener("click", function () {
  currentImage.src = imageFileURL;
});

//----Top text editing

// TOP - Change content
const topTextInput = document.querySelector("#text-input-top");
const topTextBox = document.querySelector(".top-text-box");

topTextInput.addEventListener("input", function (e) {
  topTextBox.textContent = topTextInput.value;
});

// TOP - Change font size

const topFontSizeSlider = document.querySelector("#top-text-size");
const topFontSizeDisplay = document.querySelector("#top-font-size-value");

topFontSizeSlider.addEventListener("input", function () {
  topTextBox.style.fontSize = topFontSizeSlider.value + "px";
  topFontSizeDisplay.textContent = topFontSizeSlider.value + "px";
});

// TOP - Change offset

const topOffsetSlider = document.querySelector("#top-text-offset");
const topOffsetDisplay = document.querySelector("#top-offset-value");

topOffsetSlider.addEventListener("input", function () {
  topTextBox.style.top = topOffsetSlider.value + "px";
  topOffsetDisplay.textContent = topOffsetSlider.value + "px";
});


//----Bottom text editing

// BOTTOM - Change content

const bottomTextInput = document.querySelector("#text-input-bottom");
const bottomTextBox = document.querySelector(".bottom-text-box");

bottomTextInput.addEventListener("input", function () {
  bottomTextBox.textContent = bottomTextInput.value;
});

// BOTTOM - Change font size

const bottomFontSizeSlider = document.querySelector("#bottom-text-size");
const bottomFontSizeDisplay = document.querySelector("#bottom-font-size-value");

bottomFontSizeSlider.addEventListener("input", function () {
  bottomTextBox.style.fontSize = bottomFontSizeSlider.value + "px";
  bottomFontSizeDisplay.textContent = bottomFontSizeSlider.value + "px";
});

// BOTTOM - Change offset

const bottomOffsetSlider = document.querySelector("#bottom-text-offset");
const bottomOffsetDisplay = document.querySelector("#bottom-offset-value");

bottomOffsetSlider.addEventListener("input", function () {
  bottomTextBox.style.bottom = bottomOffsetSlider.value + "px";
  bottomOffsetDisplay.textContent = bottomOffsetSlider.value + "px";
});

//----Reset button

const resetButton = document.querySelector("#clear-canvas-button");
const editorForm = document.querySelector("#editor-form");

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  editorForm.reset();
  currentImage.src = "./images/placeholder.jpg"
  const formElements = document.querySelector("#editor-form").elements;
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].dispatchEvent(new Event("input"));
  }
  topTextBox.textContent = "TOP TEXT";
  bottomTextBox.textContent = "BOTTOM TEXT";
})

//----Save system


// Save button (create clone)

const saveMemeButton = document.querySelector("#save-meme-button");
const memeBank = document.querySelector(".memes-container");
const placeholderText = document.querySelector("#meme-text-placeholder");
let memeCounter = 0;

saveMemeButton.addEventListener("click", function (e) {
  e.preventDefault();
  memeCounter++;
  modifyPlaceholderText();
  const original = document.querySelector(".image-container");
  const copy = original.cloneNode(true);
  memeBank.appendChild(copy);
  copy.classList.add("saved-meme");
  addDeleteButton(copy)
});

// Add/remove placholder text

function modifyPlaceholderText() {
  if (memeCounter > 0) {
    placeholderText.style.display = "none";
  } else {
    placeholderText.style.display = "block";
  }
};

// Delete function

const deleteButton = document.createElement("button");
deleteButton.innerHtml = "DELETE";
deleteButton.textContent = "DELETE MEME";
deleteButton.classList.add("deleteButton");

// Add delete button + functionality to all clones
function addDeleteButton(element) {
  const copiedDeleteButton = deleteButton.cloneNode(true);
  element.appendChild(copiedDeleteButton);
  copiedDeleteButton.addEventListener("click", function() {
    this.parentElement.remove();
    memeCounter--;
    modifyPlaceholderText();
  })
}