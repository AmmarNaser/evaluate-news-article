import React, { useState } from "react";
import { handleSubmit } from "./helpers/handleSubmit";
import { checkUrl } from "./helpers/checkUrl";
import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Navbar,
} from "react-bootstrap";

export default function App() {
  const [loading, setloading] = useState(false);
  const [result, setresult] = useState();
  const [enterurl, setURL] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const checking = checkUrl(enterurl);
    console.log(checking);
    if (checking) {
      setloading(true);
      handleSubmit(enterurl).then((data) => {
        const { agreement, confidence, irony, model, score_tag, subjectivity } =
          data;
        setresult({
          agreement,
          confidence,
          irony,
          model,
          score_tag,
          subjectivity,
        });
        setloading(false);
      });
    } else {
      alert("incorrect url");
    }
  };

  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand className="navbar-text">
            Evaluate News Articles
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="maincontainer">
        <div className=" input-field">
          <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="please input URL"
                id="enter-url"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setURL(e.target.value)}
                className="inputs"
              />
              <Button variant="outline-light" id="button-addon2" type="submit">
                OK
              </Button>
            </InputGroup>
          </Form>
        </div>
        <div> {loading && <div className="loader"></div>}</div>
        <div className=" result-field">
          <div>
            <ul>
              {result &&
                Object.entries(result).map(([key, value]) => (
                  <li key={key}>
                    {key} : {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
