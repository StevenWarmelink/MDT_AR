1) Ga naar https://editor.p5js.org/
2) Maak een account aan (rechtsboven). Dit kan met een 10-minute emailadres als je je eigen niet wilt gebruiken
3) Log in, en ga naar de editor (zie stap 1).
4) Druk op '>' in de linkerbar om de huidige bestanden te kunnen zien.
5) Vervang de inhoud van index.html en sketch.js met die van github, en upload de 2 .png bestanden
6) Kijk nu naar de facemesh afbeelding (https://github.com/tensorflow/tfjs-models/blob/master/face-landmarks-detection/mesh_map.jpg en zoom heel ver in); deze bevat de indices van de keypoints.
  > Het getal is de positie in de lijst, en als je die opzoekt krijg je het x- en y-coordinaat terug 
    van waar het computer vision model een gezicht heeft gedetecteerd. 
7> Wil je dat er iets gebeurt als iemand bijvoorbeeld zijn of haar mond open doet? Of gewoon standaard een afbeelding eroverheen mappen? Probeer iets te laten gebeuren als iemand zoiets doet, bijvoorbeeld printen naar de console (console.log('hallo!'); of de afbeelding veranderen.   

\[Optioneel\]: Je kunt ook de facemesh afbeelding gebruiken als basis om een ander gezicht (of attribuut) te maken, in bijvoorbeeld photoshop / photopea.
\[Optioneel\]: Ook kun je in theorie audio afspelen
  >   sound = loadSound('alarm.mp3');  
  >   sound.play();
  >   sound.stop();