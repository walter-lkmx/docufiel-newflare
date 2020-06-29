<template>
  <default-layout>
    <base-page>
      <section class="content">
        <slim-column>
          <g-image class="image-cover" src="~/assets/images/services/sample3.jpg" alt="Digitalización"></g-image>
          <h2>Inventario de activos</h2>
          <p>¿Conoce usted el inventario y los activos de su empresa?
            Para una eficaz gestión de los activos de una compañía, es necesario identificar y tener en todo momento la
            información precisa de los bienes que lo componen, disponiendo de sus principales datos como son:</p>
          <ul>
            <li>Descripción</li>
            <li>Ubicación física</li>
            <li>Marca</li>
            <li>Modelo</li>
            <li>Serie (si existe)</li>
            <li>Componentes</li>
            <li>Registro fotográfico</li>
            <li>Código activo fijo (Código de barra)</li>
            <li>Categorías – sub categoría</li>
            <li>Usuario</li>
            <li>Atributos especiales</li>
          </ul>
          <p>Tener un buen y completo inventario brinda información contable confiable para la toma de decisiones y
            permite establecer planes de optimización y gestión de usos. El inventario se puede realizar sobre todos los
            activos identificables de la compañía: propiedades inmobiliarias, instalaciones, maquinarias, equipos de
            cómputo, muebles y útiles, accesorios y enseres diversos, obras civiles, existencias, entre otros.</p>
          <p>Nuestro sistema informático de control de activo nos permite configurar (flexiblemente) las terminales para
            una exhaustiva toma de inventario. Entregamos la información de acuerdo a los parámetros solicitados por
            nuestro cliente.</p>
          <p>Dentro de nuestros servicios ofrecemos diferentes alcances de servicios en activo fijo, adecuándonos a las
            necesidades y requerimientos de nuestros clientes:</p>
          <ul>
            <li>Levantamiento de activo fijo</li>
            <li>Inventario de activo fijo</li>
            <li>Identificación de activo fijo (etiqueta o placa código de barra)</li>
            <li>Mantenimiento de activo fijo</li>
            <li>Conciliación de activo fijo</li>
            <li>Auditoría de activo fijo físico</li>
            <li>Tipos de inventario y alcances</li>
            <li>Inventario sin código (identifica cada bien bajo sus datos básicos: nombre, marca, etc., y se
              ordena según los procesos internos de la empresa o en base de datos)</li>
            <li>Inventario codificado</li>
            <li>Gestión de inventario</li>
            <li>Identificación técnica (nombre, marca, serie si existe, entre otros)</li>
            <li>Ubicación física del bien dentro de la propiedad</li>
            <li>Estado de conservación en que se encuentra el bien</li>
            <li>Valor</li>
            <li>Respaldo fotográfico de cada elemento</li>
            <li>Codificación de cada elemento inventariado en una base de datos, mediante placa, etiqueta
              convencional o RFID</li>
          </ul>
          <h2>Etiquetado y plaqueo de activos</h2>
          <p><strong>DOCUFIEL</strong> llevará a cabo la toma de inventario físico a través de la captura directa,
            que consiste en recabar datos y registrar las principales características de los activos sujeto por medio de
            una
            inspección en su lugar de operación, permitiendo además una homogeneización de la información en lo
            concerniente a su
            descripción y consignación de características físicas, identificando con etiquetas y/o placas hechas ex
            profeso, los
            activos que hayan sido definidos como rotulables, para un mayor control del activo fijo. El material de
            rotulación (ya
            sea solicitado por el cliente o propuesto por <strong>DOCUFIEL</strong>) estará diseñado para que no exista
            la
            posibilidad de generar confusiones, duplicidades o cualquier otro tipo de información equivocada.</p>
          <h2>Conciliación contable</h2>
          <p>Es el proceso que cruza la información generada en el levantamiento de inventario físico, con los
            datos disponibles en la base contable de una empresa. La intención de la misma es actualizar los registros
            que se
            encuentran efectivos, así como sus valores y depurar la base contable de sobrantes que no perjudiquen en
            valor y
            resultado a la organización sujeto.
            <strong>DOCUFIEL</strong> ofrece este servicio que mejora sustancialmente las operaciones de las
            organizaciones,
            depurando los registros y reflejando la realidad de las posesiones de sus activos fijos. Al mantener en
            estas
            condiciones la información, los resultados de las empresas, así como la toma de decisiones de negocios, se
            apoyan en
            cimientos sólidos y permiten definir con mayor precisión los objetivos de crecimiento y expansión.
            El equipo de <strong>DOCUFIEL</strong> ofrece este servicio acompañado de una consultoría profesional, que
            le ofrecerá
            la mejor opción para cada caso, en cada industria particular de manera objetiva e imparcial.</p>
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
