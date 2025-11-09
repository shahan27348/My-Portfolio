import { useState, useEffect, RefObject } from "react";

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  elementRef: RefObject<Element | null>,
  options: ObserverOptions,
  triggerOnce: boolean = true
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (triggerOnce) {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      } else {
        setIsVisible(entry.isIntersecting);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [elementRef, options, triggerOnce]);

  return isVisible;
};

export default useIntersectionObserver;
