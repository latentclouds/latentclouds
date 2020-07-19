<template>
  <div class="navigation-bar container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img
          alt="company logo"
          src="@/assets/logo.png"
          width="53"
          height="43"
          class="d-inline-block align-top"
          loading="lazy"
        />
        <span class="text-capitalize title">{{ NavigationBar.title }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="navbarToggler" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <router-link
            v-for="item in NavigationBar.items"
            :key="item.id"
            :to="item.href"
            class="nav-item"
            tag="li"
            active-class="active"
            exact
          >
            <a :href="item.href" class="nav-link">
              <span class="text-capitalize">{{ item.name }}</span>
            </a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: function () {
    return {
      NavigationBar: {
        title: 'latent clouds',
        items: [
          {
            id: 1,
            name: 'home',
            href: '/'
          },
          {
            id: 2,
            name: 'about us',
            href: '/about-us'
          },
          {
            id: 3,
            name: 'contact',
            href: '/contact'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.navigation-bar {
  nav {
    &.navbar-light {
      &.navbar {
        background-color: #ffffff;
        padding-top: 0;
        padding-bottom: 0;
      }

      .title {
        margin-left: 10px;
        font-size: 1rem;
        color: #5f5d5d;
      }

      .navbar-nav {
        .nav-item {
          min-width: 120px;
          color: #3d3d3d;

          &.active {
            color: #999999;
          }

          .nav-link {
            font-size: 1rem;
            line-height: 1.2rem;
            text-align: center;
            color: inherit;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: $lg-min-width) {
  .navigation-bar {
    .navbar-light {
      .title {
        font-size: 1.2rem;
        line-height: 1.4rem;
      }
      .navbar-nav {
        .nav-item {
          &.active {
            border-bottom: 8px solid #27b9e0;
            margin-bottom: -10px;
          }

          &:not(:last-child) {
            margin-right: 24px;
          }
        }
      }
    }
  }
}
</style>
