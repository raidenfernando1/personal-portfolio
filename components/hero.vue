<template>
  <header class="hero-container">
    <div class="left-container">
      <h1>
        Hello, im<br />
        Raiden Fernando<br />
        im a Web Developer
      </h1>
      <button class="project-btn">Browse my Projects</button>
      <button class="resume-btn">Download my Resume</button>
    </div>
    <div class="right-container">
      <div class="img-wrapper">
        <img src="/assets/room-pic.png" alt="Discover Nuxt 3" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  padding-inline: 5%;
}

.left-container {
  flex: 2;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  color: var(--primary-color);
  font-size: 2.3rem;
}

.project-btn,
.resume-btn {
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  transition: 600ms;
  font: inherit;
}

.project-btn:hover,
.resume-btn:hover {
  box-shadow: 0 0px 0.7rem var(--primary-color);
}
.project-btn {
  margin-top: 3rem;
}

.resume-btn {
  margin-top: 0.95rem;
}

.right-container {
  display: flex;
  align-items: center;
}

.img-wrapper > img {
  height: 500px;
  width: auto;
}

#typingAnimation {
  animation: flicker 300ms alternate infinite ease-in-out;
  color: transparent;
  -webkit-text-stroke: 2px var(--primary-color);
}

@keyframes flicker {
  from {
    opacity: 0;
  }
}

@media (min-width: 1700px) {
  .hero-container {
    padding-inline: 15%;
  }
}

@media (min-width: 1900px) {
  .hero-container {
    padding-inline: 20%;
  }
}

@media (max-width: 1300px) {
  .left-container {
    font-size: 2.5vw;
  }
}

@media (max-width: 960px) {
  .img-wrapper > img {
    max-width: 500px;
    height: auto;
  }
  .img-wrapper {
    padding-top: 10vh;
  }
  .hero-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: 100%;
  }
  .left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    text-align: center;
  }
  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 760px) {
  .img-wrapper > img {
    max-width: 100%;
    height: auto;
  }
  .img-wrapper {
    padding-top: 10vh;
  }
  .hero-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: 100%;
  }
  .left-container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    text-align: center;
  }
  .right-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
