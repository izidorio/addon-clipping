interface cropperProps {
  text: string;
  size: number;
  position?: "center" | "end";
}
export const helper = {
  cropper({ text = "", size, position = "end" }: cropperProps): string {
    if (!text) {
      return "";
    }
    if (text.length > size) {
      if (position && position === "center") {
        const medium = Math.floor(size / 2);
        const start = text.length - medium + 5;
        return text.substring(0, medium) + " ... " + text.substring(start, text.length);
      }

      return text.substring(0, size - 4) + " ...";
    }
    return text;
  },
};
