import asyncHandler from "../middlewares/asyncHandler.js";
import Contract from "../models/contractInfo.js";
// import User from "../models/user";
import Crop from "../models/crop.js";

const createContract = asyncHandler(async (req, res) => {
    const { cropId, offeredPrice, offeredQuantity, deliveryDate, message } = req.body;
    const crop = await Crop.findById(cropId);
    if (!crop) {
        res.status(404);
        throw new Error("Crop not found");
    }
    if (crop.sellerId.toString() === req.user._id.toString()) {
        res.status(400);
        throw new Error("You cannot create a contract for your own crop");
    }
    const cropSnapshot = {
        crop_name: crop.crop_name,
        category: crop.category,
        variety: crop.variety,
        quantity: crop.quantity,
        price: crop.price,
        harvestDate: crop.harvestDate,
        image: crop.image,
        quality: crop.quality,
        organic: crop.organic,
        location: crop.location,
        phone: crop.phone,
        farmerName: crop.farmerName,
    };

    const contract = await Contract.create({
        buyer: req.user._id,
        farmer: crop.sellerId,
        crop: cropId,
        cropSnapshot,
        offeredPrice,
        offeredQuantity,
        deliveryDate,
        message,
        status: 'pending',
    });
    res.status(201).json(contract);
});

const getBuyerContracts = asyncHandler(async (req, res) => {
    const contracts = await Contract.find({ buyer: req.user._id }).populate('farmer');
    res.status(200).json(contracts);

});

// const getFarmerContracts = asyncHandler(async (req, res) => {
//     const contracts = await Contract.find({ farmer: req.user._id });
//     res.status(200).json(contracts);
// });

const getFarmerContracts = asyncHandler(async (req, res) => {
  const contracts = await Contract.find({ farmer: req.user._id }).populate('buyer');
  res.status(200).json(contracts);
});


const acceptContract = asyncHandler(async (req, res) => {
    const contract = await Contract.findById(req.params.id);
    if (!contract || contract.farmer.toString() !== req.user._id.toString()) {
        res.status(404);
        throw new Error('Contract not found or unauthorized');
    }

    const crop = await Crop.findById(contract.crop);
    if (!crop) {
        res.status(404);
        throw new Error('Crop not found');
    }
    if (contract.offeredQuantity > crop.quantity) {
        res.status(400);
        throw new Error('Offered quantity exceeds available crop quantity');
    }
    contract.status = 'ongoing';
    crop.quantity -= contract.offeredQuantity;
    if (crop.quantity <= 0) {
        await crop.deleteOne();
    } else {
        await crop.save();
    }

    await contract.save();

    res.status(200).json({ message: 'Contract accepted and crop quantity updated', contract });
});


const rejectContract = asyncHandler(async (req, res) => {
    const contract = await Contract.findById(req.params.id);
    if (!contract || contract.farmer.toString() !== req.user._id.toString()) {
      res.status(404);
      throw new Error('Contract not found or unauthorized');
    }

    if (contract.buyer.toString() === req.user._id.toString()) {
        contract.buyerRejected = true;
      } else if (contract.farmer.toString() === req.user._id.toString()) {
        contract.farmerRejected = true;
      } else {
        res.status(401);
        throw new Error('Unauthorized to reject this contract');
      }
  
    contract.status = 'rejected';
    await contract.save();
  
    res.status(200).json({ message: 'Contract rejected', contract });
  });


  const withdrawContract = asyncHandler(async (req, res) => {
    const contract = await Contract.findById(req.params.id);
    if (!contract || contract.buyer.toString() !== req.user._id.toString()) {
      res.status(404);
      throw new Error('Contract not found or unauthorized');
    }
  
    contract.status = 'rejected';
    await contract.save();
  
    res.status(200).json({ message: 'Contract withdrawn by buyer', contract });
  });



  const completeContract = asyncHandler(async (req, res) => {
    const contract = await Contract.findById(req.params.id);
    if (!contract) {
      res.status(404);
      throw new Error('Contract not found');
    }

    if (contract.status !== 'ongoing') {
      res.status(400);
      throw new Error('Contract is not in ongoing state');
    }
  
    if (contract.buyer.toString() === req.user._id.toString()) {
      contract.buyerCompleted = true;
    } else if (contract.farmer.toString() === req.user._id.toString()) {
      contract.farmerCompleted = true;
    } else {
      res.status(401);
      throw new Error('Unauthorized to complete this contract');
    }  
    if (contract.buyerCompleted && contract.farmerCompleted) {
      contract.status = 'completed';
      await contract.save();
      res.status(200).json({ message: 'Contract completed', contract });
    } else {
      await contract.save();
      res.status(200).json({ message: 'Waiting for both parties to complete the contract' });
    }
  });


  const getPastContracts = asyncHandler(async (req, res) => {
    const contracts = await Contract.find({ 
      $or: [{ buyer: req.user._id }, { farmer: req.user._id }],
      status: 'completed'
    });
    res.status(200).json(contracts);
  });
  export {
    createContract,
    getBuyerContracts,
    getFarmerContracts,
    acceptContract,
    rejectContract,
    withdrawContract,
    completeContract,
    getPastContracts
  };
  



