export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}年${month}月${day}日`;
};

export const formatContent = (content: string): string[] => {
  return content.split('\n').filter(line => line.trim() !== '');
};
