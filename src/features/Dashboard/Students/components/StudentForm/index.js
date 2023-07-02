"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";
import { useStudentListContext } from "@/contexts/StudentList/context";
import { rebaseData } from "../../utils";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import { baseUrl } from "../../api";

export default function StudentForm({ formValues }) {
  const [form, setForm] = useState(formValues);
  const [isActiveFetch, setIsActiveFetch] = useState(false);
  const router = useRouter();
  const { setStudentList } = useStudentListContext();

  const url = `${baseUrl}/add`;
  const options = useMemo(
    () => ({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }),
    [form]
  );
  const { data, loading, error } = useFetch(url, options, isActiveFetch);

  useEffect(() => {
    if (!data) return;

    setIsActiveFetch(false);
    setStudentList((list) => [...list, rebaseData(data, { isNew: true })]);
    router.replace("/dashboard/students");
  }, [data, setStudentList, router]);

  const handleChange = (e) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName && !form.lastName && !form.email) {
      return;
    }
    setIsActiveFetch(true);
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
        value={form.image}
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
        value={form.company.name}
        placeholder="Enter company name"
        label="Company Name"
      />
      <Button type="submit" btnStyle="primary" width="full" disabled={loading}>
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
