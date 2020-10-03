import Particles from "react-particles-js";
import React from "react";

const ParticleContainer = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 180,
            density: {
              enable: false,
            },
          },
          color: {
            value: ["#35cc60", "#52cbd0", "#0b521f"],
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 6,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 4,
            direction: "circle",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
};

export default ParticleContainer;
