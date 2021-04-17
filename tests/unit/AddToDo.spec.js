import Vue from "vue";
import AddToDo from "@/components/AddToDo";
import {expect} from 'chai';
const sinon = require('sinon');


describe('AddToDo.vue', () => {

    let vm = null;
    beforeEach(() => {
        const container = document.createElement("div");
        const addoToDoComponent = Vue.extend(AddToDo);
        vm = new addoToDoComponent({});
        vm.$mount(container);
    })
    it('should be init', () => {
        expect(vm.title).to.equals('');
        expect(vm.$el.firstChild.tagName).to.equals('INPUT')
        expect(vm.$el.lastChild.tagName).to.equals('BUTTON')
    })

    it('should be emit when button clicked', () => {
        const spy = sinon.spy(vm, '$emit');
        vm.$el.lastChild.click();
        setTimeout(function(){
            expect(spy.called).to.be.true;
        }, 1000);

    })
})