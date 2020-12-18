const Image = require('../models/Image');

exports.getImages = async (req,res) => {
    try {
        const AllImages = await Image.find();
        res.json(AllImages);
    } catch (error) {
        res.status(400).send('Hubo un error')
    }
};

exports.getByTitle = async (req,res) => {
    try {
        const AllImages = await Image.find({title:req.params.query});
        res.json(AllImages);
    } catch (error) {
        res.status(400).send('Hubo un error')
    }
}

exports.createImage = async (req,res) => {
    try {
        const image = new Image(req.body);
        await image.save();
        res.json(image);
    } catch (error) {
        res.status(500).send('Hubo un error'+error.message);
    }
};

exports.updateImage = async (req,res) => {
    const {title,url} = req.body;
    const newImage= {};
    if(title,url){
        newImage.title = title;
        newImage.url = url;
    }
    try {
        const image = await Image.findById(req.params.id);
        if(!image){
            res.status(404).send('Image not found');
        }
        await Image.findByIdAndUpdate({_id:req.params.id},{$set:newImage},{new:true});
        res.status(200).send('Image Updated');
    } catch (error) {
        res.status(500).send('Hubo un error'+error.message);
    }
}

exports.deleteImage = async (req,res) => {
    try {
        const image = await Image.findById(req.params.id);
        if(!image){
            res.status(404).send('Image not found');
        }
        await Image.findOneAndRemove({_id:req.params.id});
        res.status(200).send('Image Deleted');
    } catch (error) {
        res.status(500).send('Hubo un error '+error.message)
    }
}