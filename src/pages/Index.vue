<template>
  <default-layout>
    <base-page>
    
    <!-- hero -->
      <simple-hero>
      </simple-hero>
    
    <!-- intro -->
    <section class="intro">
      <single-column>
        <p clasS="intro__message"><span>En DOCUFIEL, brindamos los servicios de Digitalización de documentos;</span> <span>Inventario y conciliación de activos. Etiquetado y plaqueo de activos;</span> y Valuación de activos tangibles e intangibles.</p>
      </single-column>
    </section>
    
    <!-- TripletColumns -->
    <section class="services">
      <triplet-column>
        <template v-slot:left>
          <h2>Digitalización de documentos</h2>
          <p>Digitalizamos todos los tamaños de documentos en forma masiva, como carta, oficio y doble carta; así como tamaños especiales, ya sean pedimentos, facturas cheques, boletos, entre otros. Así mismo, nos especializamos en la digitalización de todo tipo de planos arquitectónicos, industriales, eléctricos, entre otros.</p>
        </template>
        <template v-slot:middle>
          <h2>Inventario y conciliación de activos, etiquetado y plaqueo de activos</h2>
          <p>Tener un buen y completo inventario brinda información contable confiable para la toma de decisiones y permite establecer planes de optimización y gestión de usos de activos.</p>
          <p>El inventario se puede realizar sobre todos los activos identificables de la compañía: propiedades inmobiliarias, instalaciones, maquinarias, equipos de cómputo, muebles y útiles, accesorios y enseres diversos, obras civiles, existencias, entre otros.</p>
        </template>
        <template v-slot:right>
          <h2>Valuación de activos tangibles e intangibles</h2>
          <p>Una correcta valoración contable de los activos en el balance de las compañías es clave desde un punto de vista financiero y fiscal. Valuamos todo tipo de activos, maquinaria y equipo, inmuebles, intangibles, entre otros.</p>
        </template>
      </triplet-column>
    </section>
    
    <!-- TripletColumns -->
    <section class="advantages">
      <single-column>
        <h1 class="advantages__title">Ventajas de los servicios de DOCUFIEL</h1>
      </single-column>
      <triplet-column>
        <template v-slot:left>
          <g-image src="~/assets/images/validez-juridica.png" alt="Validez jurídica"></g-image>
          <p class="description">Validez jurídica</p>
        </template>
        <template v-slot:middle>
          <g-image src="~/assets/images/almacenamiento.png" alt="Almacenamiento NOM151"></g-image>
          <p class="description">Almacenamiento NOM151</p>
        </template>
        <template v-slot:right>
          <g-image src="~/assets/images/validez-juridica.png" alt="Mejora de tiempos"></g-image>
          <p class="description">Mejora de tiempos</p>
        </template>
      </triplet-column>
      <triplet-column>
        <template v-slot:left>
          <g-image src="~/assets/images/reduccion-costos.png" alt="Reducción de costos de almacenamiento"></g-image>
          <p class="description">Reducción de costos de almacenamiento</p>
        </template>
        <template v-slot:middle>
          <g-image src="~/assets/images/destruccion-legal.png" alt="Destrucción legal de documentos físicos"></g-image>
          <p class="description">Destrucción legal de documentos físicos</p>
        </template>
        <template v-slot:right>
          <g-image src="~/assets/images/mayor-seguridad.png" alt="Mayor seguridad sobre los documentos"></g-image>
          <p class="description">Mayor seguridad sobre los documentos</p>
        </template>
      </triplet-column>
    </section>

    <!-- Gridline -->
    <section class="how-it-works">
      <single-column>
        <h1 class="how-it-works__title">¿Cómo funciona?</h1>
        <p class="how-it-works__description"><span>Ofrecemos un servicio que permite la destrucción legal de grandes</span> lotes de documentos en papel, conforme a siguiente esquema:</p>
      <div class="gridline">
        <div class="how-it-works__step">
          <g-image src="~/assets/images/documentos.png" alt="Documentos"></g-image>
          <span>Documentos</span>
          <p>Entrega de documentos en soporte físico.</p>
        </div>
        <div class="how-it-works__step">
          <g-image src="~/assets/images/digitalizacion.png" alt="Digitalización"></g-image>
          <span>Digitalización</span>
          <p>Proceso de duplicación de documento físico o documento digital.</p>
        </div>
        <div class="how-it-works__step">
          <g-image src="~/assets/images/cotejo.png" alt="Cotejo"></g-image>
          <span>Cotejo</span>
          <p>Proceso de comparación entre el documento físico y el documento digital por la Secretaría de Economía para garantizar la fidelidad.</p>
        </div>
        <div class="how-it-works__step">
          <g-image src="~/assets/images/certificacion.png" alt="Certificación"></g-image>
          <span>Certificación</span>
          <p>Emisión de constancia de conservación a aquellas digitalizaciones que aprueben el proceso de cotejo.</p>
        </div>
      </div>
      </single-column>
    </section>

    <!-- TwinColumns -->
    <section class="contact-us">
      <twin-columns class="info">
        <template v-slot:left>
          <g-image src="~/assets/images/icono-logo.png" alt="docufiel-búscanos"></g-image>
          <h1 class="search-for-us">¡Búscanos! <span>Te podemos ayudar</span></h1>
          <div class="info-data">
            <ul>            
              <li class="info-data__title">Dirección</li>
              <li>Av. Ryerson #454</li>
              <li>Zona Centro, CP 22800</li>
              <li>Ensenada, B.C.</li>
            </ul>
          </div>          
          <div class="info-data">
            <ul>            
              <li class="info-data__title">Teléfono</li>
              <li><a href="tel:+526462040553">(646) 204 0553</a></li>
              <li><a href="tel:+526462040659">(646) 204 0659</a></li>
            </ul>
          </div>
        </template>
        <template v-slot:right>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.3779634246475!2d-116.63094294928199!3d31.869137981163615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d892604bf5ac19%3A0x22090ab138fd3817!2sAv.%20Ryerson%20454%2C%20Zona%20Centro%2C%2022800%20Ensenada%2C%20B.C.!5e0!3m2!1sen!2smx!4v1586384926850!5m2!1sen!2smx" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </template>
      </twin-columns>
    </section>

    </base-page>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Flare Starter'
  }
}
</script>

<style lang="scss">

  .simple-hero {
    @include respond-to("medium and down") {
      background-image: url("../assets/images/hero-mobile.png");
    }
    @include respond-to("large and up") {
      background-image: url("../assets/images/hero.jpg");
    }
  }

  .intro {
    &__message {
      color: $brand-primary;
      font-size: $h1-text-size * 1.5;
      text-align: center;
      padding: $gutter-xxxlarge 0;
      @include respond-to("medium and down") {
        font-size: $h1-text-size * 1;
      }
      span {
        @include respond-to("medium and down") {
          display: inline;
        }
        @include respond-to("large and up") {
          display: block;
        }
      }
    }
  }

  .services {
    margin-bottom: $gutter-xxxlarge;
  }

  .advantages {
    margin-bottom: $gutter-xxxlarge;
    display: grid;
    grid-row-gap: $gutter-large;
    &__title {
      text-align: center;
      margin-bottom: $gutter-xxlarge;
      font-size: $h1-text-size * 1.5;
    }
    .triplets {
      .triplets-column  {
        @include respond-to("medium and down") {
          text-align: center;
        }
        .description {
          color: $brand-secondary;
          font-size: $h3-text-size;
          font-weight: 600;
        }
      }
    }
  }

  .how-it-works {
    margin-bottom: $gutter-xxxlarge;
    &__title {
      text-align: center;
      font-size: $h1-text-size * 1.5;
    }
    &__description {
      text-align: center;
      font-size: $h1-text-size;
      margin-bottom: $gutter-xxlarge;
      @include respond-to("medium and down") {
        font-size: $h2-text-size;
      }
      span {
        @include respond-to("medium and down") {
          display: inline;
        }
        @include respond-to("large and up") {
          display: block;
        }
      }
    }
    .gridline {
      @include respond-to("medium and down") {
        @include gridline(2, $gutter-xlarge, start);
      }
      @include respond-to("large and up") {
        @include gridline(4, $gutter-xlarge, start);
      }
    }
    &__step {
      display: grid;
      grid-row-gap: $gutter;
      text-align: center;
      justify-items: center;
      img {
        width: rem(164px);
        height: auto;
      }
      span {
        font-size: $h3-text-size;
        color: $brand-secondary;
        font-weight: 600;
      }
    }
  }

  .contact-us {
    background-color: $brand-primary;
    .twins-column--start {
      padding-top: $gutter-xlarge;
      padding-bottom: $gutter-xlarge;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      img {
        margin-bottom: $gutter-large;
        grid-column: 1 / 3;
      }
      .search-for-us {
        grid-column: 1 / 3;
        font-size: $h1-text-size * 1.5;
        font-weight: 600;
        line-height: 1.3;
        margin-bottom: $gutter-large;
        span {
          display: block;
          font-weight: 400;
        }
      }
      .info-data {
        color: $docufiel-white;
        a {
          color: $docufiel-white;
          &:hover {
            color: $brand-secondary;
          }
        }
        &__title {
          font-size: $h1-text-size;
          font-weight: 600;
        }
      }
    }
    .twins-column--end {
      width: 100%;
      padding-right: 0;
      @include respond-to("medium and down") {
        padding: 0;
        height: rem(400px);
      }
    }
  }

</style>
