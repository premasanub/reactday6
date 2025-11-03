export default function ReducerAction(val, action) {
    switch(action.type){
        case 'Add':
            return val + action.payload;
        case 'Sub':
            return val -action.payload;
        default:
            return val;
    }

}