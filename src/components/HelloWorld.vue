<template>
<div class="hello">
  <!-- <ul>
    <button v-on:click="playSound('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3')" class="tombol" type="button" name="button"></button><br />
    <button v-on:click="alertDisplay">Click Me!</button><br/>
    <button type="button" v-on:click="notify">Show notification</button>
  </ul> -->
  <!-- <div class="main-block">
      <form action="/">
        <h1>Reach Us</h1>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name">
          <input type="text" name="name" placeholder="Email">
          <input type="text" name="name" placeholder="Phone number">
        </div>
        <button type="submit" @click="notify" href="/">Submit</button>
      </form>
    </div> -->
    <div class="form-group">
      <h1>Todo List</h1>
      <input type="text" style="margin-left:10px;" class="form-control" name="todo" placeholder="todo" id="todo" v-model="todo">
      <button class="btn btn-primary" style="float:left; margin-left:10px; margin-bottom:10px; margin-top:10px" @click="addTodo()">Add</button>

      <div class="form-group">
        <table class="table" v-if="todos.length>0">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Todo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-for="(todo, index) in todos" :key="index">
            <td scope="row">{{index+1}}</td>
            <td >{{todo}}</td>
            <td>
              <button class="btn btn-danger" @click="deleteTodo(index)">Delete</button>
            </td>
          </tbody>
        </table>
        <h1 v-else>Todo Empty</h1>

      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data (){
    return {
      todos: [],
      todo:""
    }
  },
  methods: {
    playSound(sound) {
      // alert("Sukses")
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    alertDisplay() {
        this.$swal('Heading', 'this is a Heading', 'success');
      },
      notify () {
      this.$notification.show('Success', {
        body: 'An email has been sent'
      }, {})
    },
    addTodo(){
      this.todos.push(this.todo);
      this.todo = ""
      this.$notification.show('Success', {
        body: 'Todo added'
      }, {})
    },
    deleteTodo(index){
      this.todos.splice(index, 1);
      this.$notification.show('Success', {
        body: 'Todo deleted'
      }, {})
    },
    created () {
      this.loadLocalStorage();
    },
    loadLocalStorage(){
      const ls = JSON.parse(localStorage.getItem("todos"))
      if (ls == null) {
        return;
      }
      this.todos = ls;
    }
  },
  watch: {
    todos(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
min-height: 100%;
padding: 0;
margin: 0;
font-family: Roboto, Arial, sans-serif;
font-size: 14px;
color: #666;
}
/* h1 {
margin: 0 0 20px;
font-weight: 400;
color: #1c87c9;
} */
p {
margin: 0 0 5px;
}
.main-block {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
background: #1c87c9;
}
form {
padding: 25px;
margin: 25px;
box-shadow: 0 2px 5px #f5f5f5;
background: #f5f5f5;
}
.fas {
margin: 25px 10px 0;
font-size: 72px;
color: #fff;
}
.fa-envelope {
transform: rotate(-20deg);
}
.fa-at , .fa-mail-bulk{
transform: rotate(10deg);
}
/* input, textarea {
width: calc(100% - 18px);
padding: 8px;
margin-bottom: 20px;
border: 1px solid #1c87c9;
outline: none;
}
input::placeholder {
color: #666;
} */
button:hover {
background: #2371a0;
}
@media (min-width: 568px) {
.main-block {
flex-direction: row;
}
.left-part, form {
width: 50%;
}
.fa-envelope {
margin-top: 0;
margin-left: 20%;
}
.fa-at {
margin-top: -10%;
margin-left: 65%;
}
.fa-mail-bulk {
margin-top: 2%;
margin-left: 28%;
}
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
