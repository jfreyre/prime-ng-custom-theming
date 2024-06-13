import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJfrComponent } from './test-jfr.component';

describe('TestJfrComponent', () => {
  let component: TestJfrComponent;
  let fixture: ComponentFixture<TestJfrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestJfrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestJfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
