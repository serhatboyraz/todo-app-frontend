import Vue from "vue";
import ToDoList from "@/components/ToDoList";
import {expect} from 'chai';


describe('ToDoList.vue', () => {
    it('should list todos', () => {

        const container = document.createElement("div");
        const todoListComponent  = Vue.extend(ToDoList);
        const vm = new todoListComponent({
            propsData:{
                todoList:[{id:"AAA",title:"hello job"},{id:"BBB",title:"example todo"}],
            }
        });
        vm.$mount(container);

        expect(vm.todoList.length).to.equals(2);
        expect(vm.$el.querySelectorAll("p").length).to.equals(2)
    })
})