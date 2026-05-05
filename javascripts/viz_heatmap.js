



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
                        .domain([0,8])
                        .range(d3.schemeOranges[9]);
    
    
    console.log('0',colorScale(0))
    console.log('1',colorScale(1))
    console.log('2',colorScale(2))
    console.log('3',colorScale(3))
    console.log('4',colorScale(4))
    console.log('5',colorScale(5))
    console.log('6',colorScale(6))
    console.log('7',colorScale(7))
    console.log('8',colorScale(8))

    
    // function fill_color (d){

    //     if (d.alphabet===1){
    //         console.log(d.y)
    //         console.log(colorScale(d.y))
    //         return colorScale(d.y)
    //     } else {
    //         return 'skyblue'
    //     }
    // }

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