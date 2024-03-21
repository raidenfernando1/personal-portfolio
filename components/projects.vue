<template>
  <section class="projects-container">
    <h1 id="title">Here are some of my projects</h1>
    <div class="project-content-container">
      <div class="project-1" id="project">
        <div class="right-pic-container">
          <div class="top-pic">
            <div class="test"></div>
            <div class="tech-used">
              <h1>T</h1>
              <h1>E</h1>
              <h1>S</h1>
              <h1>T</h1>
            </div>
          </div>
        </div>
        <div class="left-text-container">
          <h1 id="content-title">ANONYMOUS MESSAGE BOARD.</h1>
          <p>
            This is a full-stack website that I made which lets the users read
            and post anonymous messages and replies. This is a full-stack
            website that I made which lets the users read and post anonymous
            messages and replies. This is a full-stack website that I made which
            lets the users read and post anonymous messages and replies. This is
            a full-stack website that I made which lets the users read and post
            anonymous messages and replies.
          </p>
          <button class="button-src">View Source</button>
          <button>Check live page</button>
        </div>
      </div>
    </div>
    <div class="project-2" id="project">
      <div class="right-pic-container">
        <div class="top-pic">
          <div class="test"></div>
          <div class="tech-used">
            <h1>T</h1>
            <h1>E</h1>
            <h1>S</h1>
            <h1>T</h1>
          </div>
        </div>
      </div>
      <div class="left-text-container">
        <h1 id="content-title">ANONYMOUS MESSAGE BOARD.</h1>
        <p>
          This is a full-stack website that I made which lets the users read and
          post anonymous messages and replies. This is a full-stack website that
          I made which lets the users read and post anonymous messages and
          replies. This is a full-stack website that I made which lets the users
          read and post anonymous messages and replies. This is a full-stack
          website that I made which lets the users read and post anonymous
          messages and replies.
        </p>
        <button class="button-src">View Source</button>
        <button>Check live page</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-container {
  height: 100%;
  padding-inline: 5%;
  padding-block: 5%;
  margin-block: 5%;
}

#title {
  font-size: 48px;
  color: var(--primary-color);
}

.test {
  width: 400px;
  height: 400px;
  border: 2px solid var(--primary-color);
}

.tech-used {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid var(--primary-color);
  border-right: 2px solid var(--primary-color);
  border-left: 2px solid var(--primary-color);
  padding: 2px;
  gap: 40px;
}

#project {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin-top: 3rem;
  border: 3px solid var(--primary-color);
}

.left-text-container {
  padding-inline: 2%;
  margin-right: 10px;
  color: var(--primary-color);
  font-size: 24px;
}

.left-text-container button {
  margin-top: 30px;
  padding: 10px 25px;
  background-color: transparent;
  color: var(--primary-color);
  border: 3px solid var(--primary-color);
  cursor: pointer;
}

.button-src {
  margin-right: 30px;
}

#content-title {
  margin-bottom: 5%;
}

/* make test scale with percentages when replacing test with image */

@media (min-width: 1700px) {
  .projects-container {
    padding-inline: 15%;
  }
}

@media (min-width: 1900px) {
  .projects-container {
    padding-inline: 20%;
  }
}

@media (max-width: 960px) {
  .left-text-container {
    font-size: 12px;
  }
  .test {
    width: 300px;
    height: 300px;
  }
  .tech-used {
    gap: 20px;
  }
}

@media (max-width: 700px) {
  .test {
    width: 200px;
    height: 200px;
  }
  #title {
    font-size: 24px;
    text-align: center;
  }
  #project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-top: 3rem;
    border: 3px solid var(--primary-color);
    text-align: center;
  }

  #content-title {
    margin-top: 5%;
  }
  .left-text-container button {
    margin-top: 20px;
    padding: 5px 20px;
    background-color: transparent;
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
    cursor: pointer;
    width: 100%;
  }
  .left-text-container {
    display: flex;
    flex-direction: column;
  }
}
</style>
