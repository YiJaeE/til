import { useContext } from 'react';
import Context from '../context/Context';

function useRouter() {
  const { currentPath, pathChange } = useContext(Context);

  const push = (path: string) => {
    window.history.pushState({}, '', path);

    if (path !== currentPath) {
      pathChange(path);
    }
  };

  const click = (e: { preventDefault: () => void }, path: string) => {
    e.preventDefault();
    push(path);
  };

  return { push, click };
}

export default useRouter;
