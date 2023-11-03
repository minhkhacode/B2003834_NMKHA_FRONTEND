<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" class="navbar-brand">Ứng dụng quản lý danh bạ</a>
            <ul class="mr-auto navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'contactbook'}" class="nav-link">
                        Danh bạ
                        <i class="fas fa-address-book"></i>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>