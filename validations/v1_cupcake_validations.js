
const ERROR = {
    ERROR_INVALID_ID : "Invalid ID supplied",
    ERROR_NOT_FOUND : "Cupcake not found",
    ERROR_INVALID_INPUT : "Invalid input",
    ERROR_VALIDATION_EXCEPTION: "Validation Exception"
}

function isValidId(id) {
    if(!id || isNaN(id)) {
        return false
    } else {
        return true
    }
}

function isValidName(name) {
    if(name || name !== '') {
        return true
    } else {
        return false
    }
}

function isValidIngredients(ingredients) {
    if(ingredients || Array.isArray(ingredients)) {
        return true
    } else {
        return false
    }
}

function isValidPrice(price) {
    if(!price || isNaN(price)) {
        return false
    } else {
        return true
    }
}


module.exports = { 
    ERROR,
    isValidId,
    isValidPrice,
    isValidName,
    isValidIngredients 
}