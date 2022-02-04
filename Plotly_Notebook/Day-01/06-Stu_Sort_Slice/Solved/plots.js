// Sort the data by Greek search results
var sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
slicedData = sortedByGreekSearch.slice(0, 10);
console.log(slicedData)
// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();
console.log(reversedData)
// Trace1 for the Greek Data
var trace1 = {
  x: reversedData.map(data => data.greekSearchResults),
  y: reversedData.map(data => data.greekName),
  text: reversedData.map(data => data.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
