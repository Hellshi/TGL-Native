/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import 'intl';
import 'intl/locale-data/jsonp/br';

export const FormatPrice = (value) => {
  const formated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  const price = formated.toString().split('BRL');
  const response = `R$ ${price[0]}`;
  return response;
};
