<template>
  <div class="navigation-bar">
    <!-- some customised bootstrap navbar -->
    <header class="masthead mb-auto">
      <div class="inner">
        <nav class="nav nav-masthead justify-content-center">
          <a class="nav-link" href="#">Latentclouds</a>
          <a class="nav-link active" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Contact</a>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data: function () {
    return {
      NavigationBar: {
        items: [
          {
            id: 1,
            name: 'About Us',
            href: 'about-us'
          },
          {
            id: 2,
            name: 'Contact Us',
            href: 'contact-us'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/*
 * Base structure
 */

.cover-container {
  max-width: 42em;
}

/*
 * Header
 */
.masthead {
  margin-bottom: 2rem;
  background-color: rgb(55, 151, 196);
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: #030303d2;
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: rgb(29, 27, 27);
  border-bottom-color: #fff;
}

/*
 * Cover
 */
.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: 0.75rem 1.25rem;
  font-weight: 700;
}
</style>
