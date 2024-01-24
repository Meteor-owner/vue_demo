<template>
    <div class="house-analyze-container">
        <div class="box">
            <div class="header">
                <div class="total">
                    <div class="user">

                    </div>
                    <div class="houses">

                    </div>
                </div>
                <div class="circle">
                    <svg ref="svg"></svg>
                </div>
                <div class="visitor">

                </div>
            </div>
            <div class="mainer">
                <div class="facility-num">

                </div>
                <div class="type-num">

                </div>
                <div class="situation-num">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import * as d3 from 'd3';

export default {
    data() {
        return {
            userCount: 0,
            houseCount: 0,
            visitorCount: 0,
            houseInfo: [],
            houseList: {
                gz: 0,
                bj: 0,
                hz: 0,
                sh: 0,
                fz: 0,
                fs: 0,
                qd: 0,
                sz: 0,
                nj: 0,
            }

        }
    },
    methods: {
        getData() {
            axios.get('https://yapi.pro/mock/220305/houses').then((res) => {
                this.houseCount = res.data.data.length;
                // console.log('count: ', this.houseCount);
                this.houseInfo = res.data.data;
                // console.log(this.houseInfo[0]);
                this.houseInfo.forEach(house => {
                    switch (house.location) {
                        case '广州':
                            this.houseList.gz++;
                            break;
                        case '北京':
                            this.houseList.bj++;
                            break;
                        case '杭州':
                            this.houseList.hz++;
                            break;
                        case '上海':
                            this.houseList.sh++;
                            break;
                        case '福州':
                            this.houseList.fz++;
                            break;
                        case '佛山':
                            this.houseList.fs++;
                            break;
                        case '青岛':
                            this.houseList.qd++;
                            break;
                        case '深圳':
                            this.houseList.sz++;
                            break;
                        case '南京':
                            this.houseList.nj++;
                            break;
                    }
                });
                // console.log(this.houseList);
                this.chartData();
            }).catch((err) => {
                console.error(err);
            });
        },
        chartData() {
            const array = Object.keys(this.houseList).map(key => {
                return {
                    location: this.getFullCityName(key),
                    count: this.houseList[key]
                };
            });
            // console.log(array);
            this.drawChart(array);
        },
        getFullCityName(shortName) {
            const cityNames = {
                gz: '广州',
                bj: '北京',
                hz: '杭州',
                sh: '上海',
                fz: '福州',
                fs: '佛山',
                qd: '青岛',
                sz: '深圳',
                nj: '南京',
            };
            return cityNames[shortName] || shortName; // 如果没有映射，则返回原始缩写
        },
        drawChart(array) {
            const data = array; // 使用转换后的数据
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
                .range(["#9e7d81", "#c78f96"]); // 从浅色到深色

            arc.append('path')
                .attr('d', path)
                .attr('fill', d => color(d.data.count)); // 根据房源数量获取颜色


            // 可以添加文字标签等额外元素
        }
    },
    mounted() {
        this.getData()
    },
}
</script>

<style scoped>
.header {
    border: 1px solid #9e7d81;
    height: 100px;
    display: flex;
    justify-content: space-around;
    margin: auto;
}

.total {
    border: 1px solid #9e7d81;
}

.circle {
    border: 1px solid red;
}

.visitor {
    border: 1px solid #9e7d81;
}
</style>
