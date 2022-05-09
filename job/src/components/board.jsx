import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Board extends Component {
  state = {
    jobs: [],
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
              <Card.Body className="space-between" key="">
                {job.title}, <a href="/Company">{job.company_name}</a>
              </Card.Body>
              <div className="container col-6">
                <p>Category: {job.category}</p>
                <p>Publication Date: {job.publication_date}</p>
              </div>
              <Button
                id="apply"
                as="input"
                type="button"
                value="Input"
                size="sm"
              />
            </>
          ))}
        </Card>
      </div>
    );
  }
}

export default Board;
