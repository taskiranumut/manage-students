export const rebaseDataList = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map((data) => rebaseData(data));
};

export const rebaseData = (data, options = {}) => {
  const { id, firstName, lastName, email, phone, image, company, website } =
    data;
  const { isNew = false, isEdited = false, isDeleted = false } = options;

  return {
    id,
    email,
    phone,
    website,
    imgUrl: image,
    studentName: `${firstName} ${lastName}`,
    companyName: company?.name,
    isNew,
    isEdited,
    isDeleted,
  };
};
