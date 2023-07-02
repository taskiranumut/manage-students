export const rebaseDataList = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map((data) => rebaseData(data));
};

export const rebaseData = (data) => {
  const { id, firstName, lastName, email, phone, image, company, website } =
    data;

  return {
    id,
    email,
    phone,
    website,
    imgUrl: image,
    studentName: `${firstName} ${lastName}`,
    companyName: company?.name,
    isNew: false,
    isEdited: false,
    isDeleted: false,
  };
};
