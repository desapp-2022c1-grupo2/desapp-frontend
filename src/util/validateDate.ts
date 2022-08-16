export const validateDate = (date: string | undefined) => date ? new Date(date).toLocaleDateString("es-AR") : "-"
