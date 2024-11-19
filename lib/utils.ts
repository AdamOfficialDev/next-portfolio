// lib/utils.ts
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};
