
'use client';

import HorizontalScroll from './HorizontalScroll';

export default function ClientPageWrapper() {
  return (
    <>
      <div className="navigation">
        <div className="nav-text">SCROLL</div>
        <div className="nav-progress">
          <div className="nav-progress-fill"></div>
        </div>
        <div className="nav-text">01 / 10</div>
      </div>
      <HorizontalScroll />
    </>
  );
}
