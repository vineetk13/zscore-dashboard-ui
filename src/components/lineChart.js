
import * as d3 from 'd3';

export function lineChart(){
    var data = [{
        "data": 128,
        "error": 80,
        "date": "08/03/2020"
        }, {
        "data": 330,
        "error": 33,
        "date": "15/03/2020"
        }, {
        "data": 110,
        "error": 22,
        "date": "29/02/2020"
        }, {
        "data": 323,
        "error": 155,
        "date": "20/03/2020"
        }, {
        "data": 200,
        "error": 99,
        "date": "13/03/2020"
        }, {
        "data": 250,
        "error": 109,
        "date": "11/03/2020"
        }, {
        "data": 252,
        "error": 89,
        "date": "14/03/2020"
        }, {
        "data": 112,
        "error": 141,
        "date": "06/03/2020"
        }, {
        "data": 302,
        "error": 136,
        "date": "04/03/2020"
        }, {
        "data": 268,
        "error": 25,
        "date": "10/03/2020"
        }, {
        "data": 250,
        "error": 74,
        "date": "16/03/2020"
        }, {
        "data": 150,
        "error": 277,
        "date": "19/03/2020"
        }, {
        "data": 160,
        "error": 117,
        "date": "03/03/2020"
        }, {
        "data": 212,
        "error": 36,
        "date": "02/03/2020"
        }, {
        "data": 123,
        "error": 242,
        "date": "18/03/2020"
        }, {
        "data": 123,
        "error": 130,
        "date": "01/03/2020"
        }, {
        "data": 247,
        "error": 50,
        "date": "05/03/2020"
        }, {
        "data": 153,
        "error": 50,
        "date": "17/03/2020"
        }, {
        "data": 149,
        "error": 100,
        "date": "09/03/2020"
        }]

  
    var margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    }

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);


    //format the data
    data.forEach(function (d) {
        var parseDate = d3.timeParse("%d/%m/%Y");
        d.date = parseDate(d.date);
    });
    //sort the data by date so the trend line makes sense
    data.sort(function (a, b) {
        return a.date - b.date;
    });

    var width = window.innerWidth-300;
    var  height = 250;
    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);


    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, 500]);
  
    var dataline = d3.line()
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y(function (d) {
                        return y(d.data);
                    }).curve(d3.curveLinear);
    var errorline = d3.line()
                    .x(function (d) {
                        return x(d.date);
                    })
                    .y(function (d) {
                        return y(d.error);
                    }).curve(d3.curveLinear)
                   

    var svg = d3.select("#lineChart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

  
    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", errorline)
        .attr("stroke", "#A4B0BD")
        .attr("stroke-width", 2)
        .attr("fill","none");
      

    svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", dataline)
        .attr("stroke", "#3498DB")
        .attr("stroke-width", 2)
        .attr("fill","none");
        
    var path2 = svg.selectAll("dot")
                    .data(data)
                    .enter().append("circle")
                    .attr("r", 5)
                    .attr("cx", function (d) {
                        return x(d.date);
                    })
                    .attr("cy", function (d) {
                        return y(d.error);
                    })
                    .attr("stroke", "#A4B0BD")
                    .attr("stroke-width", 1.5)
                    .attr("fill", "#FFFFFF");
    var path = svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("cx", function (d) {
            return x(d.date);
        })
        .attr("cy", function (d) {
            return y(d.data);
        })
        .attr("stroke", "#3498DB")
        .attr("stroke-width", 1.5)
        .attr("fill", "#FFFFFF")
        .on('mouseover', function (d, i) {
            d3.select(this).transition()
                .duration('100')
                .attr("r", 7)
                .attr("fill","#3498DB");
            div.transition()
                .duration(100)
                .style("opacity", 1);
            var formatter = d3.timeFormat("%b %d, %Y");
            div.html("<h5>" + formatter(d.date)+"</h5><h4>"+d.data+"</h4><p>Incoming data</p><h4>"+d.error+"</h4><p>Data errors</p>")
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 200) + "px");
        })
        .on('mouseout', function (d, i) {
            d3.select(this).transition()
                .duration('200')
                .attr("r", 5)
                .attr("fill", "#FFFFFF")
            div.transition()
                .duration('200')
                .style("opacity", 0);
        });

    
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d")));
    

    svg.append("g")
        .call(d3.axisLeft(y).tickFormat(function (d) {
            return d;
        }).ticks(5));
}