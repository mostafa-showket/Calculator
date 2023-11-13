function Display(x) {
  document.getElementById("result").value += x;
  if ((document.getElementById("delete").style["display"] = "none")) {
    document.getElementById("clear").style["display"] = "none";
    document.getElementById("delete").style["display"] = "initial";
  }
}

function Delete() {
  var result = document.getElementById("result").value;
  document.getElementById("result").value = result.substring(
    0,
    result.length - 1
  );
}

function Clear() {
  document.getElementById("result").value = "";
  document.getElementById("process").value = "";
  document.getElementById("clear").style["display"] = "none";
  document.getElementById("delete").style["display"] = "initial";
}

function Calculate() {
  let process = document.getElementById("result");
  if (process.value.match(/^\d+(\.\d+)?([+\-*/%]\d+(\.\d+)?)*$/g)) {
    document.getElementById("process").value = process.value;
    process.value = eval(process.value);
    document.getElementById("delete").style["display"] = "none";
    document.getElementById("clear").style["display"] = "initial";
  } else {
    alert("Please enter valid operation...");
    Clear();
  }
}
