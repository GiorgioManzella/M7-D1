import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { addToFavourite } from "../slice/favourites/favoritesSlice.js";

class Board extends Component {
  state = {
    jobs: [],
    company: "null",
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10"
      );
      let jobs = await response.json();
      console.log(jobs.data, "estoy aca");
      this.setState({ jobs: jobs.data });
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <div className=" my-5 mx-5">
        <Card>
          {this.state.jobs.map((job) => (
            <>
              {/* {this.setState({ company: job.company_name })} */}
              <Card.Body className="space-between" key={job._id}>
                {job.title}, , <a href={job.company_name}>{job.company_name}</a>
              </Card.Body>
              <div className="container col-6">
                <p>Category: {job.category}</p>
                <p>Publication Date: {job.publication_date}</p>
              </div>
              <Button
                id="apply"
                as="input"
                type="button"
                value="add to favorite"
                size="sm"
                onClick={() => this.props.addToFavourite(job)}
              />
            </>
          ))}
        </Card>
      </div>
    );
  }
}

export default withRouter(Board);
