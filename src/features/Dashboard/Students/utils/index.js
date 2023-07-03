export const rebaseDataList = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map((data) => rebaseData(data));
};

export const rebaseData = (data, options = {}) => {
  const { id, firstName, lastName, email, phone, image, company, domain } =
    data;
  const { newId = null } = options;

  return {
    id: newId ? newId : id,
    email,
    phone,
    domain,
    imgUrl: image,
    studentName: `${firstName} ${lastName}`,
    companyName: company?.name,
  };
};

export const getEmptyFormData = () => {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    image: "/images/avatar.png",
    company: { name: "" },
    domain: "",
  };
};

export const getItemFormData = (data) => {
  if (!data) return {};

  const { studentName, email, phone, domain, imgUrl, companyName } = data;
  const [first, ...last] = studentName.split(" ");

  return {
    firstName: first,
    lastName: last.join(" "),
    email: email,
    phone: phone ? phone : "",
    domain: domain ? domain : "",
    image: imgUrl ? imgUrl : "",
    company: { name: companyName ? companyName : "" },
  };
};
