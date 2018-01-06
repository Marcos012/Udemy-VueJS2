Vue.component('lista-tarefas', {

  template: '<div><tarefa v-for="tarefa in tarefas"> {{tarefa.descricao}} </tarefa></div>', //o que vai montrar no HTML

  data() {
    return {
      tarefas: [
        { descricao: ' ao Banco no Brasil' },
        { descricao: ' gravar as aulas' },
        { descricao: ' para a aula de inglês' }
      ]
    }
  }


});


Vue.component('tarefa', {
  template: '<li> Ir   <b><slot></slot></b> </li>', //slot é substituido pelo conteudo que esta no HTML
});

new Vue({
  el: '#root'
});