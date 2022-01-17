import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import ThanksImg from "../../assets/images/thankyou.png";

const ContactMe = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-center">
          <h2 className="text-2xl">{`Thank you ${name}!`}</h2>
          <div className="text-md">
            {`We'll be in touch soon. Make sure to check your email at ${email} for updates!`}
          </div>
          <img src={ThanksImg} width={800}></img>
        </div>
      </>
    );
  }

  return (
    <Container>
      <Row>
        <Form className="text-center" onSubmit={handleSubmit}>
          <h1>Contact Me</h1>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>

            <Form.Control
              as="textarea"
              aria-label="With textarea"
              type="text"
              placeholder="Enter Your Message"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default ContactMe;
