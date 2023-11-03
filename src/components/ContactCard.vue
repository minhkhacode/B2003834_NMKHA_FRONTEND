<template>
    <div>
        <div class="p-1">
            <strong>Tên</strong>
            {{ contact.name }}
        </div>
        <div class="p-1">
            <strong>Email</strong>
            {{ contact.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ</strong>
            {{ contact.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại</strong>
            {{ contact.phone }}
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích</strong>
            <i v-if="contact.favorite" class="fa-solid fa-check"></i>
            <i v-else class="fa-solid fa-xmark"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        contact: {
            typeof: Object,
            required: true,
        }
    }
}
</script>
<style>
    
</style>