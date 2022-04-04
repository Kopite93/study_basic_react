const setCookie = (name, id, exp = 3) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 1000 * 60 * 60 * 24);
  document.cookie = `${name} =${id}; expires =${date.toUTCString()} `;
};

const getCookie = (name) => {
  let value = "; " + document.cookie;
  console.log(value);
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  console.log(date);
  document.cookie = name + "=; expires=" + date;
};

export { getCookie, setCookie, deleteCookie };
