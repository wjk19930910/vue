<template>
    <el-container>
        <el-header>
            <!-- 头部区域 -->
            <Headers />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <!-- 侧边栏 -->
                <SideBar />
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Headers from '@/layout/headers.vue'
import SideBar from '@/layout/sidebar.vue'
export default {
    components:{
        Headers,
        SideBar
    },
    beforeCreate() {
        // 1.0 验证是否： token
        var token = window.localStorage.getItem('token')
        if (!token) {
            // 跳转回登录页面
            this.$message.error('您还没有登录，请先登录')
            this.$router.push('/login')
            return
        } 
    }
}
</script>

<style>
.el-container {
    height: 100%;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    padding: 0;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    height: 100%;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
}
</style>
