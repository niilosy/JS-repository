document.write("<cite><strong>\"If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax.\"</strong><br>-- Abraham Lincoln</cite>")

function repeat() {
    var text = "This is a repeated line of text.";
    for (var i = 0; i < 50; i++) {
        document.write(text + "<br>");
    }
}

repeat();

let browser = navigator.userAgent
if ( browser.indexOf("Mozilla") >= 0){
location.href = "mozilla.org"}

function student() {
    var message = confirm("Are you a student?") ? "Welcome student" : "Sorry, this page is for students only";
    document.write = message;
}

student ()

var images =[
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ];

let luku = Math.floor(Math.random() *3);
document.write("<img src='"+images[luku] +"'>")

