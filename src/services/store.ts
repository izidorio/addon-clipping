import manivest from "../manifest.json";

export const store = {
  set(key: string, value: string | object) {
    const valueParsed = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(`@${manivest.name}_${key}`, valueParsed);
    return value;
  },
  get<T>(key: string): T {
    const value = localStorage.getItem(`@${manivest.name}_${key}`);
    return value ? JSON.parse(value) : null;
  },
  delete(key: string): void {
    localStorage.removeItem(`@${manivest.name}_${key}`);
  },
};
