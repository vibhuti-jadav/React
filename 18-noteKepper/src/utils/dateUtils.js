export const getFormattedDate = () => {
  const now = new Date();
  return now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
};
