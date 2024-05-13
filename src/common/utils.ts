export const require = (imgPath:any) => {
    try {
      const handlePath = imgPath.replace('@', '..');
      return new URL(handlePath, import.meta.url).href;
    } catch (error) {
      console.warn(error);
    }
  }