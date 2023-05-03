<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconGitHub from '~icons/mdi/github';

const route = useRoute()
const skipLink = ref<HTMLAnchorElement>()

watch(
  () => route.path,
  () => {
    skipLink.value?.focus()
  }
)
</script>

<template>
  <header id="site-header">
    <div class="left-column">
      <ul class="skip-links">
        <li>
          <a
            ref="skipLink"
            href="#main"
            class="skip-link"
          >
            Skip to main content
          </a>
        </li>
      </ul>

      <RouterLink
        class="logo-link"
        to="/"
      >
        <img
          src="@/assets/header/logo.png"
          alt="Site logo"
          class="logo-image"
        >
      </RouterLink>

      <nav class="nav-links">
        <ul class="nav-list">
          <RouterLink
            class="nav-link"
            to="/"
          >
            <li :class="['nav-item', { selected: route.path === '/' }]">
              Home
            </li>
          </RouterLink>
        </ul>
      </nav>
    </div>

    <div class="right-column">
      <a
        href="https://github.com/bdpennington/chmura-work-sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub class="github-link" />
      </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px;
  height: 80px;
  background-color: #161b22;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);

  .left-column {
    display: flex;
    align-items: center;
    height: 100%;

    .skip-links {
      margin: 0;
      padding: 0;
      list-style: none;

      .skip-link {
        white-space: nowrap;
        margin: 1rem auto;
        top: 0;
        position: fixed;
        left: 50%;
        margin-left: -72px;
        opacity: 0;

        &:focus {
          opacity: 1;
          background-color: white;
          padding: 0.5rem;
          border: 1px solid black;
        }
      }
    }

    .logo-link {
      text-decoration: none;
      margin-right: 12px;

      .logo-image {
        height: 48px;
        width: auto;
        aspect-ratio: 186 / 109 auto;
        transform: translateY(3px); // Deal with bad cropping job. Oops.
      }
    }

    .nav-links {
      display: flex;
      align-items: center;

      .nav-list {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;

        .nav-link {
          color: #f0f6fc;
          font-size: 24px;
          border-bottom: 4px solid transparent;

          .nav-item {
            cursor: pointer;
            padding-bottom: 2px;
            margin-top: 2px;
            transition: border-bottom 0.2s ease-in-out;

            // &:hover {
            // }

            &.selected {
              border-bottom: 4px solid #f0f6fc;
            }
          }
        }
      }
    }
  }
  .right-column {
    display: flex;
    align-items: center;
    height: 100%;

    .github-link {
      display: flex;
      align-items: center;
      color: #f0f6fc;
      height: 32px;
      width: auto;
      text-decoration: none;
    }
  }
}
</style>
