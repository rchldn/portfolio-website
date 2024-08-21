const imageContainer = document.querySelector('#past-image');
const video = document.querySelector('#past-video');

imageContainer.addEventListener('mouseenter', () => {
  console.log('mouse entered');
  video.style.display = 'block';
  video.play();
});

imageContainer.addEventListener('mouseleave', () => {
  console.log('mouse left');
  video.pause();
  video.style.display = 'none';
});

console.log('i am communicating');
console.log(video.src); // Check if the src attribute is correct
console.log(video.error); // Check if there's an error with the video
