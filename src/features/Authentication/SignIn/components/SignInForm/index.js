"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) return;

    router.replace("/dashboard");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="email"
        onChange={handleChange}
        value={form.email}
        placeholder="Enter your email"
        label="Email"
      />
      <FormInput
        type="password"
        name="password"
        onChange={handleChange}
        value={form.password}
        placeholder="Enter your password"
        label="Password"
      />
      <Button type="submit" btnStyle="primary" width="full">
        Sign In
      </Button>
    </Form>
  );
}
