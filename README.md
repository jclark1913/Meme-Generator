# Meme-Generator

1. Github links

Github repo: https://github.com/jclark1913/Meme-Generator

2. Usage

- Upload an image file or input a URL
- Adjust settings in editor
- Press "Save meme" to store it on the page
- Hover over saved memes a press "DELETE" to remove a meme

Test images:
"Distracted Boyfriend": https://imgflip.com/s/meme/Distracted-Boyfriend.jpg
"Mocking Spongbob": https://imgflip.com/s/meme/Mocking-Spongebob.jpg


3. Known issues

- Does not currently work on mobile
- The inputs do not clear when a form is submitted as requested in the prompt. However, I've attached a reset button that returns all values within a the <form> element to their defaults. I overlooked that requirement - I'll try to follow the prompts more closely in the future.
- The shadow on the font is a bit ugly, I should find a better solution.
- Broken & small images: Putting a broken link or a tiny image can look strange.
- Stylesheet organization leaves a bit to be desired.

4. Possible future additions:

- Picture fit + scaling: Adding a handful of options that would affect the overflow and sizing of memes.
- Screenshot function: Currently, the save button clones the image container and its children. In the future, it would be nice to use the html2canvas library to take snapshots of the image container and send it to the saved memes area. This would make the page scale a bit better and also make it easy to download saved memes.
- Limit max # of saved memes to something reasonable (10-15?)
