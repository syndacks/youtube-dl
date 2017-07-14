var ytdl = require("ytdl-core");
var fs = require("fs");

//itag === 43

var videosToDl =
[
{"Title":"Top 5 Whatsapp Funny Videos 2017","URL":"https://www.youtube.com/watch?v=RnF_mE7_kYI"},
{"Title":"India funny videos whatsapp","URL":"https://www.youtube.com/watch?v=5pXs3CSaggc"},
{"Title":"Monkey Vrs Dog","URL":"https://www.youtube.com/watch?v=gFsFfPxro40"},
{"Title":"Funny Cute Baby","URL":"https://www.youtube.com/watch?v=VEn8tEzk15s"},
{"Title":"Cutest Baby talk","URL":"https://www.youtube.com/watch?v=_UfFY6PSVu0"},
{"Title":"Cats dancing","URL":"https://www.youtube.com/watch?v=REVeqcS2aEU"},
{"Title":"Short Funny Videos","URL":"https://www.youtube.com/watch?v=-s1dK6-ZynQ"},
{"Title":"short but extremely funny","URL":"https://www.youtube.com/watch?v=SIzSC576o-s"},
{"Title":"Epic Fail Compilation","URL":"https://www.youtube.com/watch?v=djxXYqGV_RI"},
{"Title":"America Funniest Home Videos","URL":"https://www.youtube.com/watch?v=McdD9Ng4VnY"},
{"Title":"Top 10 Funny and Cute Dog Videos","URL":"https://www.youtube.com/watch?v=28xjtYY3V3Q"},
{"Title":"Cute Dogs And Adorable Babies","URL":"https://www.youtube.com/watch?v=ilMzs1UHEmw"},
{"Title":"Funniest DIY Home Improvement Fails","URL":"https://www.youtube.com/watch?v=heFCCiIgmqs"},
{"Title":"Funny Fails with sounds ","URL":"https://www.youtube.com/watch?v=IHEAu9qMNlA"}];

function youtube_download (video_obj) {
  console.log("video_obj: ", video_obj);
  ytdl(video_obj["URL"], {quality: 43})
  .on('error', function(error) {
    console.log('Error: ', error);
  })
  .pipe(fs.createWriteStream('./' + sanitizeName(video_obj['Title']) + '.webm' ));
}

function sanitizeName (name) {
  name = name.replace(/\s+/gi, '_'); // Replace white space with dash
  return name.replace(/[^a-zA-Z0-9\-]/gi, ''); // Strip any special character
}

function main () {
	videosToDl.map((video) => {
    youtube_download(video)
  });
}

main();
