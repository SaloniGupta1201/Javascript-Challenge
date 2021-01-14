// from data.js
var tableData = data;
//console.log(data);

// Inspect and find the input date and select the button using d3
var button = d3.select("#filter-btn");

//Use d3 to select the table body
const tableBody = d3.select("tbody");

// Create function, which builds the table with provided data
function UFObuildTable(tableData) {
    //tableBody.html("");
    tableData.forEach(entry => {
    var row = tableBody.append("tr");
    row.append("td").text(entry.datetime);
    row.append("td").text(entry.city);
    row.append("td").text(entry.state);
    row.append("td").text(entry.country);
    row.append("td").text(entry.shape);
    row.append("td").text(entry.durationMinutes);
    row.append("td").text(entry.comments);
    });
}

// Initially build the UFO sighting table with all data from data.js
UFObuildTable(tableData);

// User clicks the button to filter data
button.on("click", function() {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node and property
    var dateInput = d3.select("#datetime").property("value");
    console.log(`Date: ${dateInput}`);
    
    //Filter the data based on the input
    filteredData = tableData.filter(aliensighting => aliensighting.datetime === dateInput);
    console.log(filteredData);
    
    //Clear all previous data from UFO table
    tableBody.html("");
    // Iterate through each UFO Sighting event, through all elements of data dictionary,
    // and build HTML UFO Sightings table
    if (filteredData.length >0){
        // Build new UFO Table with the filtered subset of UFO Sighting data
        UFObuildTable(filteredData);
    }
    else {
        var row = tableBody.append("h1").text("No data found");
    }

  });