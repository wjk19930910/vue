<template>
    <div id="container">

    </div>
</template>

<script>
export default {
    mounted() {
        var map = new BMap.Map("container");
        // 创建地图实例  
        var point = new BMap.Point(116.404, 39.915);
        // 创建点坐标  
        map.centerAndZoom(point, 15);
        // 初始化地图，设置中心点坐标和地图级别
        map.addControl(new BMap.NavigationControl())

        var driving = new BMap.DrivingRoute(map, {
            renderOptions: {
                map: map,
                autoViewport: true
            }
        });
        driving.search("聊城", "顺义")
    }
}
</script>

<style>
#container {
    height: 600px;
}
</style>
