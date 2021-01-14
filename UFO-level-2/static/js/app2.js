var tableData = data;
var button = d3.select("#filter-btn");
button.on("click",runEnter);

function runEnter()
{
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    var filteredData = tableData.filter(aliensight => aliensight.datetime === inputDate);
    console.log(filteredData);

    var tbody = d3.select("tbody");
    tbody.html("");

    if (filteredData.length >0){
        filteredData.forEach(entry => {
            var row = tbody.append("tr");
            row.append("td").text(entry.datetime);
        });

    }
    else{
    var row = tbody.append("h1").text("No data found");
    }
};