import item from './item.js';
let items = [];
let hideCheckedItems = false;

const findById = function (id){
    store.items.find(ele => {
        return store.items.ele;
    })
};

const addItem = function (name) {
    try {
        item.validateName(name);
        const newItem = item.create(name)
        this.items.push(newItem);        
    } catch (error) {
        console.log(`Cannot add item: ${error.message}`);

    }
};

const findAndUpdateName = function (id,newName){
    try{
        item.validateName(newName);
        item.findById();
    } catch (error) {
        console.log(`cannot update name ${error.message}`);
    }


}

const findAndToggleChecked = function (id){
    this.findById();
    render();
}

const findAndDelete = function(id){
    const index = findById(id);
    items.splice(index,1);
  };



export default {
    items, 
    hideCheckedItems, 
    addItem, 
    findById, 
    findAndDelete, 
    findAndToggleChecked, 
    findAndUpdateName
};


