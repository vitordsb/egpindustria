<template>
    <div class="country">
        <img :src="img" :alt="nome">
        <p>{{nome}}</p>
    </div>
</template>
<script>
 export default {
    name: 'Pais',
    props: {
        nome: String,
        img: () => import({img})
    }
 }
</script>
<style scoped>
.country {
    flex: 2 2 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin-top: -15px;
    @media (max-width: 1280px) {
        margin-top: 0;
    }
}
.country img {
    width: 100px;
    background-color: #283C55;
    border-radius: 50%;
    @media (max-width: 1280px) {
        width: 80px;
    }
}
</style>