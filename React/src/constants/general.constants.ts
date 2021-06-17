export enum PAGES {
  HOME,
  SKILLS,
  EXPERIENCE,
}

export const PAGE_TITLE = new Map<string, string>([
  ['menu-home', '🤟🏼 Portafolio | Hola'],
  ['menu-skills', '💪🏽 Portafolio | Habilidades'],
  ['menu-experience', '🧑🏽‍💻 Portafolio | Experiencia laboral'],
]);

export const PAGE_SUBTITLE = new Map<string, string>([
  ['menu-home', 'Hola, soy Francisco Casales'],
  [
    'menu-skills',
    'Aquí puedes encontrar un listado de mis habilidades, Francisco Casales.',
  ],
  [
    'menu-experience',
    'Aquí puedes encontrar un listado de mi experiencia laboral, Francisco Casales.',
  ],
]);
