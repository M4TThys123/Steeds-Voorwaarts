<template>
  <section class="contact-section container">
    <div class="row">
      <div class="col-md-8">
        <div>
          <h2>Over ons</h2>
          <p>
            Plezierig sporten in een ongedwongen sfeer onder gemotiveerde,
            vakbekwame leiding staat bij ons centraal. Wil je kennismaken met
            onze vereniging, kom dan gerust eens langs voor 2 gratis proeflessen.
          </p>
          <p>
            Wij bieden voor alle leeftijden volop sportieve mogelijkheden, zoals: 
            <b>Kleuterdans</b>, <b>Hip Hop</b> en <b>Freerunning</b> voor jongens en meisjes, 
            <b>Total Body Workout</b> en <b>Fysiogym</b> voor volwassenen en 
            <b>Seniorengym</b> voor ouderen.
          </p>
        </div>

        <div>
          <h3>Bestuur</h3>
          <div>
            <p>Voorzitter: <b>Suzanne Dubbeldam</b></p>
            <p>Penningmeester: <b>Femke van der Linden</b></p>
            <p>Secretaris: <b>Jellie Bangma</b></p>
          </div>
        </div>

        <div class="my-5">
          <p>
            <a class="link" href="https://www.google.com/maps/dir/?api=1&amp;destination=52.73151%2C5.02091" target="_blank" rel="nofollow noopener noreferrer">
              Burgemeester P. Kromplein 1 1657 AA Abbekerk
            </a>
          </p>

          <div>
            <GenaricButon
              class="mt-4"
              icon="bx bxs-file-pdf"
              text="Jaarverslag 2022-2023"
              link="https://steedsvoorwaarts.nl/wp-content/uploads/2021/11/Jaarverslag-2022_2023.pdf"
            />
          </div>

          <h3 class="mt-4">Contact</h3>
          <div>
            <p class="text-left">
              Postadres:<br />
              Zuideinde 4<br />
              1657 ED Abbekerk
            </p>
            <p class="text-left">
              E-mail: 
              <a href="mailto:svwabbekerk1913@gmail.com">svwabbekerk1913@gmail.com</a>
            </p>
            <p class="text-left">Bankrekening: NL36 INGB 0004638688</p>
            <p class="text-left">
              Facebook: 
              <a href="http://www.facebook.com/steedsvoorwaartsAbbekerk">http://www.facebook.com/steedsvoorwaartsAbbekerk</a>
            </p>
          </div>

          <div class="my-4">
            <iframe
              width="100%"
              height="400"
              src="//maps.google.com/maps?q=Burgemeester%20P.%20Kromplein%201%201657%20AA%20Abbekerk&amp;output=embed"
              title="Google Maps"
            ></iframe>
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
import GenaricButon from "@/lib/components/elements/GenaricButon.vue";

export default {
  name: "ContactSection",
  components: { GenaricButon, ContactInformation, ContactForm },
};
</script>

<style scoped></style>
