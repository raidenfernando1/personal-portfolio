<template>
  <header>
    <div class="nav-wrapper">
      <nav>
        <ul>
          <li>
            <!-- logo -->
            <NuxtLink
              ><svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="49" height="49" stroke="white" />
                <path
                  d="M7.62695 36V14.1818H17.0446C18.6639 14.1818 20.0808 14.4766 21.2953 15.0661C22.5098 15.6555 23.4544 16.5043 24.1291 17.6122C24.8038 18.7202 25.1412 20.0483 25.1412 21.5966C25.1412 23.1591 24.7931 24.4766 24.0971 25.549C23.4082 26.6214 22.4387 27.4311 21.1887 27.978C19.9458 28.5249 18.4934 28.7983 16.8315 28.7983H11.2065V24.196H15.6383C16.3343 24.196 16.9274 24.1108 17.4174 23.9403C17.9146 23.7628 18.2946 23.4822 18.5574 23.0987C18.8272 22.7152 18.9622 22.2145 18.9622 21.5966C18.9622 20.9716 18.8272 20.4638 18.5574 20.0732C18.2946 19.6754 17.9146 19.3842 17.4174 19.1996C16.9274 19.0078 16.3343 18.9119 15.6383 18.9119H13.5502V36H7.62695ZM20.411 25.9858L25.8656 36H19.4309L14.1042 25.9858H20.411ZM27.666 36V14.1818H43.0069V18.9545H33.5893V22.7045H42.0694V27.4773H33.5893V36H27.666Z"
                  fill="white"
                />
              </svg>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink>About</NuxtLink>
          </li>
          <li>
            <NuxtLink class="nav-item">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink>Skills</NuxtLink>
          </li>
          <li>
            <NuxtLink> Contact </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-wrapper ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 5rem;
  padding-block: 10px;
  border-bottom: 1px solid #1a1a1a;
}

.nav-wrapper li:first-child {
  margin-right: auto;
}

.nav-wrapper li:last-child {
  margin-left: auto;
  padding: 5px 10px;
  border: 1px solid white;
}

.nav-wrapper a {
  color: white;
}

.nav-item {
  margin-inline: 4rem;
}
</style>
