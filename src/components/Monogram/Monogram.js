import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      width="200"
      height="100"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="74.13131103515624 -42.77754516601563 351.7373779296875 235.55509033203126"
      style={{
        background: 'none',
        '--darkreader-inline-bgimage': 'none',
        '--darkreader-inline-bgcolor': 'initial',
      }}
      data-darkreader-inline-bgimage=""
      data-darkreader-inline-bgcolor=""
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient id="editing-shadow-gradient1" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0"
            stopColor="none"
            stopOpacity="0"
            data-darkreader-inline-stopcolor=""
            style={{ '--darkreader-inline-stopcolor': 'none' }}
          ></stop>
          <stop
            offset="0.2"
            stopColor="none"
            stopOpacity="0"
            data-darkreader-inline-stopcolor=""
            style={{ '--darkreader-inline-stopcolor': 'none' }}
          ></stop>
          <stop
            offset="1"
            stopColor="none"
            stopOpacity="1"
            data-darkreader-inline-stopcolor=""
            style={{ '--darkreader-inline-stopcolor': 'none' }}
          ></stop>
        </linearGradient>
        <linearGradient
          id="editing-shadow-gradient2"
          x1="-0.4205048534524404"
          x2="1.4205048534524405"
          y1="0.10926887151072628"
          y2="0.8907311284892737"
        >
          <stop
            offset="0"
            stopColor="#000000"
            data-darkreader-inline-stopcolor=""
            style={{ '--darkreader-inline-stopcolor': '#191919' }}
          ></stop>
          <stop
            offset="1"
            stopColor="#000000"
            data-darkreader-inline-stopcolor=""
            style={{ '--darkreader-inline-stopcolor': '#191919' }}
          ></stop>
        </linearGradient>
        <filter id="editing-shadow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="20"></feGaussianBlur>
          <feComposite operator="in" in2="SourceGraphic"></feComposite>
          <feGaussianBlur stdDeviation="10"></feGaussianBlur>
        </filter>
      </defs>
      <g transform="translate(250,75)">
        <g>
          <g transform="translate(-43.815001010894775, 48.9900016784668)">
            <path
              d="M40.57-23.05L40.57 0L20.84 0L20.84 0Q13.80 0 10.35-2.42L10.35-2.42L10.35-2.42Q6.90-4.83 6.90-8.56L6.90-8.56L6.90-90.25L6.90-90.25Q6.90-93.56 9.80-95.77L9.80-95.77L9.80-95.77Q12.70-97.98 17.94-97.98L17.94-97.98L40.57-97.98L40.57-90.25L38.36-73.00L29.26-73.00L27.88-88.60L27.88-88.60Q27.88-89.84 26.22-89.84L26.22-89.84L20.42-89.84L20.42-89.84Q17.80-89.84 16.63-87.70L16.63-87.70L16.63-87.70Q15.46-85.56 15.46-82.94L15.46-82.94L15.46-82.94Q15.46-81.42 15.87-81.14L15.87-81.14L18.63-12.28L18.63-12.28Q18.22-12.14 18.22-11.87L18.22-11.87L18.22-11.87Q18.22-11.45 19.46-11.45L19.46-11.45L27.60-11.45L27.60-11.45Q29.26-11.45 29.26-12.28L29.26-12.28L32.02-23.05L40.57-23.05ZM80.73-97.98L79.49 0L54.51 0L49.54-23.74L60.44-26.50L61.13-7.45L69.97-6.76L69.97-85.01L67.48-91.63L67.48-97.98L80.73-97.98Z"
              fill="url(#editing-shadow-gradient2)"
            ></path>
          </g>
        </g>
      </g>
      {/* <style>text {
  font-size: 64px;
  font-family: Arial Black;
  dominant-baseline: central;
  text-anchor: middle;
}</style> */}
      {/* <style class="darkreader darkreader--sync" media="screen"></style> */}
    </svg>
    // <svg
    //   aria-hidden
    //   className={classes(styles.monogram, className)}
    //   width="46"
    //   height="29"
    //   viewBox="0 0 46 29"
    //   ref={ref}
    //   {...props}
    // >
    //   <defs>
    //     <clipPath id={clipId}>
    //       <path d="M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z" />
    //     </clipPath>
    //   </defs>
    //   <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
    //   {highlight && (
    //     <g clipPath={`url(#${clipId})`}>
    //       <rect className={styles.highlight} width="100%" height="100%" />
    //     </g>
    //   )}
    // </svg>
  );
});
