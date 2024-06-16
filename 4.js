function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const capSiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  if (Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
    return "invalid";
  }

  const passStucture = capSiteName + "#" + name + "@" + birthYear;
  return passStucture;
}

console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
