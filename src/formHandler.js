export const formHandler = (handler) => (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  handler([...formData.entries()]);
};
