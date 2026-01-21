import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./CountUp.css";

export function ContadorEstadistica({
  endValue,
  label,
  prefix = "",
  suffix = "",
}) {
  // Usamos el hook useInView.
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo queremos que se dispare una vez
    threshold: 0.5, // Cuándo se considera visible (el 50% del componente)
  });

  return (
    <div className="container-count-up">
      <div
        className="card h-100 p-3"
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "black",
        }}
      >
        <div className="card-body text-center" ref={ref}>
          <h1 className="display-3 text-primary fw-bolder mb-3">
            <CountUp
              start={0}
              end={inView ? endValue : 0}
              duration={3.25}
              separator="."
            >
              {({ countUpRef }) => (
                <>
                  {prefix && <span style={{ color: "white" }}>{prefix}</span>}
                  <span ref={countUpRef} />
                  {suffix && <span style={{ color: "white" }}>{suffix}</span>}
                </>
              )}
            </CountUp>
          </h1>

          <p className="lead text-muted">{label}</p>
        </div>
      </div>
    </div>
  );
}
