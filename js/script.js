// DESCRIZIONE:
// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

// Istanza Vue Js
var app = new Vue({
  el: '#app',
  data: {
    esc: "fas fa-times",
    logo: "https://img.icons8.com/clouds/2x/todo-list.png",
    item: "",
    list: ["Portare a passeggio Daisy", "Andare a fare la spesa"],
    credits: "Powered by Boolean Careers",
},

  methods: {
       add: function() {
        if(this.item === "") {
          alert("Attenzione! Non hai inserito nessuna attività");
        }
        if (this.list.includes(this.item)) {
          alert("Attenzione! Hai già inserito questa attività");
          this.item = "";
        }
        else {
          this.list.push(this.item);
          this.item = "";
        }
       },

      remove: function(index){
         this.list.splice(index, 1);
        if(this.list.length <= 0) {
          alert("Complimenti, hai completato tutte le tue attività!")
        }
       },
     },
});
