import * as React from "react";
import {
  Html,
  Button,
  Body,
  Container,
  Head,
  Heading,
  Text,
} from "@react-email/components";

interface FormCompletionEmailProps {
  name: string;
  message: string;
}

export default function FormCompletionEmail({
  name,
  message,
}: FormCompletionEmailProps) {
  return (
    <Html lang="en">
      <Head>
        <title>Thank You for Contacting Me</title>
      </Head>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Hello {name},</Heading>
          <Text style={paragraph}>
            Thank you for reaching out to me through my portfolio website. I
            appreciate your interest and will get back to you as soon as
            possible.
          </Text>
          <Text style={paragraph}>
            Here is a copy of your message for your reference:
          </Text>
          <Text style={messageStyle}>&quot;{message}&quot;</Text>

          <Text style={paragraph}>
            Best regards,
            <br />
            Tushar Vaid
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f6f6",
  fontFamily: "Arial, sans-serif",
  padding: "20px",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  marginBottom: "20px",
  lineHeight: "1.5",
};
const messageStyle = {
  fontSize: "16px",
  fontStyle: "italic",
  backgroundColor: "#f1f1f1",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "20px",
  whiteSpace: "pre-wrap",
};
// const button = {
//   backgroundColor: "#007BFF",
//   color: "#ffffff",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   textDecoration: "none",
//   display: "inline-block",
//   fontWeight: "bold",
// };
