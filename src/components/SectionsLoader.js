import React, {useEffect, useRef} from 'react';
const noop = () => {console.log('in viewport')};
export default (props) => {
    const callback = props.callback || noop;
    const threshold = props.threshold || 0.2;
    const ref = useRef(null);
    const target = ref.current;
    useEffect(() => {
        const sectionObserver = new IntersectionObserver((x) => {
            if (x[0].isIntersecting) {
                console.log('section enetred');
                callback(true);
            } else {
                console.log('section exited');
                callback(false);
            }
        }, {threshold: threshold});
        if (ref.current) {
            sectionObserver.observe(ref.current);
        }
    }, [])
    
return <div ref={ref}>{props.children}</div>
} 