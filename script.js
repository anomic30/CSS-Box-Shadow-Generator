document.querySelectorAll('input').forEach(input=>{
    input.addEventListener('input',inputChanged)
})

function inputChanged(e){
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value
    )
}

var slider1 = document.getElementById("x-position");
var output1 = document.getElementById("x-value");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("y-position");
var output2 = document.getElementById("y-value");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("blur");
var output3 = document.getElementById("blur-value");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("spread");
var output4 = document.getElementById("spread-value");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}
