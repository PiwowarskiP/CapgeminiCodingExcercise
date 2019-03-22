//Script By PP
/*
    TODO:
        format backupu
        CSS - wygląd + rozmieszczenie (podium)
        Strona mobilna
*/
Vue.use(VueDraggable.default);

new Vue({
    data() {
      return {
        tasks: (function() {
            //TODO - sprawdzamy i importujemy z sessionStorage
            //if(sessionStorage.getItem("listsBackup")) {
            if(false) {
                let x= sessionStorage.getItem("listsBackup")[0];
                return x;
                
                console.log("backup działa: " + x);
            }
            else {
                let tasks = [];
                for(let i=0; i<15; i++) {
                tasks.push("Task " + (i+1));
                }
                return tasks;
            }
        }()),

        options: {
            dropzoneSelector: 'ul',
            draggableSelector: 'li',
            onDrop(event) {
                //zapisujemy stan wszystkich <ul> do sessionStorage
                //TODO - zmienic format eksportu
                let elem = document.getElementsByTagName('ul');
                let listsBackup = [];
                for(let i=0; i<4; i++) {
                    listsBackup.push(elem[i].innerHTML);
                }
                
                console.log("Drop Event 0 - " + listsBackup[0]);
                console.log("Drop Event 1 - " + listsBackup[1]);
                console.log("Drop Event 2 - " + listsBackup[2]);
                console.log("Drop Event 3 - " + listsBackup[3]);
                sessionStorage.setItem("listsBackup", listsBackup);
            },
        }
      };
    },

    methods: {
        clearSession() {
            sessionStorage.clear();
        }
    }
  }).$mount("#app");

    function prepareTasks() {
      let tasks = [];
      for(let i=0; i<15; i++) {
          tasks.push("Task " + (i+1));
      }
      return tasks;
  }


console.log("JS compiles");