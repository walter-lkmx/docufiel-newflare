<template>
  <default-layout>
    <base-page>
      <section class="content">
        <slim-column>
          <g-image class="image-cover" src="~/assets/images/services/sample2.jpg" alt="Digitalización"></g-image>
          <h2>Valuación comercial</h2>
          <p>
            El valor de mercado es el que se determina en estos reportes, considerando a éste como el que dos agentes
            con información simétrica tomarían para los bienes objeto del intercambio u otros bienes en similares
            condiciones de uso.
          </p>
          <p>

            El valor de mercado parte de la premisa de continuación de operaciones, en la que se supone que los activos
            siguen llevando a cabo la actividad para la que fueron adquiridos al inicio de su vida útil, considerando el
            uso y gasto provocado por su uso frecuente.
          </p>
          <p>
            <strong>DOCUFIEL</strong> busca la información disponible y consulta sus propias bases de datos para aproximar con toda la
            certeza posible, los cálculos al valor de mercado real de los ítems sujeto, ajustándose a la metodología más
            efectiva.
          </p>

          <h2>
            Valuación de activos fijos
          </h2>
          <p>
            Una correcta valoración contable de los activos en el balance de las compañías es clave desde un punto de
            vista financiero y fiscal.
          </p>
          <p>
            Los auditores requieren anualmente la valoración de los activos clasificados como activos fijos, inversiones
            inmobiliarias o existencias para determinar la imagen fiel del patrimonio de la empresa al cierre de cada
            ejercicio. Esta revisión de los activos puede tener, además, consecuencias desde el punto de vista fiscal,
            ya que los deterioros (pérdidas de valor) registrados en las existencias son gastos fiscalmente deducibles.
            Igualmente ocurriría en el caso de posibles revalorizaciones de activos con la reversión de deterioros
            pasados.

          </p>
          <p>
            <strong>DOCUFIEL</strong> emite valoraciones conforme a las distintas normativas contables, aplicando la metodología más
            adecuada en cada caso y las normas internacionales de información financiera (NIIF / IFRS).
          </p>

          <p>
            Se trata de un servicio no específicamente inmobiliario, dirigido a compañías de cualquier sector que posean
            bienes. Valuación de activos fijos bajo boletín c-15 En enero de 2004 entró en vigor en el país el boletín
            C-15, referido al deterioro en el valor de los activos de larga duración y su disposición, donde existe un
            deterioro de activos que lleva a un beneficio económico futuro o, lo que es lo mismo, al valor de
            recuperación cuando los usos son menores a valor neto en libros.
          </p>

          <p>
            <strong>DOCUFIEL</strong>, a través del conocimiento y aplicación del boletín emitido por el Instituto de Contadores Públicos
            A.C., es capaz de determinar los activos en el balance general señalando la diferencia entre el valor neto
            en libros y el precio neto de venta.
          </p>
        </slim-column>
      </section>

    </base-page>
  </default-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Digitalización de Documentos - DOCUFIEL'
  }
}
</script>

<style lang="scss" scoped>
.content {
  img {
    margin-bottom: $gutter-large;
    &.image-cover {
      margin-top: $gutter-large;
    }
  }
  h2 {
    margin-top: $gutter-large;
  }
  li {
    color: $docufiel-grey;
    list-style-type: circle;
    margin-bottom: $gutter;
    margin-left: $gutter;
  } 
}

</style>
