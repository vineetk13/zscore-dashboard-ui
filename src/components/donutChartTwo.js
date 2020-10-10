import * as d3 from 'd3';
import { customEvent } from 'd3-selection'
import {selection, select} from "d3-selection";
export function donutChartTwo(){
var data = [
    {month: 3, count: 17, amount: 15, color: '#74B9FF'},
  ];
  var totalCount = 112;		//calcuting total manually
  
  var width = 350,
  height = 350,
  radius = 150;

  var arc = d3.arc()
              .outerRadius(radius + 5)
              .innerRadius(radius - 5)
              .startAngle(0)
              .endAngle(5)
              .cornerRadius(10);

  var pie = d3.pie()
              .sort(null)
              .value(function(d) {
                  return d.count;
              });

  var svg = d3.select('#donutTwo').append("svg")
              .attr("width", width)
              .attr("height", height)
              .append("g")
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g");    

     g.append("path")
  .attr("d", arc)
    .style("fill", function(d,i) {
        return d.data.color;
  })
 
      
  var  label = svg.append("g")
  label.append("text")
      .attr("text-anchor","middle")
      .text("Currently")
      .attr('font-size', '2em')
      .attr('y', -50)
      .attr("fill","grey")
  label.append("text").attr("class","total")
      .attr("text-anchor", "middle")
      .attr('font-size', '3em')
      .attr('y', 0)
      .text("$"+data[0].amount+"m");
  label.append("text")
      .attr("text-anchor","middle")
      .text("^5")
      .attr('font-size', '2em')
      .attr('y', 50)
      .attr('fill','#25CCF7')
      .attr('font-weight','bold')
  label.append("text")
      .attr("text-anchor","middle")
      .text("From last month")
      .attr('font-size', '1.5em')
      .attr('y', 80)
      .attr("fill","grey")
}