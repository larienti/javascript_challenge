// import data
var tableData = data;
var button = d3.select("#filter-button");
var selection = d3.select("form");

//runEnter when form submitted65
button.on("click", formSubmission);
selection.on("submit", formSubmission);

// select html elements tbody, table

var tbody= d3.select("tbody");
var table= d3.select("table");

//format data.js
tableData.forEach((i) => {
    var currentRow = tbody.append('tr');
    Object.entries(i).forEach(([k,v]) => 
    {
        var currentEntry = currentRow.append('td');
        currentEntry.text(v);
    });
});

function formSubmission() {
    d3.event.preventDefault();
    //select and output data
    var inputDate = d3.select('#datetime').property('value');
    var filteredData = tableData.filter(r => r.datetime === inputDate);
    //console.log(filteredData);
    // empty tbody tag opening, iterate data
    tbody.html("");
    filteredData.forEach((i) => 
    {
        var rowX = tbody.append('tr');
        Object.entries(i).forEach(([k,v]) => 
        {
            var cell = rowX.append('td');
            cell.text(v);
        });
    });
}