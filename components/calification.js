Vue.component('calification', {
  template: `
        <div class="calification">
          <div class="stars-block">
            <form>
              <p class="stars">
                <input id="radio1" type="radio" name="estrellas" value="5" v-model="star"><label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" v-model="star"><label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" v-model="star"><label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" v-model="star"><label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" v-model="star"><label for="radio5">★</label>
              </p>
            </form>
          </div>
          <div>
            Hola {{name}} su calificación es de {{star}} estrellas
          </div>
          <div class="formulario">
            <form action="">
            <label for="comm">Ingrese un comentario:</label>
              <textarea id="comm" name="w3review" rows="4" cols="50">
              </textarea>
              <input type="submit" value="Submit">
            </form>
          </div>
        </div>
        `,
  data() {
    return {
      name: this.$route.params.name,
      star: this.$route.params.stars
    }
  },
  methods: {

  },
  computed: {

  }
})
