import PoppinsBold from "./Poppins-Bold.woff2";
import PoppinsHeavy from "./Effra_W_Heavy.woff2";
import PoppinsMedium from "./Poppins-Medium.woff2";
import PoppinsRegular from "./Poppins-Regular.woff2";

export const poppinsBoldFont = PoppinsBold;
// export const effraHeavyFont = EffraHeavy;
export const poppinsMediumFont = PoppinsMedium;
export const poppinsRegularFont = PoppinsRegular;

export const effraRegular = `
@font-face {
  font-family: 'Effra Regular';
  font-display: 'block';
  src: local('Effra Regular'), url(${poppinsRegularFont}) format('woff2');
}`;

export const effraMedium = `
@font-face {
  font-family: 'Effra Medium';
  font-display: 'block';
  src: local('Effra Medium'), url(${poppinsMediumFont}) format('woff2');
}`;

export const effraBold = `
@font-face {
  font-family: 'Effra Bold';
  font-display: 'block';
  src: local('Effra Bold'), url(${poppinsBoldFont}) format('woff2');
}`;

// export const effraHeavy = `
// @font-face {
//   font-family: 'Effra Heavy';
//   font-display: 'block';
//   src: local('Effra Heavy'), url(${effraHeavyFont}) format('woff2');
// }`;
