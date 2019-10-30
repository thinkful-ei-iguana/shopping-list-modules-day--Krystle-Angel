function validateName (name) {
  if(name === ""){
    throw TypeError ('name must not be blank');
  }
};

  function create (name) {
    const newItem = {
      id: cuid(), 
      name: name, 
      checked: false 
    }
    return newItem;
  }; 

export default { 
  validateName, 
  create,
};