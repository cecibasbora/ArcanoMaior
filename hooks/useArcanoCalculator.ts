import { useCallback, useState } from 'react';

export default function useArcanoCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState('');

  const sumDigits = useCallback((num: number): number => {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }, []);

  const calculateArcano = useCallback(() => {
    setError('');
    const dia = parseInt(day) || 0;
    const mes = parseInt(month) || 0;
    const ano = parseInt(year) || 0;
    
    if (!dia || !mes || !ano) {
      setError('Por favor, preencha todos os campos');
      return null;
    }

    if (dia <= 0 || mes <= 0 || ano <= 0 || 
        dia > 31 || mes > 12 || ano < 1900) {
      setError('Por favor, insira uma data válida');
      return null;
    }

    const sum = dia + mes + ano;
    let arcanoNumber = sumDigits(sum);
    
    while (arcanoNumber > 22) {
      arcanoNumber = sumDigits(arcanoNumber);
    }
    
    return arcanoNumber;
  }, [day, month, year, sumDigits]);

  return {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    modalVisible,
    setModalVisible,
    error,
    calculateArcano
  };
}