d3.json('../data/viz_coordinates.json').then(
  dataset => {
  // put any function here
   createHeatmap(dataset)
 })
.catch(error => console.log(error));


// chart setting
const chart_heatmap = {
  'height' : 90,
  'width' : 230
}


function createHeatmap (data){
    console.log(data)

    // const x_array = data.map(d=>d.x)
    // const y_array = data.map(d=>d.y)

    const xScale = d3.scaleLinear()
        .domain([0,22])
        .range([0,chart_heatmap.width])
    
    const yScale = d3.scaleLinear()
        .domain([-1,8])
        .range([chart_heatmap.height,0])

    const colorScale = d3.scaleOrdinal()
                        .domain([-1,8])
                        .range(d3.schemeOrRd[9])
    


    function fill_color (d){

        if (d.alphabet===1){
            return colorScale(d.y)
        } else {
            return 'blue'
        }
    }

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
        .attr('fill', d => fill_color(d))
        .attr('width',xScale(1)-xScale(0))
        .attr('height',yScale(0)-yScale(1))
        // .attr('rx',0.5)
        // .attr('ry',0.5)

        .attr('stroke','white')
        .attr('stroke-width',0.5)


    console.log(colorScale(1))
    console.log(colorScale(2))

    }



