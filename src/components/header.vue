<template>
    <div id="button">
        <router-link to="/">
            <div id="main">
                <h2>{{ main }}</h2>
            </div>
        </router-link>
        <router-link to="/Heimili">
            <div id="homes">
                <h2>{{ homes }}</h2>
            </div>
        </router-link>
        <router-link to="/Fyrirtaeki">
            <div id="company">
                <h2>{{ company }}</h2>
            </div>
        </router-link>
        <router-link to="/Husfelog">
            <div id="housing">
                <h2>{{ housing }}</h2>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'header1',
  data: () => ({
    main: 'Heim',
    homes: 'Heimili',
    company: 'Fyrirtæki',
    housing: 'Húsfélög'
  })
}
</script>

<style lang="scss" scoped>
    h2 {
        font-size: 30px;
    }
    #button {
        padding: 50px;
        display: flex;
        justify-content: center;
    }
    #main {
        padding: 15px;
    }
    #homes {
        padding: 15px;
    }
    #company {
        padding: 15px;
    }
    #housing {
        padding: 15px;
    }
    #button a {
        color: white;
        text-decoration: none;
    }
    #button a.router-link-exact-active {
        color: #055756;
    }
</style>
