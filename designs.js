// Select color input
const colorPicker = $('#colorPicker');
// Select the grid
const pixelCanvas = $('#pixel_canvas');
// Select size input
const sizePicker = $('#sizePicker');

let color;

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    const height = $('#input_height').val();
    const width = $('#input_width').val();
    // Prevent default sizePicker submission behaviour
    event.preventDefault();
    // Empty the canvas before re-building
    pixelCanvas.empty();
    // Build the grid
    for (let h = 0; h < height; h++) {
        pixelCanvas.append('<tr>');
        for (let w = 0; w < width; w++) {
            pixelCanvas.children().last().append('<td></td>');
        }
        pixelCanvas.append('</tr>');
    }
}
sizePicker.submit(makeGrid);

// Set the color
colorPicker.change(function() {
    color = colorPicker.val();
});

// Manipulate the canvas
pixelCanvas.on("click", "td", function() {
    if ($(this).attr("style") === undefined) {
        $(this).css("background-color", color);
    } else {
        $(this).attr("style", null);
    }
});
