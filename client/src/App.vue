<template>
  <div id="app">
    <header class="box-shadow">
      <div>&nbsp;</div>
      <img src="./assets/img/logo.png" alt="Outdoor Logo" />
      <div class="profile-icon-circle">
        <div class="profile-icon"></div>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
}

header {
  background-color: var(--main-color);
  width: 100%;
  display: flex;
  padding: 0.8rem 2rem;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 8rem;
    box-shadow: none;
  }

  h1 {
    color: #fff;
    font-weight: 600;
    margin: 0;
    font-size: 28px;
  }

  .profile-icon-circle {
    border: 1px solid #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .profile-icon {
      background-image: url(assets/img/avatar.svg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      width: 16px;
      height: 18px;
    }
  }
}
main {
  margin: 5rem 2rem 2rem 2rem;
}
</style>
