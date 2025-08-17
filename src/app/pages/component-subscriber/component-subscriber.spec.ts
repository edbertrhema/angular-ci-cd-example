import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSubscriber } from './component-subscriber';

describe('ComponentSubscriber', () => {
  let component: ComponentSubscriber;
  let fixture: ComponentFixture<ComponentSubscriber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSubscriber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSubscriber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
