@@ -0,0 +1,46 @@
<template>
  <div class="part1 container" id="why" style="
    max-width: 1200px;
">
    <h2>Why Realtime Colors?</h2>
    <div class="part1-cards">
      <div class="part1-card">
        <svg width="117" height="117" viewBox="0 0 117 117" fill="none" style="z-index: 5;" class="part1-card-img">
          <circle cx="58.5" cy="58.5" r="58.5" fill="var(--secondary)"></circle>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M89.4669 8.85912L58.0465 63.9419L2.44746 41.7023C9.66585 17.5806 32.0298 0 58.5 0C69.872 0 80.4861 3.24483 89.4669 8.85912Z"
                fill="var(--accent)" fill-opacity="0.6"></path>
          <path d="M81.5 22.5L57.1395 64.8489L32 53.5" stroke="var(--primary)" stroke-width="7.25581"></path>
        </svg>
        <p class="subtitle highlight">Saves time</p>
        <p>No need to spend hours implementing different variations of colors. Decide right away!</p>
        <div class="part1-card-bg"></div>
      </div>

      <div class="part1-card">
        <svg width="112" height="114" viewBox="0 0 112 114" fill="none" style="z-index: 5;" class="part1-card-img">
          <rect width="58" height="58" fill="var(--secondary)"></rect>
          <rect x="69" y="25" width="33" height="33" fill="var(--accent)" fill-opacity="0.6"></rect>
          <rect x="69" y="71" width="43" height="43" fill="var(--primary)" fill-opacity="0.2"></rect>
          <rect x="20" y="70" width="38" height="39" fill="var(--primary)"></rect>
        </svg>
        <p class="subtitle highlight">It’s Realistic</p>
        <p>Color Palettes make it hard to pick. This tool distributes the colors on a real website.</p>
        <div class="part1-card-bg"></div>
      </div>

      <div class="part1-card">
        <svg width="179" height="89" viewBox="0 0 179 89" fill="none" style="z-index: 5;" class="part1-card-img">
          <rect y="26" width="154" height="63" fill="var(--accent)" fill-opacity="0.6"></rect>
          <path d="M142 15.5V0" stroke="var(--primary)" stroke-width="8"></path>
          <path d="M163 34L178.5 34" stroke="var(--primary)" stroke-width="8"></path>
          <path d="M158 19.5L170.5 7" stroke="var(--primary)" stroke-width="8"></path>
          <path d="M63 54L74.5 65L95.5 44" stroke="var(--primary)" stroke-width="8"></path>
        </svg>
        <p class="subtitle highlight">It’s simple</p>
        <p>Push a few buttons, and there you have it! Your very own branding colors, ready to export.</p>
        <div class="part1-card-bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NieuwsComponent02',
  data() {
    return {
      services: [
        {
          id: 3,
          name: 'Noord-Holland actief',
          description: 'Doe jij mee met Noord-Holland actief? Check de link en schrijf je gratis in voor een, twee of drie activiteiten.',
          image: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/333973345_763384598325385_1235472419820287753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rX6kYF3NXBAAX-A5wO9&_nc_ht=scontent-ams2-1.xx&oh=00_AfC4qEPgkHZXn2tXcKH9AQLHTQt94Oz6Xxh0E7Ia56TyiA&oe=6498ABA5',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 2,
          name: 'Grote clubactie!',
          description: 'Yeah, wij doen dit jaar weer mee aan de grote clubactie! \n' +
              'Vanaf zaterdag 24 september verkopen onze leden de loten. ',
          image: 'https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/307583568_2281284152038408_4051331112993569346_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4YM-l8W6zaEAX_ru9si&_nc_ht=scontent-ams2-1.xx&oh=00_AfCTovrRIOO4UJkrlkd_D1KCxHfHl26CImR5WGBrbhcCMw&oe=64985C6C',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
        {
          id: 4,
          name: 'Vacature',
          description: 'Funmoves en bootacmp instructeur gezogt',
          image: 'https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/300395677_2259925674174256_3680472506102973150_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=UUfF3GEwpnAAX-zd5SL&_nc_oc=AQmbQzYwf3uCTz-vUg9jFqqMAHScHnzq2Q6Kbr4MamHSNSq2mCaebGv62m4mbLdINBE&_nc_ht=scontent-ams4-1.xx&oh=00_AfBxHbNpG4ZqD0-PP9Jl4SpG2no4_Ui-oBGNcMQi9jMQGA&oe=6498DBCF',
          url: 'https://www.facebook.com/steedsvoorwaartsAbbekerk/'
        },
      ]
    }
  }
}
</script>

<style>
.part1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
}

h2 {
  font-size: 32px;
  letter-spacing: -2px;
  font-weight: 700;
  margin: 0;
}

.part1-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.part1-card-img {
  height: 50%;
}

.highlight {
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 24px;
}

p{
  font-size: 18px;
  letter-spacing: normal;
  line-height: 150%;
}

.part1-card-bg {
  background-color: #1a1919;
  opacity: 5%;
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 6px;
  flex: 1;
  top: 0;
  left: 0;
}
</style>