var dataset = [5, 10, 15, 20, 25];

var b = d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) { return "I can count up to " + d; });
b.style("color", function(d) {
    if (d > 15) { //Threshold of 15
        return "red";
    } else {
        return "black";
    }
});

console.log(d3.selectAll("p"))