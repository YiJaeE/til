import { useContext } from 'react';
import Context from '../context/Context';

export const routePath = [
  { text: 'go main', path: '/' },
  { text: 'about', path: '/about' },
];

function useRouter() {
  const { currentPath, pathChange } = useContext(Context);

  const push = (path: string) => {
    window.history.pushState({}, '', path);

    if (path !== currentPath) {
      pathChange(path);
    }
  };

  const componentText = (target: { textContent: string }) => {
    const text = target.textContent;
    const pathText = routePath.find((route) => route.text === text);
    return pathText?.path;
  };

  const click = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const $target = e.target;
    const path = componentText($target)!;
    push(path);
  };

  return { push, click };
}

export default useRouter;
