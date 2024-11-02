import { useCallback, useMemo, useRef } from 'react';
import '../App.css';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import '../index.css';

function Video() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['center end', 'start start'] });

  const images = useMemo(() => {
    const loadedImages = [];
    for (let i = 1; i <= 59; i++) {
      const img = new Image();
      img.src = `/images/new${i}.jpg`;
      loadedImages.push(img);
    }
    return loadedImages;
  }, []);

  const currentIndex = useTransform(scrollYProgress, [0, 1], [1, 59]);

  const render = useCallback((index) => {
    const context = ref.current?.getContext('2d');
    if (context && images[index - 1].complete) {
      const img = images[index - 1];
      const canvasWidth = ref.current.width;
      const canvasHeight = ref.current.height;

      const imgAspect = img.width / img.height;
      const canvasAspect = canvasWidth / canvasHeight;

      let drawWidth, drawHeight;
      
      if (imgAspect > canvasAspect) {
        // Image is wider than canvas
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgAspect;
      } else {
        // Image is taller than canvas
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgAspect;
      }

      const x = (canvasWidth - drawWidth) / 2; // Center horizontally
      const y = (canvasHeight - drawHeight) / 2; // Center vertically

      context.clearRect(0, 0, canvasWidth, canvasHeight); // Clear previous image
      context.drawImage(img, x, y, drawWidth, drawHeight);
    }
  }, [images]);

  useMotionValueEvent(currentIndex, 'change', (latest) => {
    render(Number(latest.toFixed()));
  });

  return (
    <div style={{ height: '6000px', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ height: '2000px' }}>
        <canvas ref={ref} width={1000} height={1000}></canvas>
      </div>
    </div>
  );
}

export default Video;