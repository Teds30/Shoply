import { useEffect, useRef } from 'react';

const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
          const unmount = func();
          return () => unmount && unmount();
        } else {
            didMount.current = true;
        }
      }, deps);

    useEffect(() => {
        return () => didMount.current = false;
      }, []);
}

export default useDidMountEffect;