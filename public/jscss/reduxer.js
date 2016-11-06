import { combineReducers, createStore } from 'redux';

class ReDux {
    visibilityFilter(state = 'SHOW_ALL', action) {
        switch (action.type) {
            case 'SET_VISIBILITY_FILTER':
                return action.filter
            default:
                return state
        }
    }

    todos(state = [], action) {
        switch (action.type) {
            case 'ADD_TODO':
                return [
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            case 'COMPLETE_TODO':
                return state.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: true
                        })
                    }
                    return todo
                })
            default:
                return state
        }
    }
    runRe() {
        const visibilityFilter = this.visibilityFilter;
        const todo = this.todos;
        let reducer = combineReducers({ visibilityFilter, todo});
        let store = createStore(reducer);
        console.log(store.getState());
    }
}
let k = new ReDux();
k.runRe();