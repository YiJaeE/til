function useRouter() {
  const pathChange = (path: string) => {
    console.log('change');

    window.location.pathname = path;
  };

  const push = (path: string) => {
    window.history.pushState({}, '', path);
    pathChange(path);
  };

  return { push, pathChange };
}

export default useRouter;
