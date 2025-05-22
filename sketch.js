// Gebaseerd op https://docs.ml5js.org/#/reference/facemesh?id=examples
let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipped: true };

let uvMapImage;
let uvMapImage2;
let current_image;
let triangulation;
let uvCoords;

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
  uvMapImage  = loadImage("nl_flag.png");
  uvMapImage2 = loadImage('mask.png');
  current_image = uvMapImage;
}

function setup() {
  setAttributes({ version: 1 })
  createCanvas(640, 480, WEBGL);
  // Create the webcam video and hide it
  video = createCapture({video: {facingMode: 'user', size: (640, 480)}, audio: false}, {flipped: true});
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
  // Get the Coordinates for the uv mapping
  triangulation = faceMesh.getTriangles();
  uvCoords = faceMesh.getUVCoords();
}

function draw() {
  translate(-width / 2, -height / 2);
  
  // Draw the webcam video
  image(video, 0, 0, width, height);

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

    texture(current_image);
    textureMode(NORMAL);
    beginShape(TRIANGLES);
    for (let i = 0; i < triangulation.length; i++) {
      let indexA = triangulation[i][0];
      let indexB = triangulation[i][1];
      let indexC = triangulation[i][2];
      let a = face.keypoints[indexA];
      let b = face.keypoints[indexB];
      let c = face.keypoints[indexC];
      const uvA = { x: uvCoords[indexA][0], y: uvCoords[indexA][1] };
      const uvB = { x: uvCoords[indexB][0], y: uvCoords[indexB][1] };
      const uvC = { x: uvCoords[indexC][0], y: uvCoords[indexC][1] };
      vertex(a.x, a.y, uvA.x, uvA.y);
      vertex(b.x, b.y, uvB.x, uvB.y);
      vertex(c.x, c.y, uvC.x, uvC.y);
      
      // face.keypoints bevat alle keypoints van het gedetecteerde 
      // gezicht, en elk keypoint bevat een x-waarde en een y-waarde.

      // Als de afstand tussen 2 van de keypoints meer is dan [waarde], 
      // verander dan iets! (Wat zijn interessante keypoints?)

      let point_1_x = face.keypoints[nummer].x;
      let point_1_y = face.keypoints[nummer].y;

      let point_1_x = face.keypoints[andernummer].x;
      let point_1_y = face.keypoints[andernummer].y;

      // Schrijf hier je code! Bijvoorbeeld of iemand zijn mond open 
      // heeft, of ogen dicht. 

    }
    endShape();
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}
