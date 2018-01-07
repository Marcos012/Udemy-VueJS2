Vue.component('message', {
  props: ['title', 'body'], //array contento as prepriedades

  data() {
    return {
      visible: true
    };
  },

  template: ` 
        <article class="message" v-show="visible">
            <div class="message-header">
            <!-- componente -->
              <p>{{title}} - CR-MESSAGE </p>
              
              <!--<button class="delete" @click="hideMessage"></button>-->
              <button class="delete" @click="visible = false"></button>
            </div>
            <div class="message-body">
            <!-- componente -->
              {{body}} 
            </div>
        </article>
    `,
  //Usar crase é necessário
  methods: {
    hideMessage(){
      this.visible = false;
    }
  }


});


new Vue({
  el: '#root'
});