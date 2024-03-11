import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedProjectComponent } from './opened-project.component';

describe('OpenedProjectComponent', () => {
  let component: OpenedProjectComponent;
  let fixture: ComponentFixture<OpenedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenedProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
