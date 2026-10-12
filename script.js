var b = document.getElementById("btn1");
if (b !== null) {
  b.addEventListener("click", function () {
    document.getElementById("heading1").textContent = "Welcome to the Swap Hub!";
  });
}

var b = document.getElementById("btn2");
if (b !== null) {
  b.addEventListener("click", function () {
    document.getElementById("card1").style.backgroundColor = "#e0f7fa";
  });
}

var b = document.getElementById("btn3");
if (b !== null) {
  b.addEventListener("click", function () {
    document.getElementById("bookssection").classList.toggle("hidden");
  });
}

var b = document.getElementById("btn1");
if (b !== null) {
  b.addEventListener("click", function () {
    var c = document.getElementById("card1");
    c.style.backgroundColor = "#e0f7fa";
    c.style.fontStyle = "italic";
  });
}

for (var i = 1; i <= 4; i++) {
  var rb = document.getElementById("button" + i);
  if (rb !== null) {
    rb.addEventListener("click", function () {
      this.textContent = "Request Sent";
      var pid = this.id.replace("button", "p");
      document.getElementById(pid).textContent = "Request submitted!";
    });
  }
}

var sb = document.getElementById("btn2");
if (sb !== null) {
  sb.addEventListener("click", function () {
    var input = document.getElementById("input1");
    var out = document.getElementById("output");
    var t = input.value;

    if (t === "") {
      out.textContent = "enter something first";
      out.style.color = "red";
    } else {
      out.textContent = "You searched for: " + t;
      out.style.color = "#3d5a80";
      input.value = "";
    }
  });
}

var b = document.getElementById("btn1");
if (b !== null) {
  b.addEventListener("click", function () {
    document.getElementById("heading1").style.fontSize = "28px";
  });
}

var b = document.getElementById("btn2");
if (b !== null) {
  b.addEventListener("click", function () {
    document.getElementById("form1").classList.toggle("hidden");
  });
}

var f = document.getElementById("form1");
if (f !== null) {
  f.addEventListener("submit", function (event) {
    event.preventDefault();

    var n = document.getElementById("name").value;
    var t = document.getElementById("title").value;
    var a = document.getElementById("author").value;
    var s = document.getElementById("subject").value;
    var c = document.getElementById("condition").value;

    var msg = document.getElementById("msg");

    if (n === "" || t === "" || a === "" || s === "" || c === "") {
      msg.textContent = "Please fill in all fields";
      msg.className = "red";
    } else {
      msg.textContent = "Thanks " + n + ", your book " + t + " is now on exchange!";
      msg.className = "green";
      f.reset();
    }
  });
}
