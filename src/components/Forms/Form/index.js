import React from "react";

export default function Form({
  onSubmit = (e) => {
    e.preventDefault();
  },
  children,
}) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
