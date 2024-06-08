<template>
    <div class="error">
        <div class="code">
            <p>404</p>
        </div>
        <div class="msg">
            <p>Page Not Found</p>
        </div>
    </div>
    <div class="msg_detail">The page you were looking for could not be found.</div>
</template>

<style scoped>
.error{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
}
.code{
    font-size: 64px;
    font-weight: bold;
    color: #888888;
}
.msg{
    margin-top: 8px;
}
.msg_detail{
    font-size: 18px;
    text-align: center;
}
</style>