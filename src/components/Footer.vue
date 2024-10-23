<script setup>

</script>

<template>
    <footer class="footer-distributed">
        <div class="footer-left">
            <h1>Grupo EGP</h1>
            <p class="footer-links">
                <a href="#">{{ $t('home') }}</a>
                |
                <a href="#">{{ $t('about') }}</a>
                |
                <a href="#">{{ $t('products') }}</a>
            </p>
            <p class="footer-company-name">Coporight º 2022 Grupo EGP</p>
            <div class="footer-center">
                    <div >
                        <p><span>{{ $t('address') }} Indochina, 159 - Jd. Fontana</span>, Cotia - SP, 06.713-030 </p>                   
                    </div>
    
                    <div>
                        <p>(11)4703-5846</p>
                    </div>
                    
                    <div class="contato">
                        <a href="nathanna@grupoegp.com.br">Comercial</a>
                        <a href="financeiro@grupoegp.com.br">{{ $t('finance') }}</a>
                        <a href="compras@grupoegp.com.br">Compras</a>
                        <a href="claudio@grupoegp.com.br">{{ $t('support') }}</a>
                        <a href="vitor@grupoegp.com.br">RH</a>
                    </div>
                </div>
            </div>

            <div class="ladodireito">
                <div class="location">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.127846362447!2d-46.856928223916114!3d-23.599747478773477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfaa8e02789c3d%3A0x98c3dab76d9da073!2sR.%20Indochina%2C%20159%20-%20Jardim%20Fontana%2C%20Cotia%20-%20SP%2C%2006713-030!5e0!3m2!1spt-BR!2sbr!4v1727577947749!5m2!1spt-BR!2sbr" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
    </footer><!--FInal footer-->
</template>

<style scoped>
.footer-distributed{
    width: auto;
    position: sticky;
    margin-top: auto;
    background-color: #292a2d;
    box-sizing: border-box;
    widows: 100%;
    text-align: left;
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        gap: 20px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
.footer-distributed h1{
    color: white;
    font-size: 40px;
    @media (max-width: 600px) {
        font-size: 20px;
    }
}
.footer-distributed .footer-links{
    color: #ffffff;
    margin: 10px 0 10px;
    @media (max-width: 680px) {
        display: none;
    }
}


.footer-distributed .footer-links a{
    display:inline-block;
    text-decoration: none;
    color: inherit;
    @media (max-width: 680px) {
        text-align: center;
    }
}

.footer-distributed .footer-company-name{
    margin: 0;
    color:#8f9296;
    font-size: 14px;
    font-weight: normal;
}
.footer-distributed .footer-center i{
    background-color: #33383b;
    color: white;
    font-size: 25px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    line-height: 42px;
    margin: 10px 15px ;
    vertical-align: middle;
    @media (max-width: 680px) {
        width: auto;
        height: auto;
        padding: 10px;
        text-align: center;
    }
}

.footer-distributed .footer-center p{
    display: inline-block;
    color: #ffff;
    vertical-align: middle;
}
.footer-distributed .footer-distributed p span{
    display: block;
    font-weight: normal;
    font-size: 12px;
}
.footer-distributed .footer-center p a{
    color: #ffffff;
    text-decoration: none;
}
.contato {
    margin-top: 10px;
    display: flex;
    gap: 10px;
    @media (max-width: 680px) {
        display: flex;
        flex-direction:  row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }
}
.contato a {
    color: white;
}
</style>