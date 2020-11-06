import { animate, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade',[
       transition('void=>*',[
           style({opacity:0}),
           animate(2000)
       ])
])
export let landing= trigger('landing',[
    transition('void=>*', [
    style({padding:'400px'}),
      animate(2000) 
  ])
])
export let rightIn= trigger('rightIn',[
    transition('void=>*', [
    style({paddingRight:'40px'}),
      animate(1000) 
  ])
])