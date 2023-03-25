function filterDuplicatedData(data) {
  const results = [];
  for (const country of data) {
    const isInResult = results.some((obj) => obj.region === country.region);
    if (!isInResult) results.push(country);
  }

  return results;
}

export function getRegionArrayForMUI(data) {
  const regions = filterDuplicatedData(data);
  const result = [];
  regions.forEach((country) => {
    const value = country.region;
    result.push({ value, label: value });
  });
  return result;
}
