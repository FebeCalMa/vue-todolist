console.log("JS OK!");

const task = [
  {
    text: "Spesa",
    done: true,
  },
  {
    text: "Musica",
    done: false,
  },
  {
    text: "Gioco",
    done: true,
  },
  {
    text: "Bagno al mare",
    done: true,
  },
  {
    text: "Matrimonio",
    done: false,
  },
  {
    text: "Fuggire di casa",
    done: true,
  },
];

const app = new Vue({
  el: "#todo-app",
  data: {
    task,
  },
  methods: {
    taskClicked(index) {
      this.task[index].done = true;
    },
    deleteTask(index) {
      const filteredArray = this.task.filter((item, i) => {
        return index !== i;
      });
      console.log(filteredArray);
    },
  },
});
