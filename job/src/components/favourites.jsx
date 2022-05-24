import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { removeFromFavourite } from "../slice/favourites/favoritesSlice.js";
import { useSelector, useDispatch } from "react-redux";

function Favourites(state) {
  const favorite = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeFromFavourite());
  }, []);
  return (
    <>
      <div className=" my-5 mx-5">
        {favorite.list.map((job) => (
          <Card>
            <Card.Body className="space-between" key="">
              {job.title}
              <a href={job.company_name}>{job.company_name}</a>
            </Card.Body>
            <div className="container col-6">
              <p>Category: {job.category}</p>
              <p>Publication Date: {job.publication_date}</p>
            </div>
            <Button
              id="apply"
              as="input"
              type="button"
              value="Add "
              size="sm"
            />
          </Card>
        ))}
      </div>
    </>
  );
}

//export default withRouter(Favourites);
export default Favourites;
