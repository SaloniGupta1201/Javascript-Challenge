// from data.js
var tableData = data;
//console.log(data);

// Inspect and find the input date and select the button
var button = d3.select("#filter-btn");

//Global Table Body
const tableBody = d3.select("tbody");

// Create function, which builds the table with provided data
function UFObuildTable(tableData) {
    //Clear all previous data from UFO table
    tableBody.html("");
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

button.on("click", function() {
    //prevent page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node and property
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");
    console.log(`Date: ${dateInput}, City: ${cityInput}, State: ${stateInput}, Country: ${countryInput}, Shape: ${shapeInput}`);
    
    filteredData = tableData;

    if (dateInput !=""){
        filteredData = filteredData.filter(sighting => sighting.datetime === dateInput);
        console.log(filteredData);
    }
    if (cityInput !=""){
        filteredData = filteredData.filter(sighting => sighting.city === cityInput);
        console.log(filteredData);
    }

    if (stateInput !=""){
        filteredData = filteredData.filter(sighting => sighting.state === stateInput);
        console.log(filteredData);
    }

    if (countryInput !=""){
        filteredData = filteredData.filter(sighting => sighting.country === countryInput);
        console.log(filteredData);
    }

    if (shapeInput !=""){
        filteredData = filteredData.filter(sighting => sighting.shape === shapeInput);
        console.log(filteredData);
    }

   // Iterate through each UFO Sighting event, through all elements of data dictionary,
    // and build HTML UFO Sightings table
    if (filteredData.length >0){
        // Build new UFO Table with the filtered subset of UFO Sighting data
        UFObuildTable(filteredData);
    }
    else{
        var row = tbody.append("h1").text("No data found");
    }
  });