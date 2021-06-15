<template>
  <div class="plan" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
    <h2 class="plan-title">
      {{ todoArr.title }} ({{ countArr() }})
    </h2>
    <div
      v-for="todo in todoArr.todo"
      :key="todo.id"
      class="plan-card"
      draggable="true"
      @dragstart="onDragStart($event, todo)"
    >
      <h3 class="plan-card__title">
        Задача №{{ todo.id }}
        <span
          :class="{
            low: todo.lvl == 1,
            medium: todo.lvl == 2,
            height: todo.lvl == 3,
          }"
          >{{ todo.lvl }}</span
        >
      </h3>
      <div class="plan-card__description">{{ todo.description }}</div>
      <p class="plan-card__data">{{ todo.date }}</p>
      <div class="plan-card__wrapper">
        <button
          class="plan-card__btn plan-card__btn__min"
          :disabled="disablePlan"
          @click="inLeft(todoArr, todo.id)"
        >
          &lt;-</button
        ><button
          class="plan-card__btn"
          @click="
            $emit('editTask', { task: todo, id: todo.id, title: todoArr.title })
          "
        >
          Редактировать</button
        ><button
          class="plan-card__btn plan-card__btn__min"
          v-if="todoArr.title !== 'Готово'"
          @click="inRight(todoArr, todo.id)"
        >
          ->
        </button>
        <button
          v-else
          class="plan-card__btn plan-card__btn__min"
          @click="deletTask(todo.id, todoArr)"
        >
          x
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalEdit: false,
      editLvl: null,
      editDesc: null,
    };
  },
  props: {
    todoArr: Object,
  },
  methods: {
    // e, todo
    onDragStart(e, todo) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData(
        "todoId",
        this.todoArr.todo.map((e) => e.id).indexOf(todo.id)
      );
      e.dataTransfer.setData(
        "title",
        this.todoArr.title == "План"
          ? "plan"
          : this.todoArr.title == "Готово"
          ? "complited"
          : "progress"
      );
    },
    onDrop(e) {
      this.$emit("onDrop", {
        from: e.dataTransfer.getData("title"),
        id: e.dataTransfer.getData("todoId"),
        where:
          this.todoArr.title == "План"
            ? "plan"
            : this.todoArr.title == "Готово"
            ? "complited"
            : "progress",
      });
    },
    saveEdit(id) {
      for (let i = 0; i < this.todoArr.todo.length; i++)
        if (this.todoArr.todo[i].id === id) {
          this.todoArr.todo[i];
        }
    },
    inLeft(todoArr, id) {
      
      for (let i = 0; i < todoArr.todo.length; i++) {
        if (todoArr.todo[i].id == id) {
          this.$emit("inLeft", {
            title: todoArr.title,
            id: i,
          });
        }
      }
    },
    inRight(todoArr, id) {
      for (let i = 0; i < todoArr.todo.length; i++) {
        if (todoArr.todo[i].id == id) {
          this.$emit("inRight", {
            title: todoArr.title,
            id: i,
          });
        }
      }
    },
    countArr() {
      return this.todoArr.todo.length;
    },
    deletTask(id, todo) {
      todo.todo = todo.todo.filter((item) => item.id !== id);
      localStorage.setItem("complited", JSON.stringify(todo.todo));
    },
    toLeft() {
      if (this.todoArr.title === "Готово") {
        return true;
      } else {
        return false;
      }
    },
  },
  computed: {
    disablePlan() {
      if (this.todoArr.title === "План") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.plan {
  animation: spawn 1s ease none 1 normal forwards;
  width: 350px;
  padding: 10px 5px;
  background-color: var(--bg-card);
  min-height: 474px;
  margin-bottom: 40px;
  &-title {
    text-align: center;
    margin-bottom: 30px;
  }
  &-card {
    .disable {
      cursor: none;
    }
    width: 300px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: var(--bg-main);
    padding: 20px;
    margin-bottom: 15px;
    &__title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      span {
        border: 1px solid var(--text-main);
        border-radius: 50%;
        font-size: 16px;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        &.low {
          background-color: rgb(108, 179, 51);
        }
        &.medium {
          background-color: rgb(237, 240, 72);
        }
        &.height {
          background-color: rgb(233, 74, 74);
        }
      }
    }
    &__description,
    &__data {
      margin-bottom: 20px;
      word-wrap: break-word;
    }
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }
    &__btn {
      height: 30px;
      &__min {
        width: 30px;
      }
    }
  }
}
.long{
  background: var(--bg-cardr);

}
</style>
