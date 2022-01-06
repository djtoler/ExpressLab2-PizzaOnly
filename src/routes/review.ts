import express from "express";
import Reviewer from "../models/reviewer";
const review = express.Router();

const newReviewerArray: Reviewer[] = [];
let reviewerId: number = 100;

review.get('/', (req, res) => {
    // populate the review page with the review.hbs file
    res.render('review')
})

review.post('/', (req, res) => {
    // create a new object blueprint using the Reviewer interface and get info from the request body.
    let newReviewer: Reviewer = req.body;
    
    // build out my new reviewer object using the Reviewer interface properties. 
    newReviewer.id = reviewerId;
    // reset the global reviewerId for the next reviewer object to be created by adding 100.
    reviewerId+= 100;
    // continue building out the reviewer object
    newReviewer.name = req.body.name;
    newReviewer.comment = req.body.comment;
    newReviewer.ratingNumber = req.body.rating;
    // either return an error if all 3 fields arent populated or push the newly created reviewer object 
    // into the newReviwerArray from line 5.
    if (!newReviewer.name || ! newReviewer.comment || !newReviewer.ratingNumber) {
        return res.status(400).json({error: 'ERROR: Must enter ALL 3 fields to submit review'})
    } else {
        newReviewerArray.push(newReviewer);
    };
    // Respond to the review post by rendering the reviewCon page with new name, comment and rating 
    // variables using handlebars
    res.render('reviewCon', {
        reviewerName: req.body.name,
        reviewerComment: req.body.comment,
        reviewerRating: req.body.rating
    })
})

export default review;