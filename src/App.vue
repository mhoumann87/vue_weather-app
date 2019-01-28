<template>
  <div id="app">
    <header>
      <a class="navbar-brand" href="#/">Weather App</a>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <div class="copy">
        <p>&copy; 2019 Made by Michael Houmann inspired by the Coding Garden</p>
      </div>
      <div class="dark-sky">
        <a href="https://darksky.net/poweredby/" target="_blank">Powered by Dark Sky</a>
      </div>
    </footer>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html {
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: inherit;
}

body {
  background: whitesmoke;
  font-size: 100%;
}

p,
a {
  font-family: "Cardo", serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Sarabun", sans-serif;
  font-weight: 100;
}

header {
  width: 100%;
  padding: 1rem;
  background-color: #78c2ad;
  box-shadow: 2px 2px 0 rgba(53, 53, 53, 0.5);
  position: fixed;
}

header a,
header a:visited,
header a:hover,
header a:active,
header a:focus {
  font-family: "Sarabun", sans-serif;
  font-size: 2em;
  color: white;
  font-weight: 100;
  text-decoration: none;
  margin: 0;
}
main {
  min-height: 90vh;
}

footer {
  background-color: #78c2ad;

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: white;
}

footer a,
footer a:visited,
footer a:hover,
footer a:active,
footer a:focus {
  font-family: "Sarabun", sans-serif;
  color: white;
  font-weight: 600;
}
</style>
