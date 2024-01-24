<template>
    <div class="location-pie-chart">
        <!-- D3.js 将在这个 div 中创建环形图 -->
        <svg ref="svg"></svg>
    </div>
</template>
  
<script>
import * as d3 from 'd3';

export default {
    name: 'LocationPieChart',
    props: {
        houseData: Array
    },
    mounted() {
        this.drawChart();
    },
    methods: {
        drawChart() {
            const data = this.chartData; // 使用转换后的数据
            console.log('data: ', data);
            const svg = d3.select(this.$refs.svg); // 选择SVG元素
            const width = 400; // 定义宽度和高度
            const height = 400;
            const radius = Math.min(width, height) / 2;

            svg.attr('width', width).attr('height', height);

            const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

            const pie = d3.pie().value(d => d.count);

            const path = d3.arc().outerRadius(radius - 10).innerRadius(0);

            const arc = g.selectAll('.arc')
                .data(pie(data))
                .enter().append('g')
                .attr('class', 'arc');

            const color = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.count)]) // 假设 d.count 是房源数量
                .range(["#ffeda0", "#f03b20"]); // 从浅色到深色

            arc.append('path')
                .attr('d', path)
                .attr('fill', d => color(d.data.count)); // 根据房源数量获取颜色


            // 可以添加文字标签等额外元素
        }
    },

};
</script>
  
<style scoped>
.location-pie-chart {
    /* 样式调整 */
}
</style>
  