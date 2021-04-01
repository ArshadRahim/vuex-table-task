/* eslint-disable no-undef */ /* eslint-disable prettier/prettier */
<template>
  <div class="home">
    <table>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>SR</th>
      <th>Matches Played</th>
      <th>Team</th>
      <th>#</th>
      <tr v-for="(player, index) in players" v-bind:key="index">
        {{
          player.id
        }}
        <td>{{ player.name }}</td>
        <td>{{ player.age }}</td>
        <td>{{ player.strikeRate }}</td>
        <td>{{ player.matchesPlayed }}</td>
        <td>{{ player.team }}</td>
        <th>
          <button @click="deletePlayer(index, 1)">
            <i class="fas fa-times-circle"></i>
          </button>
          <button type="edit" @click="editPlayer(index, 1)">
            <i class="fas fa-edit"></i>
          </button>
        </th>
      </tr>
    </table>

    <div class="model-container">
      <button class="openModelBtn" @click="openModel = true">
        Add Your Favourite Player
      </button>
      <transition name="fade" appear>
        <div class="model-overlay" v-if="openModel"></div>
      </transition>
      <transition class="trans" name="slide" appear>
        <div class="model" v-if="openModel">
          <form @submit.prevent="addNewPlayer">
            <input
              v-model="player.name"
              type="text"
              placeholder="Player Name"
              required
            />
            <input
              v-model="player.age"
              type="text"
              placeholder="Player Age"
              required
            />
            <input
              v-model="player.strikeRate"
              type="text"
              placeholder="Strike Rate"
              required
            />
            <input
              v-model="player.matchesPlayed"
              type="text"
              placeholder="Matches Played"
              required
            />
            <input
              v-model="player.team"
              type="text"
              placeholder=" Team"
              required
            />

            <button class="close-button" @click="openModel = false">
              Cancel
            </button>
            <button type="submit" class="add-button" @click="openModel = false">
              Add Player
            </button>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      openModel: false,
      player: {
        name: "",
        age: null,
        strike_rate: null,
        matches_played: null,
        team: ""
      }
    };
  },
  computed: {
    ...mapState(["players"])
  },

  methods: {
    ...mapActions(["addPlayer"]),

    addNewPlayer() {
      // console.log({ player: this.player });
      this.addPlayer(this.player);
      this.player = {
        name: "",
        age: null,
        strike_rate: null,
        matches_played: null,
        team: ""
      };
    },
    deletePlayer(index) {
      this.players.splice(index, 1);
    },
    editPlayer(index) {
      this.playes(this.player(index, 1));
    }
  }
};
</script>

<style>
table {
  border: 1px solid slategray;
  width: 50%;
  margin: auto;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.3s ease-out;
}
th {
  /* height: 30px; */
  line-height: 40px;
  font-size: 20px;
  /* border-bottom: 3px solid rgb(11, 74, 136); */
}
tr {
  line-height: 40px;
  background-color: #58b98e;
  border-bottom: slategray 1px solid;
  color: white;
}
td {
  border-right: slategray 1px solid;
  border-left: slategray 1px solid;
  border-bottom: slategray 1px solid;
  background-color: #6bd3a4;
}

button {
  display: inline;
  width: 40px;
  min-height: 26px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #41a075;
  color: white;
  margin: 4px;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.3);
  transition: 0.4s ease-out;
}
button:hover {
  background-color: #2e7957;
  font-size: 14px;
}

.openModelBtn {
  position: relative;
  left: 17%;
  width: 200px;
  height: 30px;
  margin: 10px;
}

.model-container {
  /* position: relative; */
  /* top: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  /* overflow-x: hidden; */
}
.model-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(4, 0, 0, 0.878);
  z-index: 9;
}
.model {
  position: fixed;
  top: 16%;
  padding-top: 2em;
  /* margin-top: -25em; */
  /* margin-right: 15em; */
  z-index: 10;
  width: 410px;
  height: 340px;
  background-color: rgba(0, 0, 0, 0.4);
  border: #41a075 1px solid;
}
.model input {
  margin: 10px;
  height: 30px;
  width: 300px;
  outline: none;
  border: none;
}
.model input::placeholder {
  padding-left: 4px;
}
.trans {
  width: 60%;
  height: 60%;
  margin: auto;
  border: green 1px solid;
}

.close-button {
  width: 140px;
  height: 30px;
  margin-right: 20px;
  /* position: relative;
  bottom: 0; */
  /* right: 0; */
  z-index: 10;
}

.add-button {
  width: 140px;
  height: 30px;
  /* position: relative;
  top: 0;
  left: -100; */
  z-index: 10;
}

button i {
  margin-left: 0.2em;
  margin-top: 2px;
  font-size: 20px;
}
</style>
