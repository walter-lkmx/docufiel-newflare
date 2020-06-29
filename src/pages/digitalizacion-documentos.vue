<template>
  <default-layout>
    <base-page>
      <section class="content">
        <slim-column>
          <g-image class="image-cover" src="~/assets/images/services/sample1.jpg" alt="Digitalización"></g-image>
          <h2>Digitalización de documentos</h2>
          <p>La digitalización de documentos es la conversión de un documento físico o de papel en un archivo
            o imagen digital mediante el uso de tecnología.</p>
          <p>Este proceso permite el almacenamiento electrónico de la información; por lo que, podemos
            gestionar y consultar inmensos volúmenes de documentos convertidos en imágenes.</p>
          <p>La digitalización de documentos se dirige principalmente a las empresas, pero no son las únicas
            que pueden aprovechar sus beneficios: Instituciones educativas, financieras, gubernamentales, hoteles,
            industrias y todo aquel que busque disminuir o eliminar el uso del papel para almacenar los archivos e
            información confidencial.<br>
            Beneficios de la digitalización de documentos</p>
          <ul>
            <li>Permite el almacenamiento de la información en los sistemas en nube, que ofrecen aún mayor
              seguridad que el almacenamiento en la memoria interna del ordenador o de los portables como los USB.</li>
            <li>Al contar con un almacenamiento en nube, la información queda accesible desde cualquier
              lugar, ya que basta con tener la contraseña para consultarla; esto ha beneficiado al trabajo en línea y
              permite a los altos ejecutivos estar al tanto de la empresa, aunque se encuentren fuera de la ciudad o
              país.
            </li>
            <li>Elimina los riesgos de deterioro o pérdida de la información, ya que se encuentra segura en
              los sistemas de nube; podemos olvidarnos de los tiempos en que una interrupción eléctrica nos hacía perder
              horas de trabajo.</li>
            <li>Ahorro en espacio físico, ya que no será necesario contar con archiveros pesados, que guardan
              miles de documentos que además corren el riesgo de deteriorarse debido a las condiciones climatológicas o
              a
              accidentes como un incendio o inundación.</li>
            <li>Accesibilidad a la información: con un documento impreso, solo una persona puede leerlo,
              mientras que la información en nube puede compartirse, consultarse e incluso puede ser trabajada por
              varias
              personas al mismo tiempo y los cambios se efectúan automáticamente y los archivos son más fáciles de
              encontrar.</li>
            <li>Ahorro en suministros de papel, tinta, copias, impresiones, mobiliario para archivar
              información y en tiempo, ya que es mucho más rápido localizar la información.</li>
            <li>Durabilidad eterna, ya que los archivos digitales no se dañan, ni arrugan ni pierden su
              nitidez.</li>
            <li>Seguridad contra el robo de información. Aunque los empleados puedan acceder, es posible
              limitar los archivos, negar accesos y verificar los cambios realizados, con lo que el control de datos
              incrementa.</li>
          </ul>
          <h2>TIPOS DE DIGITALIZACIÓN</h2>
          <g-image src="~/assets/images/services/sample4.jpg" alt="Digitalización"></g-image>
          <p>Tipos de digitalización Contamos con la experiencia, los recursos tecnológicos y humanos
            altamente capacitados, para ofrecerte toda la gama de servicios en la digitalización masiva de documentos.
          </p>
          <h4>Digitalización de documentos y planos</h4>
          <p>Digitalizamos todos los tamaños de documentos en forma masiva, como carta, oficio y doble carta,
            así como tamaños especiales, ya sean bouchers, cheques, tickets, boletos, entre otros. Así mismo, nos
            especializamos en la digitalización de todo tipo de planos arquitectónicos, industriales, eléctricos, entre
            otros.</p>
          <h4>
            Digitalización de libros, fotografías, acervos históricos y culturales</h4>
          <p>Contamos con tecnología especial para la digitalización de libros y acervos culturales, cuidamos
            la conservación de documentos históricos y valiosos. En nuestros procesos de digitalización de libros,
            utilizamos equipos de punta que abren en un ángulo de 90°, evitando que los libros se maltraten o deshojen.
            Las
            fotografías las generamos como imágenes nítidas, con resolución de 600 a 1,200 dpi’s.</p>
          <h4>Servicios de OCR</h4>
          <p>Nos especializamos en el “Reconocimiento Optico de Caracteres” (OCR, Optical Character
            Recognition). Nos encargamos de extraer imágenes provenientes de la información de textos y tablas, las
            guardamos en formato “.txt” para que puedas editarlas. Nuestros procedimientos incluyen el guardar imágenes
            escaneadas de libros en forma de texto, sin hacerlo de modo manual, por lo que evitamos el capturar en un
            editor
            de texto.</p>
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
