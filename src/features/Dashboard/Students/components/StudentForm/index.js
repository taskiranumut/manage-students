"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/StudentList/context";
import useFetch from "@/hooks/useFetch";
import { baseUrl } from "@/features/Dashboard/Students/api";
import { generateId } from "@/utils";
import { rebaseData } from "@/features/Dashboard/Students/utils";
import Link from "next/link";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormItems/FormInput";
import Button from "@/components/Forms/Button";

export default function StudentForm({ formValues, isEdit, id, hasItem }) {
  const [form, setForm] = useState(formValues);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState("");
  const { setAddedStudents, setEditedStudents } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    if (isEdit && !form) {
      setForm(formValues);
    }
  }, [formValues, isEdit, form]);

  const options = useMemo(
    () => ({
      method: isEdit ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }),
    [form, isEdit]
  );
  const { data, loading, error } = useFetch(url, options, isFetching);

  useEffect(() => {
    if (!data) return;

    const updateItem = (data, form, id) => {
      const newItem = rebaseData(data, {
        newId: id,
        newWebsite: form.website,
      });

      hasItem
        ? setEditedStudents((list) =>
            list.map((item) => (item.id === id ? newItem : item))
          )
        : setEditedStudents((list) => [...list, newItem]);
    };

    const addItem = (data, form) => {
      setAddedStudents((list) => [
        rebaseData(data, {
          newId: generateId(),
          newWebsite: form.website,
        }),
        ...list,
      ]);
    };
    isEdit ? updateItem(data, form, id) : addItem(data, form);
    setIsFetching(false);
    router.replace("/dashboard/students");
  }, [
    data,
    isEdit,
    id,
    form,
    hasItem,
    setAddedStudents,
    setEditedStudents,
    router,
  ]);

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
    if (!form.firstName || !form.lastName || !form.email) {
      return;
    }

    setIsFetching(true);
    setUrl(
      isEdit ? `${baseUrl}/${id.length > 3 ? 100 : id}` : `${baseUrl}/add`
    );
  };

  return (
    form && (
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          onChange={handleChange}
          value={form.firstName}
          placeholder="Enter first name"
          label="First Name *"
        />
        <FormInput
          type="text"
          name="lastName"
          onChange={handleChange}
          value={form.lastName}
          placeholder="Enter last name"
          label="Last Name *"
        />
        <FormInput
          type="text"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Enter email"
          label="Email *"
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
        <Button
          type="submit"
          btnStyle="primary"
          width="full"
          disabled={loading}
        >
          Submit
        </Button>
        <Link href="/dashboard/students">
          <Button type="submit" btnStyle="cancel" width="full">
            Cancel
          </Button>
        </Link>
      </Form>
    )
  );
}
