function useRouter() {
  const pathChange = (path: string) => {
    window.location.pathname = path;
  };

  const push = (path: string) => {
    window.history.pushState({}, '', path);
    pathChange(path);
  };

  return { push, pathChange };
}

export default useRouter;
