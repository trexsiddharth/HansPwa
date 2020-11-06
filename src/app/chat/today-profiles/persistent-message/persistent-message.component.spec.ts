import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentMessageComponent } from './persistent-message.component';

describe('PersistentMessageComponent', () => {
  let component: PersistentMessageComponent;
  let fixture: ComponentFixture<PersistentMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistentMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
