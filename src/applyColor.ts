export const applyColor = (message: string, colorizer: (text: string) => string) => colorizer(message);