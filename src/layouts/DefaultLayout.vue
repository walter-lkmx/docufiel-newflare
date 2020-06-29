<template>
  <div class="layout">

    <!-- Website header -->
    <simple-header>
      <template v-slot:logo>
        <g-image src="~/assets/images/logo.png" alt="logo"></g-image>
      </template>
      <template v-slot:navigation>
        <simple-nav-item to="/digitalizacion-documentos">Digitalización de documentos</simple-nav-item>
        <simple-nav-item to="/valuacion-activos">Valuación de activos</simple-nav-item>
        <simple-nav-item to="/inventario-activos">Inventario de activos</simple-nav-item>
      </template>
      <template v-slot:nav-toggle>
        <g-image src="~/assets/images/navigation-icon.svg" alt="logo"></g-image>
      </template>
      <template v-slot:actions>
        <g-link class="haz-un-donativo"><g-image src="~/assets/images/account-circle-line.svg" alt="Docufiel"></g-image> Login</g-link>
      </template>
      <template v-slot:nav-toggle-close>
        <g-image src="~/assets/images/navigation-close-icon.svg" alt="cerrar navegación"></g-image>
      </template>
    </simple-header>

    <!-- Content -->
    <slot/>

    <!-- Website footer -->
    <simple-footer class="footer">
      <single-column>
        <section class="footer__content">
          <div class="block">
            <g-image src="~/assets/images/docufiel-footer.png" alt="Docufiel"></g-image>
          </div>
          <div class="block">
            <h3>Servicios</h3>
            <a href="/digitalizacion-documentos">Digitalización de documentos</a>
            <a href="/valuacion-activos">Valuación de activos</a>
            <a href="/inventario-activos">Inventario de activos</a>
          </div>
          <div class="block">
            <h3>Legal</h3>
            <a href="/legal/terminos-condiciones">Términos y condiciones</a>
            <a href="/legal/privacidad">Aviso de privacidad</a>
          </div>
          <div class="block social">
            <g-image src="~/assets/images/facebook.svg" alt="Facebook"></g-image>
            <g-image src="~/assets/images/twitter.svg" alt="Twitter"></g-image>
            <g-image src="~/assets/images/instagram.svg" alt="Instagram"></g-image>
          </div>
        </section>
      </single-column>
    </simple-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

  body {
    background-color: $body-background;
      a {
        text-decoration: none;
        &:hover {
          color: $brand-primary;
        }
        &:visited {
          // color: $docufiel-grey;  
        }
      }
      p {
        color: $docufiel-grey;
      }
    .header {
      .main-nav {
        &__primary {
        display: inline-grid;
        grid-template-columns: auto;
        grid-gap: $gutter-xxlarge;
          a {
            text-decoration: none;
            &:hover {
              color: $brand-primary;
            }
          }
        }
      }
      &__actions {
        a {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
        }
      }
    }
  }

  .footer {
    &__content {
      @include respond-to("medium and down") {
        @include gridline(1, $gutter-xlarge, start);
      }
      @include respond-to("large and up") {
        @include gridline(4, $gutter-xlarge, start);
      }
      h3 {
        font-size: $h3-text-size;
        font-weight: 600;
        line-height: rem(20px);
        margin-bottom: rem(15px);
      }

      a {
        color: white;
        display: block;
        margin-bottom: $gutter-small;
      }

      .social {
        img {
          margin-right: $gutter;
        }
      }

    }
  }

</style>
