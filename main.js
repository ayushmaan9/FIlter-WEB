function setup()
{
canvas=createCanvas(800,800)
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tintc="";
}
function draw()
{
image(video,0,0,800,800);
tint(tintc);

}
function Apply_filter(){
tintc=document.getElementById("inpt").value;
}
function take_snapshot(){
save('img.png');


}