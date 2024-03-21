<template>
  <section class="skills-wrapper">
    <h1 id="title">Skills or Technologies that im proficient at</h1>
    <div class="content-wrapper">
      <ol class="skills-content" id="row-1">
        <li id="content-title">Language & Libraries</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>Vue.Js</li>
        <li>Nuxt.Js</li>
        <li>Version Control System(GIT)</li>
      </ol>
      <ol class="skills-content" id="row-2">
        <li id="content-title">Applications</li>
        <li>Photoshop</li>
        <li>Illustrator</li>
        <li>Figma / Adobe XD</li>
        <li>Datagrip / TablePlus / MySQL</li>
        <li>PhpStorm</li>
        <li>WebStorm / VSCode</li>
        <li>Github / Gitlab</li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.skills-wrapper {
  height: 70vh;
  padding-inline: 5%;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
}

#title {
  font-size: 35px;
  margin-bottom: 50px;
  color: var(--primary-color);
}

#content-title {
  font-size: 28px;
  font-weight: 600;
}

.skills-content {
  font-size: 24px;
  list-style: none;
  color: var(--primary-color);
}

.skills-content > li {
  padding-block: 10px;
}

@media (min-width: 1700px) {
  .skills-wrapper {
    padding-inline: 15%;
  }
}

@media (min-width: 1900px) {
  .skills-wrapper {
    padding-inline: 20%;
  }
}

@media (max-width: 950px) {
  #title {
    font-size: 24px;
    margin-bottom: 30px;
    color: var(--primary-color);
  }

  #content-title {
    font-size: 20px;
    font-weight: 600;
  }

  .skills-content {
    font-size: 18px;
    list-style: none;
    color: var(--primary-color);
  }
}
</style>
