<template>
  <header class="hero-container">
    <div class="left-container">
      <h1>
        Hello, im<br />
        Raiden Fernando<br />
        im a {{ currentWord }}<span id="typingAnimation">I</span>
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

<script lang="ts">
export default {
  data() {
    return {
      wordlist: ['Web Developer', 'Web Designer', 'Tech Enthusiast'],
      wordIndex: 0,
      typingSpeed: 50,
      currentWord: '',
    }
  },
  mounted() {
    this.typingAnim()
  },
  methods: {
    typingAnim() {
      if (this.wordIndex < this.wordlist.length) {
        const currentWord = this.wordlist[this.wordIndex]
        if (this.currentWord.length < currentWord.length) {
          this.currentWord += currentWord[this.currentWord.length]
          setTimeout(() => this.typingAnim(), this.typingSpeed)
        } else {
          setTimeout(() => this.deleting(), 5000)
        }
      } else {
        this.wordIndex = 0
        setTimeout(() => this.typingAnim(), 1000)
      }
    },
    deleting() {
      if (this.currentWord.length > 0) {
        this.currentWord = this.currentWord.slice(0, -1)
        setTimeout(() => this.deleting(), 100)
      } else {
        this.wordIndex++
        setTimeout(() => this.typingAnim(), 1000)
      }
    },
  },
}
</script>

<style scoped>
.hero-container {
  display: flex;
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
  color: var(--primary-color);
  font-size: 2.3rem;
}

.project-btn,
.resume-btn {
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  transition: 600ms;
  font: inherit;
}

.project-btn:hover,
.resume-btn:hover {
  box-shadow: 0 0px 10px var(--primary-color);
}

.project-btn {
  margin-top: 30px;
}

.resume-btn {
  margin-top: 15px;
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
  -webkit-text-stroke: 2px rgb(255, 255, 255);
}

@keyframes flicker {
  from {
    opacity: 0;
  }
}
</style>
