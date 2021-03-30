import './BgAnim.scss';
import React, { Component } from 'react';

const BgAnim = () => {
  let blocks = [];
  let block = function () {
    for (var i = 0; i < 400; i++) {
      blocks.push(
        <div
          key={i}
          //   style={{ animation: `animate ${i * 0.05}s ease-in-out forwards` }}
          className="blocks"
        ></div>
      );

      // blocks[i].style.animationdelay = `${i * 0.05}s`;
    }
  };
  block();
  return (
    <div>
      <section>
        <h2>Barnabas Molnar </h2>
        <div className="banner">
          {blocks}
          <div className="blocks"></div>
        </div>
      </section>
    </div>
  );
};

export default BgAnim;
