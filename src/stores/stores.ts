import { observable } from 'mobx';

import api from '../utils/api';

export type depsArray = {name: string, department_id: number}[];
export type catsArray = {name: string, category_id: number, department_id: number}[]; 

class Store {

    @observable departments:  depsArray|null = null;
    @observable categories: catsArray|null = null;

    constructor() {
        //this.departments = observable.box(null);
    }

    getDepartments(){
        var callback = (result: depsArray) => {
            console.log('Departamentos cargadas', result);
            //this.departments.set(result);
            this.departments = result;
        }
        api.getDepartments(callback);
    }

    getCategories() {
        api.getCategories( (result: catsArray) => {
            console.log('Categorías cargadas', result);
            this.categories = result;
        });
    }
}

const store = new Store();

export default store;