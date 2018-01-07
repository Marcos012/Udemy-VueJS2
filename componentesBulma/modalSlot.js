Vue.component('modal', {
  template: `
        <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
          
          
            <header class="modal-card-head">
              <p class="modal-card-title">
                <slot name="header"></slot>
               </p>
              
              <button class="delete" @click="$emit('meuclickfechar')"></button>
              
            </header>
            
            
            <section class="modal-card-body">
              <!-- Se não tiver texto no Html aparece esse slot -->
              <slot>Se eu escreve algo na tag slot padrão</slot>
            </section>
            
            <footer class="modal-card-foot">
              
              <!-- <slot name="footer"> <b>Footer</b> </slot> -->
              <button class="button is-success" @click="$emit('meuclickfechar')">Salvar Alterações</button>

            </footer>
          </div>
        </div>
    `

});


new Vue({
  el: '#root',
  data: {
    showModal: false
  }
});