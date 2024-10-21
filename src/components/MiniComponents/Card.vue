<template>
    <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <h6 class="card-subtitle">{{subtitle}}</h6>
          <p class="card-text">{{text}}</p>
              <div class="links">
                  <RouterLink :to="{path: ver}" class="card-link">
                  Ver produto
                  </RouterLink>
                  <a :href="baixar" class="card-link">
                  Baixar Manual
                  </a>
              </div><!--Final dos links-->
        </div><!-- Final do card-body-->
      </div><!-- Final do card-->
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'Card',
    props: {
        title: String,
        subtitle: String,
        text: String,
        ver: String,
        baixar: String
    },
    components: {
        RouterLink
    }
}
</script>

<style scoped>
.card {
  width: 18rem;
  height: 11rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  @media (max-width: 680px) {
    width: 16rem;
    height: 10rem;
    padding: 12px;
  }
}

.card-body {
  padding: 10px;
  @media (max-width: 680px) {
    padding: 0;
  }
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 680px) {
    font-size: 1.4rem;
    margin-bottom: 0.2rem;
  }
}

.card-subtitle {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 1rem;
  @media (max-width: 680px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1.0rem;
}

.card-link {
  font-size: 0.9rem;
  font-weight: bolder;
  color: #DB0E69;
  text-decoration: none;
  margin-right: 1rem;
}

.titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    font-size: 25px;
}
</style>