"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";

export default function StudentForm({ formValues }) {
  const [form, setForm] = useState(formValues);

  const handleChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
        placeholder="Enter first name"
        label="First Name"
      />
      <FormInput
        type="text"
        name="lastName"
        onChange={handleChange}
        value={form.lastName}
        placeholder="Enter last name"
        label="Last Name"
      />
      <FormInput
        type="text"
        name="email"
        onChange={handleChange}
        value={form.email}
        placeholder="Enter email"
        label="Email"
      />
      <FormInput
        type="number"
        name="phone"
        onChange={handleChange}
        value={form.phone}
        placeholder="Enter phone"
        label="Phone"
      />
      <FormInput
        type="text"
        name="imgUrl"
        onChange={handleChange}
        value={form.imgUrl}
        placeholder="Enter image url"
        label="Image URL"
      />
      <FormInput
        type="text"
        name="website"
        onChange={handleChange}
        value={form.website}
        placeholder="Enter website"
        label="Website"
      />
      <FormInput
        type="text"
        name="companyName"
        onChange={handleChange}
        value={form.companyName}
        placeholder="Enter company name"
        label="Company Name"
      />
      <Button type="submit" btnStyle="primary" width="full">
        Submit
      </Button>
      <Link href="/dashboard/students">
        <Button type="submit" btnStyle="cancel" width="full">
          Cancel
        </Button>
      </Link>
    </Form>
  );
}
