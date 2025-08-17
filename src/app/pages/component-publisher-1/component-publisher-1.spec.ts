import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPublisher1 } from './component-publisher-1';

describe('ComponentPublisher1', () => {
  let component: ComponentPublisher1;
  let fixture: ComponentFixture<ComponentPublisher1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPublisher1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPublisher1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
