import { useEffect, useRef } from "react";

export function useStickyState<T extends HTMLElement = HTMLElement>() {
    const sentinelRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<T>(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        const header = headerRef.current;

        if (!sentinel || !header) return;

        // use CSS container-query based scroll state to bypass this polyfill if supported
        if (CSS.supports("container-type", "scroll-state")) return;

        const observer = new IntersectionObserver(([entry]) => {
            const top = entry.rootBounds?.top ?? 0;
            const stuck = entry.boundingClientRect.bottom <= top;

            header.classList.toggle("header-stuck", stuck);
        });

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, []);

    return {sentinelRef, headerRef};
};