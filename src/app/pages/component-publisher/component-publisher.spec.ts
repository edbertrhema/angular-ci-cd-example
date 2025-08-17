import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPublisher } from './component-publisher';

describe('ComponentPublisher', () => {
  let component: ComponentPublisher;
  let fixture: ComponentFixture<ComponentPublisher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentPublisher]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPublisher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
