<template>
  <section class="contact-section container">
    <div class="row">
      <div class="col-md-8">
        <div>
          <div>
            <h2>Over ons</h2>
            <p>Plezierig sporten in een ongedwongen sfeer onder gemotiveerde,
              vakbekwame leiding staat bij ons centraal. Wil je kennismaken met onze vereniging, kom dan
              gerust eens langs voor 2 gratis proeflessen.
            </p>
            <p>Wij bieden voor alle leeftijden volop sportieve mogelijkheden,
              zoals: <b>Kleuterdans</b>, <b>Hip Hop</b> en <b>Freerunning</b> voor jongens en meisjes, <b>Total Body Workout</b> en
              <b>Fysiogym</b> voor volwassenen en <b>Seniorengym</b> voor ouderen.
            </p>
          </div>

          <div>
            <div>
              <h3>Bestuur</h3>
              <div>
                <div>Voorzitter: <b>Suzanne Dubbeldam</b></div>
                <div>Penningmeester: <b>Femke van der Linden</b></div>
                <div>Secretaris: <b>Jellie Bangma</b></div>
              </div>
            </div>
            <div>
              <a href="https://steedsvoorwaarts.nl/wp-content/uploads/2021/11/Jaarverslag-2022_2023.pdf" target="_blank" class="btn btn-primary">
                Jaarverslag 2022-2023
              </a>
            </div>
          </div>
        </div>
        <div class="panel-grid-cell">
          <div class="so-panel widget widget_sow-editor panel-first-child panel-last-child">
            <div class="so-widget-sow-editor so-widget-sow-editor-base">
              <div class="siteorigin-widget-tinymce textwidget">
                <p>
                  <a class="link" href="https://www.google.com/maps/dir/?api=1&amp;destination=52.73151%2C5.02091&amp;fbclid=IwAR0WMEfqGF1d6mENVCbzGw-AUwnBzR_EDAb2ZZkTjqSS3-2HKMD9lz8wVPw" target="_blank" rel="nofollow noopener noreferrer">
                    Burgemeester P. Kromplein 1 1657 AA Abbekerk
                  </a>
                </p>
                <div id="panel-105-1-2-0" class="so-panel widget widget_sow-editor panel-first-child" data-index="5">
                  <div class="so-widget-sow-editor so-widget-sow-editor-base"><h3 class="widget-title">Contact</h3>
                    <div class="siteorigin-widget-tinymce textwidget">
                      <p style="text-align: left;">Postadres:<br>
                        Zuideinde 4<br>
                        1657 ED Abbekerk</p>
                      <p style="text-align: left;">E-mail: <a href="mailto:svwabbekerk1913@gmail.com">svwabbekerk1913@gmail.com</a>
                      </p>
                      <p style="text-align: left;">Bankrekening: NL36 INGB 0004638688</p>
                      <p style="text-align: left;">Facebook: <a href="http://www.facebook.com/steedsvoorwaartsAbbekerk">http://www.facebook.com/steedsvoorwaartsAbbekerk</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="su-gmap su-u-responsive-media-yes">
                  <iframe width="100%" height="400" src="//maps.google.com/maps?q=Burgemeester%20P.%20Kromplein%201%201657%20AA%20Abbekerk&amp;output=embed" title=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-grid-cell">
          <div class="so-panel widget widget_ocean_facebook widget_facebook_likebox panel-first-child panel-last-child">
            <iframe src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2FsteedsvoorwaartsAbbekerk&amp;width=500&amp;height=300&amp;colorscheme=light&amp;show_faces=true&amp;stream=true&amp;show_border=true&amp;header=false&amp;force_wall=false" scrolling="no" frameborder="0" style="border: none; overflow: hidden; width: 100%; height: 300px; background: #fff"></iframe>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <ContactInformation class="mb-5"></ContactInformation>
        <ContactForm class="my-5"></ContactForm>
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "@/lib/components/contact/ContactForm.vue";
import ContactInformation from "@/lib/components/contact/ContactInformation.vue";

export default {
  name: "ContactSection",
  components: { ContactInformation, ContactForm }
}
</script>

<style scoped>

</style>


