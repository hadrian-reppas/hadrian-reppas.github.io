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
  if(a && !b) {
    if(this.value % 10 == 1) {
      text.innerHTML = this.value + "st" + k;
    } else if(this.value % 10 == 2) {
      text.innerHTML = this.value + "nd" + k;
    } else {
      text.innerHTML = this.value + "rd" + k;
    }
  } else {
    text.innerHTML = this.value + "th" + k;
  }
  if(this.value)
  last = this.value;
}