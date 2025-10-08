import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; 

export function ContadorEstadistica({ endValue, label, prefix = '', suffix = '' }) {
  
  // 1. Usamos el hook useInView. 
  const [ref, inView] = useInView({
    triggerOnce: true, // Importante: solo lo detecta una vez
    threshold: 0.5,    // Cuándo se considera visible (50% del elemento)
  });

  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4">
      <div className="card h-100 p-3" style={{backgroundColor:'transparent',border:'none' , color:'black'}}>
        <div className="card-body text-center" ref={ref}> {/*  Adjuntamos el ref al contenedor */}
          
          <h1 className="display-3 text-primary fw-bolder mb-3">
            
            <CountUp 
              start={0}
              // 2. Usamos el estado 'inView' para controlar el valor final
              end={inView ? endValue : 0} 
              duration={3.25}
              separator="."
            >
            {({ countUpRef }) => (
                <>
                  {prefix && <span style={{color:'white'}}>{prefix}</span>} 
                  <span ref={countUpRef} />
                  {suffix && <span style={{color:'white'}}>{suffix}</span>}
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