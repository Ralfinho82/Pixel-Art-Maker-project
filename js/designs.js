// definition and assignment of table variables necessary for creating the table
const tableHeight = document.getElementById('inputHeight');
const tableWidth = document.getElementById('inputWidth');
const tableSize = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

// color variable is defined and assigned
const color = document.getElementById('colorPicker');

/**
* values of Grid Height and Grid Width are received when submit button is clicked
* makeGrid function is called with values of tableHeight and tableWidth
*/
tableSize.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(tableHeight.value, tableWidth.value)
});

/**
* the table is created according to defined the defined height and width
* values of tableHeight and tableWidth are received by the function makeGrid
* the table is reset after pressing "submit"
* table lines & table cells are created
* background of table cells is colored with the selected color
*/
function makeGrid(tableHeight, tableWidth) {
    table.innerHTML = "";
    for (let y=0; y <tableHeight; y++) {
        let line = table.insertRow(y);
        for (let x=0; x <tableWidth; x++) {
            let cell = line.insertCell(x);
            cell.addEventListener('click',(event)=> {
                cell.style.backgroundColor = color.value;
            });
        };
    };

};
