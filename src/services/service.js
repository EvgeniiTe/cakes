const API_STUB = "./cakes.json";

// export const getAllCakes = () => fetch(`${API_STUB}`)
//   .then((res) => res.json())
//   .then((data) => data.cakes);

// export const getCake = (id) => fetch(`${API_STUB}`)
//   .then((res) => res.json())
//   .then((data) => data.cakes[id]);

export const getNavMain = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.navMain);

export const getMainInfoFill = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.mainInfoFill);

export const getStoryInfoFill = () => fetch(`${API_STUB}`)
  .then((res) => res.json())
  .then((data) => data.storyInfoFill);

export const getAllCakes = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.75) {
        resolve(
          fetch(`${API_STUB}`)
          .then((res) => res.json())
          .then((data) => data.cakes),
        );
      } else {
        reject(new Error("Something bad happened with LIST"));
      }
    }, 1000);
  });
};

export const getCake = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.75) {
        resolve(
          fetch(`${API_STUB}`)
          .then((res) => res.json())
          .then((data) => data.cakes[id]),
        );
      } else {
        reject(new Error("Something bad happened with PRODUCT"));
      }
    }, 1000);
  });
};