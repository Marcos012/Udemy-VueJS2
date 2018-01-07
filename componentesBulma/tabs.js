Vue.component('tabs', { //tag personalizada do Html

  template: `

   <div>
    <div class="tabs">
      <ul>
        <!-- Recebe o active se a tab estiver selecionada -->
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive}"> 
         <a href="#" @click="selectTab(tab)">{{ tab.name}}</a> 
        </li>
        
      </ul>
    </div>
    
    <div class="tabs-detail">
      <slot></slot>
    </div>
    
  </div>
  `,

  data() {
    return {
      tabs: [] //cria o tabs
    };
  },

  created() {
    this.tabs = this.$children; //joga no console os filhos do componente
  },

  methods: {
    selectTab(selectedTab) { //metodo que seleciona a tab
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name); //verificação se nome da tab é igual ao nome da tab selecionada
      });
    }
  }

});

Vue.component('tab', { //tag personalizada do Html

  props: {
    name: {required: true},
    selected: {default: false}
  },

  data(){
    return {
       isActive:  false //clia uma variavel
    };
  },

  mounted() {
    this.isActive = this.selected; //modifica o valor do data() e recebe o valor da props
  },

  template: `
    <div v-show="isActive"><slot></slot></div>
  `

});

new Vue({
  el: '#root'
});