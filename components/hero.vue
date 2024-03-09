<template>
  <header class="hero-container">
    <div class="left-container">
      <h1>
        Hello, im<br />
        Raiden Fernando<br />
        im a {{ currentWord }}<span id="typingAnimation">I</span>
      </h1>
    </div>
    <div class="right-container">
      <div class="img-wrapper">
        <nuxt-img src="/assets/room-pic.png" alt="" class="idk" />
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
  align-items: center;
  color: white;
  font-size: 2.3rem;
}

.right-container {
  display: flex;
  align-items: center;
}

.img-wrapper > img {
  height: 500px;
  width: auto;
  border: 3px solid white;
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
