const video = document.querySelector('#video')
const constraints = {video: true}

function getScreen(){ navigator.mediaDevices.getDisplayMedia(constraints)
  .then(function(stream) {
    video.srcObject = stream
  })
  .catch(function(err) {
    console.log("Unable to get screen share because " + err)
  });
}
