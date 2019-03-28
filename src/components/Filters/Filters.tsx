import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

@observer
class Filters extends Component{  

    constructor(props: {}) {
        super(props);
        store.getCategories();
    }

    render(){
        return <div>
            <h3>Filters</h3>
            {store.departments && store.departments.map(( dep ) => {
                return <a key={dep.department_id} 
                    href={`/department/${dep.name}`}>
                    {dep.name}
                </a>;
            })}

            <h3>categories</h3>    
            {store.categories && store.categories.map(( cat ) => {
                return <a key={cat.department_id} 
                    href={`/department/${cat.name}`}>
                    {cat.name}
                </a>;
            })}

            {/*
            <button onClick={this.props.onAdd}>
                Ver más
            </button>*/
            }
        </div>
    }
}

export default Filters;