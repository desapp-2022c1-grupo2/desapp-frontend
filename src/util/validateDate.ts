export const validateDate = (date: string) => date ? new Date(date).toLocaleDateString("es-AR") : "-"
