// This code is to enable selection of color
var colorPicker = document.getElementById("colorPicker");

// This code is to enable selection of grid size
var sizePicker = document.getElementById("sizePicker");
var boxHeight = document.getElementById("inputHeight").value;
var boxWidth = document.getElementById("inputWidth").value;

// This code is to dynamically create a new grid  
// based on user selection and enable interactive
// pixel art work based on selected color
function makeGrid(rows, cols) {
    var colorPicker = document.getElementById("colorPicker");
    var canvas = document.getElementById("pixelCanvas");
    console.log("Dimensions: " + rows + "," + cols);
    for (var r = 0; r < rows; r++) {
        var row = canvas.insertRow(r);
        for (var c = 0; c < cols; c++) {
            var cell = row.insertCell(c);
            cell.addEventListener("click", e => {
                e.target.style.background = colorPicker.value;
            });
        };
    };
};

// This code is to generate a new clear grid
// based on user selection
function formSubmit(event) {
    event.preventDefault();
    var canvas = document.getElementById("pixelCanvas");
    canvas.innerHTML = "";
    var boxHeight = document.getElementById("inputHeight").value;
    var boxWidth = document.getElementById("inputWidth").value;
    makeGrid(boxHeight, boxWidth);
};

makeGrid(boxHeight, boxWidth);
