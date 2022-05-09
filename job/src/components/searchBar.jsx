import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <div className="mt-5 mx-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Search for new Jobs!</Form.Label>
            <div id="searchBar">
              <Form.Control type="text" placeholder="" />
            </div>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary">Go!</Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;
