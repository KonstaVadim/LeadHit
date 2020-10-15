<template>
  <div id="authorization">
    <nav class="navbar bg-primary text-white">
      <h1>LeadHit</h1>
    </nav>
    <div class="content">
      <div class="form">
        <div class="form__input">
          <input type="text"
                 v-model="leadhitSiteId"
                 @input="isValid = true"
                 @keyup.enter="authorization()"
                 placeholder="Введите id сайта" >
          <transition name="fade">
            <small class="text-danger" v-if="!isValid">id сайта должен содержать 24 символа</small>
          </transition>
        </div>
        <button type="button" class="btn btn-primary" @click="authorization()">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authorization",
  data() {
    return {
      leadhitSiteId: '',
      isValid: true,
    }
  },
  methods: {
    // Авторизация
    authorization() {
      this.validation();
      if (this.isValid) {
        this.$store.dispatch('getData', this.leadhitSiteId)
      }
    },
    // Валидаця данных
    validation() {
      // Проверка на длину id
      if (this.leadhitSiteId.length != 24) {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>


#authorization {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 3;

  .form {
    display: flex;
    align-items: center;
    position: relative;

    &__input {
      display: flex;
      flex-direction: column;

      input {
        width: 300px;
      }

      small {
        position: absolute;
        top: calc(100%);
        left: 3px;
      }
    }

    button {
      margin-left: 20px;
      width: 100px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>