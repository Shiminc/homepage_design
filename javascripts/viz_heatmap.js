import {chart_heatmap, xScale, yScale, colorScale, initiatiateColor} from './globalVar.js'

// initiatiateColor();


function createHeatmap (data){
 


    const svg = d3.select('#heat_map')
        .append('svg')
            .attr('viewBox',`0 0 ${chart_heatmap.width} ${chart_heatmap.height}`)
            .style('border','1px solid black');
    console.log('this is svg')
    console.log(svg)


    const data_base = svg
    .selectAll('g')
      .data(data)
      .join('g')


    const square = data_base.append('rect')
        .attr('x',d=>xScale(d.x))
        .attr('y',d=>yScale(d.y))
        // .attr('fill', d => fill_color(d))
        .attr('fill', d => d.alphabet == 1 ? colorScale(d.y) : 'skyblue')
        .attr('width',xScale(1)-xScale(0))
        .attr('height',yScale(0)-yScale(1))
        // .attr('rx',0.5)
        // .attr('ry',0.5)

        .attr('stroke','white')
        .attr('stroke-width',0.5)
    }






d3.json('../data/viz_coordinates.json').then(
  dataset => {
  // put any function here
   createHeatmap(dataset)
 })
.catch(error => console.log(error));