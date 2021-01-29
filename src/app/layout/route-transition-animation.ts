import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('Home => About, About => Portfolio, Home => Portfolio', [
    style({ position: 'relative' }),
    // Home y About
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),
    // About
    query(':enter', [
      style({
        top: '100%',
        opacity: 0
      })
    ]),
    // Ambos
    query(':leave', animateChild()),
      group([
        // Home
        query(':leave', [
          animate('600ms ease', style({ top: '-150%', opacity: 0 }))
        ]),
        // About
        query(':enter', [
          animate('600ms ease', style({ top: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
  ]),
  transition('About => Home, Portfolio => About, Portfolio => Home', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),
    // Home
    query(':enter', [
      style({
        top: '-150%',
        opacity: 0,
        width: '100%',
        height: '100%'
      })
    ]),
    query(':leave', animateChild()),
      group([
        // About
        query(':leave', [
          animate('600ms ease', style({ top: '100%', opacity: 0 }))
        ]),
        // Home
        query(':enter', [
          animate('600ms ease', style({ top: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
  ])
]);
