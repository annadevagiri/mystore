const cupcakesDefaultObject = require("../../cupcake.models/cupcake.json");
const { isValidId, ERROR, isValidIngredients, isValidName, isValidPrice } = require("../../validations/v1_cupcake_validations");


let cupcakes = cupcakesDefaultObject;
let sequence = 3;


// Get list All Cupcakes
const getCupcakes = async (req, res) => {
    try {
        const allCupcakes = await cupcakes;
        res.status(200).json(allCupcakes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get cupcake by id
const getCupcakesById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidId()) {
            res.status(404).json({ message: ERROR.ERROR_INVALID_ID });
        }
        const cupcakeByIdItem = cupcakes.find(item => item.id === Number(id));

        if (!cupcakeByIdItem) {
            res.status(400).json({ message: ERROR.ERROR_NOT_FOUND });
        }
        res.status(200).json(cupcakeByIdItem);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add new cup cake POST
const addNewCupcake = (req, res) => {
    try {
        // validate all the input json
        const { name, price, description, ingredients } = req.body;
        if (isValidName(name) && isValidPrice(price) && isValidIngredients(ingredients)) {
            sequence += 1
            cupcakes.push({
                id: sequence, name, price, description, ingredients
            })
            res.status(200).json(cupcakes);
        } else {
            res.status(405).json({ message: ERROR.ERROR_INVALID_INPUT })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// PUT update the cupcake item
const updateCupcake = (req, res) => {
    try {
        // validate all the input json
        const { id } = req.params;
        if (!isValidId(id)) {
            res.status(400).json({ message: ERROR.ERROR_INVALID_ID });
        }
        const { name, price, description, ingredients } = req.body;
        if (isValidId(id) && isValidName(name) && isValidPrice(price) && isValidIngredients(ingredients)) {
            const cupcakeByIdItemIdx = cupcakes.findIndex(item => item.id === Number(id));
            if (cupcakeByIdItemIdx < 0) {
                res.status(404).json({ message: ERROR.ERROR_NOT_FOUND });
            }
            cupcakes[cupcakeByIdItemIdx] = {
                id: Number(id), name, price, description, ingredients
            };
            res.status(200).json(cupcakes);
        } else {
            res.status(405).json({ message: ERROR.ERROR_VALIDATION_EXCEPTION })
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete the cupcake item in the store

const deleteCupcake = (req, res) => {
    try {
        // validate all the input json
        const { id } = req.params;
        if (!isValidId(id)) {
            res.status(400).json({ message: ERROR.ERROR_INVALID_ID });
        }
        const cupcakeByIdItemIdx = cupcakes.findIndex(item => item.id === Number(id));
        if (cupcakeByIdItemIdx < 0) {
            res.status(404).json({ message: ERROR.ERROR_NOT_FOUND });
        }
        const deletedCupcake = cupcakes.splice(cupcakeByIdItemIdx, 1);
        res.status(200).json(deletedCupcake);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getCupcakes,
    getCupcakesById,
    addNewCupcake,
    updateCupcake,
    deleteCupcake
}