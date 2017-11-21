// Select color input
const COLOR_PICKER = $('#colorPicker');
// Select size input
const TABLE = $('#pixel_canvas');
const FORM = $('#sizePicker');

let color;

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
    let height = $('#input_height').val();
    let width = $('#input_width').val();
    // Prevent default form submission behaviour
    event.preventDefault();
    // Empty the canvas before re-building
    TABLE.empty();
    // Build the grid
    for (let h = 0; h < height; h++) {
        TABLE.append('<tr>');
        for (let w = 0; w < width; w++) {
            TABLE.children().last().append('<td></td>');
        }
        TABLE.append('</tr>');
    }
}
FORM.submit(makeGrid);

// Set the color
COLOR_PICKER.change(function() {
    color = COLOR_PICKER.val();
});

// Manipulate the canvas
TABLE.on("click", "td", function() {
    if ($(this).attr("style") === undefined) {
        $(this).css("background-color", color);
    } else {
        $(this).attr("style", null);
    }
});
