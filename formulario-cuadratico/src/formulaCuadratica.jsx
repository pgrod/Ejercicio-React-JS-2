import React, { useState } from 'react';

const FormulaCuadratica = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');

  const calculateRoots = (e) => {
    e.preventDefault();

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = parseFloat(c);

    const discriminant = numB * numB - 4 * numA * numC;

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {
      setResult('Por favor, ingrese números válidos.');
    } else if (discriminant < 0) {
      setResult('La ecuación no tiene soluciones reales.');
    } else {
      const sqrtDisc = Math.sqrt(discriminant);
      const x1 = (-numB + sqrtDisc) / (2 * numA);
      const x2 = (-numB - sqrtDisc) / (2 * numA);
      setResult(`Las raíces son: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Calculadora de Fórmula Cuadrática</h2>
      <form onSubmit={calculateRoots}>
        <div>
          <label>a:</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} required />
        </div>
        <div>
          <label>b:</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} required />
        </div>
        <div>
          <label>c:</label>
          <input type="number" value={c} onChange={(e) => setC(e.target.value)} required />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {result && <p style={{ marginTop: '15px' }}>{result}</p>}
    </div>
  );
};

export default FormulaCuadratica;