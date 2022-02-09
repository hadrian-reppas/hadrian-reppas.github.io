var slider = document.getElementById("myRange");
var text = document.getElementById("title");
var last = 117;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  document.getElementById('img' + last).style.display = "none";
  document.getElementById('img' + this.value).style.display = "block";
  let a = (1 <= this.value % 10) && (this.value % 10 <= 3)
  let b = (11 <= this.value % 100) && (this.value % 100 <= 13)
  let k = " Congress (" + (2*this.value + 1787) + "-" + (2*this.value + 1789) +  ")"
  var t = ""
  if(a && !b) {
    if(this.value % 10 == 1) {
      t = this.value + "st" + k;
    } else if(this.value % 10 == 2) {
      t = this.value + "nd" + k;
    } else {
      t = this.value + "rd" + k;
    }
  } else {
    t = this.value + "th" + k;
  }
  if(this.value < 10) {
    t = "  " + t;
  } else if(this.value < 100) {
    t = " " + t;
  }
  text.innerHTML = t;
  last = this.value;
}