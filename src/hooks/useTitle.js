import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Traveling Hero `;
  }, [title]);
};

export default useTitle;
