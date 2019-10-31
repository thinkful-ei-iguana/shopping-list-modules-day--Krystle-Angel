import item from './item.js';
let items = [];
let hideCheckedItems = false;

const findById = function (id){
    let returnItem = items.find(ele => {
        return ele.id === id;
    })
    return returnItem
};

 const addItem = function (name) {
    try {         
        item.validateName(name);
        const newItem = item.create(name);
        this.items.push(newItem);        
     } catch (error) {
         console.log(`Cannot add item: ${error.message}`);

     }
 };

const findAndToggleChecked = function (id) {
    const item = items.find(item => item.id === id);
    item.checked = !item.checked;
};


const findAndUpdateName = function (id,newName){
    try{
        item.validateName(newName);
        item.findById();
    } catch (error) {
        console.log(`cannot update name ${error.message}`);
    }


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


