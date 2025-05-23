function GradientButton({ href, children, aos = "fade-up", aosDelay = "200" }) {
  return (
    <>
      <style>
        {`
          .gradient-button {
            background: linear-gradient(90deg, #0068C9 0%, #00aaff 50%, #0068C9 100%);
            background-size: 200% 100%;
            background-position: 0% 0%;
            border: none;
            transition: background-position 0.5s linear;
          }
          .gradient-button:hover {
            background-position: 100% 0%;
          }
        `}
      </style>
      <a
        href={href}
        className="btn btn-primary mt-3 gradient-button"
        data-aos={aos}
        data-aos-delay={aosDelay}
      >
        {children}
      </a>
    </>
  );
}

export default GradientButton;
