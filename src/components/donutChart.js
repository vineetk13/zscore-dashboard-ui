import * as d3 from 'd3';
export function donutChart(){
var data = [
    {month: 3, count: 17, amount: 15, color: '#6ab04c'},
    {month: 2, count: 47, amount: 41, color: '#D63031'},
    {month: 1, count: 35, amount: 31, color: '#F3B431'},
  ];
  var totalCount = 87;		//calcuting total manually
  
  var width = 350,
  height = 350,
  radius = 150;

  var arc = d3.arc()
              .outerRadius(radius + 5)
              .innerRadius(radius - 5)
              .cornerRadius(10);

  var pie = d3.pie()
              .sort(null)
              .value(function(d) {
                  return d.count;
              });

  var svg = d3.select('#donut').append("svg")
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
  .on("mouseover",function(d,i){
      console.log(d3.select(this));
      d3.select(this)
          .attr("d",d3.arc()
          .outerRadius(radius+10)
          .innerRadius(radius-10).cornerRadius(10))
      //totalCount = d.data.amount;
      d3.selectAll(".total").text("$"+d.data.amount+"m");
  })
  .on("mouseout",function(d,i){
      d3.select(this).attr("opacity","1")
                      .attr("d",d3.arc()
                      .outerRadius(radius + 5)
                      .innerRadius(radius - 5).cornerRadius(10))
      
      d3.selectAll(".total").text("$"+totalCount+"m");
  });

 
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
      .text("$"+totalCount+"m");
  label.append("text")
      .attr("text-anchor","middle")
      .text("^5%")
      .attr('font-size', '2em')
      .attr('y', 50)
      .attr('fill','#D63031')
      .attr('font-weight','bold')
  label.append("text")
      .attr("text-anchor","middle")
      .text("From last month")
      .attr('font-size', '1.5em')
      .attr('y', 80)
      .attr("fill","grey")
}