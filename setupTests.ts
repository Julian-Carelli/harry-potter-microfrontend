/* eslint-disable @typescript-eslint/no-unused-vars */
// src/setupTests.js
import '@testing-library/jest-dom'
import { initReactI18next } from 'react-i18next'
import { use } from 'i18next'

use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        components: {
          CharacterGallery: {
            HarryPotter: {
              title: 'Harry Potter Characters',
              character: {
                species: {
                  Human: 'Human',
                  Goblin: 'Goblin',
                  Owl: 'Owl',
                  unknown: 'unknown',
                },
                gender: {
                  Male: 'Male',
                  Female: 'Female',
                },
                status: {
                  Alive: 'Alive',
                  Dead: 'Dead',
                },
              },
            },
            paginate: {
              next: 'Next',
              previous: 'Previous',
            },
          },
          CharacterDetails: {
            backButton: {
              title: 'Return to Home',
            },
          },
        },
      },
    },
    es: {
      translations: {
        components: {
          CharacterGallery: {
            HarryPotter: {
              title: 'Personajes de Harry Potter',
              character: {
                species: {
                  Human: 'Humano',
                  Goblin: 'Goblin',
                  Owl: 'Buho',
                  unknown: 'Desconocido',
                },
                gender: {
                  Male: 'Masculino',
                  Female: 'Femenino',
                },
                status: {
                  Alive: 'Vivo',
                  Dead: 'Muerto',
                },
              },
            },
            paginate: {
              next: 'Siguiente',
              previous: 'Anterior',
            },
          },
          CharacterDetails: {
            backButton: {
              title: 'Regresar a la Home',
            },
          },
        },
      },
    },
  },
  lng: 'es',
})
