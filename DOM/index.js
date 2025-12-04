//Mouse Events
//click

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Button clicked!");
});


//double click

document.getElementById("dblDiv").addEventListener("dblclick", () => {
  alert("Div double clicked!");
});

//mouseover / mouseout

const hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", () => {
  hoverDiv.style.background = "green";
});

hoverDiv.addEventListener("mouseout", () => {
  hoverDiv.style.background = "gray";
});

//Form Events
//submit

document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted!");
});


//change

document.getElementById("mySelect").addEventListener("change", (e) => {
  alert(`Selected: ${e.target.value}`);
});

