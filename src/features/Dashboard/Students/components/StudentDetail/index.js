"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import styles from "./styles.module.css";
import { useGlobalContext } from "@/contexts/StudentList/context";
import { baseUrl, baseSelect } from "@/features/Dashboard/Students/api";
import {
  getEmptyFormData,
  getItemFormData,
} from "@/features/Dashboard/Students/utils";
import useFetch from "@/hooks/useFetch";
import Card from "@/components/Card";
import StudentForm from "@/features/Dashboard/Students/components/StudentForm";

export default function StudentDetail({ isEdit }) {
  const [url, setUrl] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [resData, setResData] = useState(null);
  const [formValues, setFormValues] = useState(getEmptyFormData());

  const { studentList } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    if (id && isEdit) {
      setIsFetching(true);
      setUrl(`${baseUrl}/${id.length > 3 ? 100 : id}?${baseSelect}`);
    }
  }, [id, isEdit]);

  const options = useMemo(() => ({ method: "GET" }), []);
  const { data, loading, error } = useFetch(url, options, isFetching);

  useEffect(() => {
    if (!data) return;

    setResData(data);
    setIsFetching(false);
  }, [data]);

  useEffect(() => {
    if (!resData || !isEdit) return;

    // resData (id ile API'den gelen data) bilgileri kullanılamaz. Çünkü dummyjson'da update işlemleri veritabanına kaydedilmediği için veri güncel değil. Onun yerine güncel olduğu için GlobalContext'ten çekilen veri kullanılıyor.
    const studentData = structuredClone(
      studentList.find((item) => item.id == id)
    );
    setFormValues(getItemFormData(studentData));
  }, [resData, id, isEdit, studentList]);

  return (
    !loading && (
      <Card>
        <h2>{!isEdit ? "Add New Student" : "Edit Student"}</h2>
        <StudentForm formValues={formValues} isEdit={isEdit} id={id} />
      </Card>
    )
  );
}
