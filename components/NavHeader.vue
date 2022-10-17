<template>
  <div id="fixed-wrap">
    <nav class="navbar px-5">
      <div class="navbar__logo">
        <img class="icons mr-3 pointer" src="icons/fox.svg" alt="logo" @click="$router.push('/')">
        <template v-if="!isConnected">
          <a class="mr-3 pointer" @click="$router.push('/')">아기여우 키우기</a>
          <img class="icons pointer" src="icons/wallet.svg" alt="wallet" @click="connect">
        </template>
        <template v-else>
          <a class="mr-3 pointer" @click="$router.push('step1')">Step1</a>
          <a class="mr-3 pointer" @click="$router.push('step2')">Step2</a>
          <img class="icons" src="icons/connect.svg" alt="connect">
        </template>
      </div>

      <ul :class="['navbar__menu', { 'active': navOpen }]">
        <li><a href="#story" @click="navTogle">Story</a></li>
        <li><a href="#howto" @click="navTogle">How to</a></li>
        <li><a href="#vision" @click="navTogle">Vision</a></li>
        <li><a href="#roadmap" @click="navTogle">Roadmap</a></li>
        <li><a href="#comunity" @click="navTogle">Community</a></li>
        <li><a href="#team" @click="navTogle">Team</a></li>
      </ul>

      <a class="navbar__toggleBtn" @click="navOpen = !navOpen">
        <img class="icons" src="icons/menu.svg" alt="menu">
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      provider: null
    }
  },

  mounted() {
    if(typeof window.klaytn !== 'undefined') {
      this.provider = window['klaytn'];
    }
  },

  computed: {
    isConnected() {
      return this.provider && this.provider.selectedAddress != undefined;
    }
  },

  methods: {
    navTogle() {
      this.navOpen = !this.navOpen;
    },

    goToPage(page) {
      this.$router.push(page);
      this.navOpen = false;
    },

    async connect() {
      const { klaytn } = window;
      if (!klaytn || !klaytn.isKaikas) {
        alert('KAIKAS 확장프로그램 설치가 필요합니다');
        return;
      }

      await klaytn.enable();
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Jua';
}

a {
  text-decoration: none;
  color: #1F3995;
  font-weight: bold;
}

#fixed-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}

.pointer {
  cursor: pointer;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ced5e8;
  padding: 8px 12px;
  min-height: 10vh;
  z-index: 999;
}

.navbar__logo {
  font-size: 24px;
  color: violet;
}

.navbar__menu {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.navbar__menu li {
  padding: 8px 12px;
}
.navbar__menu li:hover {
  background-color: grey;
  border-radius: 4px;
}

.navbar__links {
  list-style: none;
  padding-left: 0;
  color: teal;
  display: flex;
}

.navbar__links li {
  padding: 8px 12px;
}

.navbar__toggleBtn {
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
}

@media screen and (max-width: 860px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px 24px;
  }
  .navbar__menu {
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .navbar__menu li {
    width: 100%;
    text-align: center;
  }
  .navbar__links {
    display: none;
    justify-content: center;
    width: 100%;
  }
  .navbar__toggleBtn {
    display: block;
  }

  .navbar__menu.active,
  .navbar__links.active {
    display: flex;
  }
}
</style>