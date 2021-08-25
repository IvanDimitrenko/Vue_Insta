<template>
    <nav class="nav_main">
        <div class="nav-main__content ">
            <div class="nav-main__logo">
            <h1 class="logo"></h1>
            </div>
            <div class="nav-main__search">
                <input class="nav-main__input" type="text" placeholder="">
                <div class="nav-main__input-span">
                    <span>
                        Поиск
                    </span>
                </div>
            </div>
            <!-- <Icon></Icon> -->
        </div>
    </nav>
    <main class="main">
        <div class="main-section">
            <div class="main-section__content">
            </div>
            <aside class="main-section__aside">
                <div class="main-section__profile-section">
                </div>
            </aside>
        </div>
    </main>
    <footer>
    </footer>
    

</template>

<script>


 

 import Icom from './components/Icon.vue';

export default {
 components:
  Icon
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
