export const rebaseData = (data) => {
  if (!Array.isArray(data) || data.length === 0) return [];

  return data.map(
    ({ id, firstName, lastName, email, phone, image, company, website }) => ({
      id,
      email,
      phone,
      website,
      imgUrl: image,
      studentName: `${firstName} ${lastName}`,
      companyName: company?.name,
    })
  );
};
