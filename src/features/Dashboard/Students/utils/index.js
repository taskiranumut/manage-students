export const rebaseDataList = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map((data) => rebaseData(data));
};

export const rebaseData = (data, options = {}) => {
  const { id, firstName, lastName, email, phone, image, company, website } =
    data;
  const { newId = null, newWebsite = null } = options;

  return {
    id: newId ? newId : id,
    email,
    phone,
    website: newWebsite ? newWebsite : website,
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
    website: "",
  };
};

export const getItemFormData = (data) => {
  if (!data) return {};

  const { studentName, email, phone, website, imgUrl, companyName } = data;
  const [first, ...last] = studentName.split(" ");

  return {
    firstName: first,
    lastName: last.join(" "),
    email: email,
    phone: phone ? phone : "",
    website: website ? website : "",
    image: imgUrl ? imgUrl : "",
    company: { name: companyName ? companyName : "" },
  };
};
