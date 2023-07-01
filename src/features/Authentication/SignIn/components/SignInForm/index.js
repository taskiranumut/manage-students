import React from "react";
import styles from "./styles.module.css";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";

export default function SignInForm() {
  return (
    <Form>
      <FormInput type="text" placeholder="Enter your email" label="Email" />
      <FormInput
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Button type="submit" btnStyle="primary" width="full">
        Sign In
      </Button>
    </Form>
  );
}
