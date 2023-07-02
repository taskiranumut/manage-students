"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";
import { useGlobalContext } from "@/contexts/StudentList/context";
import { rebaseData } from "@/features/Dashboard/Students/utils";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import { baseUrl } from "@/features/Dashboard/Students/api";
import { generateId } from "@/utils";

export default function StudentForm({ formValues, studentData, isEdit }) {
  const [form, setForm] = useState(formValues);
  const [isActiveFetch, setIsActiveFetch] = useState(false);
  const router = useRouter();
  const { setStudentList } = useGlobalContext();

  const url = isEdit
    ? `${baseUrl}/${studentData?.id.length > 3 ? 100 : studentData?.id}`
    : `${baseUrl}/add`;
  const options = useMemo(
    () => ({
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }),
    [form, isEdit]
  );
  const { data, loading, error } = useFetch(url, options, isActiveFetch);

  useEffect(() => {
    if (!data) return;

    setIsActiveFetch(false);

    const updateItem = (data, form) => {
      setStudentList((list) => [
        list.map((item) =>
          item.id === studentData?.id
            ? rebaseData(data, {
                isEdited: true,
                isNew: studentData?.isNew,
                isDeleted: studentData?.isDeleted,
                newId: studentData?.id,
                newWebsite: form.website,
              })
            : item
        ),
      ]);
    };

    const addItem = (data, form) => {
      setStudentList((list) => [
        ...list,
        rebaseData(data, {
          isNew: true,
          newId: generateId(),
          newWebsite: form.website,
        }),
      ]);
    };

    isEdit ? updateItem(data, form) : addItem(data, form);
    router.replace("/dashboard/students");
  }, [data, setStudentList, router, form, studentData, isEdit]);

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;

    if (targetName === "company") {
      const company = { name: value };
      setForm((form) => ({
        ...form,
        company,
      }));
      return;
    }

    setForm((form) => ({
      ...form,
      [targetName]: value,
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
        type="text"
        name="phone"
        onChange={handleChange}
        value={form.phone}
        placeholder="Enter phone"
        label="Phone"
      />
      <FormInput
        type="text"
        name="image"
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
        name="company"
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
