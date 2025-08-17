import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSubscriber1 } from './component-subscriber-1';

describe('ComponentSubscriber1', () => {
  let component: ComponentSubscriber1;
  let fixture: ComponentFixture<ComponentSubscriber1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentSubscriber1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSubscriber1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
